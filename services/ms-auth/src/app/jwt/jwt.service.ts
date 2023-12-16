import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { AuthTokenType } from "@osmo/nest/auth/enums";
import { AuthToken, AuthTokenPayload, AuthCredential } from "@osmo/nest/auth/interfaces";

import { JwtService as NestJwtService } from "@nestjs/jwt";


@Injectable()
export class JwtService {

  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: NestJwtService
  ) { }

  async generateToken(
    tokenType: AuthTokenType,
    credential: AuthCredential
  ): Promise<string> {
    switch (tokenType) {
      case AuthTokenType.ACCESS:
        return this.jwtService.signAsync({
          sub: credential.id,
          email: credential.email,
          // session: TODO
        }, {
          secret: this.configService.get<string>('jwt.access.private'),
          expiresIn: this.configService.get<number>('jwt.access.time'),
          algorithm: 'RS256',
        });
      case AuthTokenType.REFRESH:
        return this.jwtService.signAsync({
          sub: credential.id,
          email: credential.email,
          // session: TODO
        }, {
          secret: this.configService.get<string>('jwt.refresh.secret'),
          expiresIn: this.configService.get<number>('jwt.refresh.time')
        });
      default:
        throw new Error(`Invalid token type: ${tokenType}`);
    }
  }

  async verifyToken<T extends AuthTokenPayload>(
    tokenType: AuthTokenType,
    token: string
  ) {
    switch (tokenType) {
      case AuthTokenType.ACCESS:
        return await this.jwtService.verifyAsync<T>(token, {
          secret: this.configService.get<string>('jwt.access.public'),
          algorithms: ['RS256']
        });
      case AuthTokenType.REFRESH:
        return await this.jwtService.verifyAsync<T>(token, {
          secret: this.configService.get<string>('jwt.refresh.secret')
        });
      default:
        throw new Error(`Invalid token type: ${tokenType}`);
    }
  }

  async generateAuthToken(
    credential: AuthCredential
  ): Promise<AuthToken> {
    const [access, refresh] = await Promise.all([
      this.generateToken(AuthTokenType.ACCESS, credential),
      this.generateToken(AuthTokenType.REFRESH, credential)
    ]);
    return { access, refresh };
  }

}
