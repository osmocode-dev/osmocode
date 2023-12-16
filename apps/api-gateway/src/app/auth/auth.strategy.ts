import { Inject, Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { ClientKafka } from "@nestjs/microservices";
import { PassportStrategy } from '@nestjs/passport';
import { AuthToken } from "@osmo/nest/auth/interfaces";
import { Strategy } from "passport-http-bearer";

@Injectable()
export class AuthStrategy extends PassportStrategy(Strategy, 'jwt') implements OnModuleInit, OnModuleDestroy {

  constructor(
    @Inject('AUTH_SERVICE') private readonly authClient: ClientKafka,
  ) {
    super();
  }

  onModuleInit() {
    this.authClient.subscribeToResponseOf('auth.jwt.token.access.credentials');
    this.authClient.connect();
  }

  onModuleDestroy() {
    this.authClient.close();
  }

  async validate(token: string) {
    const credentials = await this.authClient.send<AuthToken>('auth.jwt.token.access.credentials', token).toPromise();
    return credentials;
  }

}
