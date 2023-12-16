import { Injectable } from "@nestjs/common";
import { AuthTokenType } from "@osmo/nest/auth/enums";
import { CredentialsService } from "../credentials/credentials.service";
import { HashService } from "../hash/hash.service";
import { JwtService } from "../jwt/jwt.service";
import { AuthRefreshTokenDto, AuthSigninDto, AuthSignupDto, AuthTokenDto } from "@osmo/nest/auth/dto";
import { AuthCredential } from "@osmo/nest/auth/interfaces";


@Injectable()
export class AuthService {

  constructor(
    private readonly hashService: HashService,
    private readonly jwtService: JwtService,
    private readonly credentialsService: CredentialsService,
  ) { }

  async signup(input: AuthSignupDto) {
    const exist = await this.credentialsService.findByEmail(input.email);
    if (exist.isPresent()) {
      // TODO: update for RPC handle
      throw new Error('User already exist');
    }
    const credential = await this.credentialsService.create({
      ...input,
      password: await this.hashService.hash(input.password)
    });

    return await this.jwtService.generateAuthToken(credential);
  }

  async signin(input: AuthSigninDto) {
    const exist = await this.credentialsService.findByEmail(input.email);
    const credential = exist.orElseThrow(() => new Error('Credentials not found'));
    if (!(await this.hashService.compare(input.password, credential.password))) {
      throw new Error('Invalid password');
    }
    return await this.jwtService.generateAuthToken(credential);
  }

  async refresh(input: AuthRefreshTokenDto): Promise<Partial<AuthTokenDto>> {
    const payload = await this.jwtService.verifyToken(AuthTokenType.REFRESH, input.refresh);
    const exist = await this.credentialsService.findByEmail(payload.email);
    const credential = exist.orElseThrow(() => new Error('Credentials not found'));
    return {
      access: await this.jwtService.generateToken(AuthTokenType.ACCESS, credential)
    };
  }

  async accessToken(
    tokenType: AuthTokenType,
    token: string,
  ): Promise<AuthCredential> {
    const payload = await this.jwtService.verifyToken(tokenType, token);
    const exist = await this.credentialsService.findByEmail(payload.email);
    const credential = exist.orElseThrow(() => new Error('Credentials not found'));
    return credential;
  }

}
