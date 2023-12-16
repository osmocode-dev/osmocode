import { Inject, Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { ClientKafka } from "@nestjs/microservices";
import { AuthRefreshTokenDto, AuthSigninDto, AuthSignupDto } from "@osmo/nest/auth/dto";


@Injectable()
export class AuthService implements OnModuleInit, OnModuleDestroy {

  constructor(
    @Inject('AUTH_SERVICE') private readonly authClient: ClientKafka,
  ) { }

  async onModuleInit() {
    this.authClient.subscribeToResponseOf('auth.post.signin');
    this.authClient.subscribeToResponseOf('auth.post.signup');
    this.authClient.subscribeToResponseOf('auth.post.refresh');
    this.authClient.subscribeToResponseOf('auth.get.credentials');
    await this.authClient.connect();
  }

  onModuleDestroy() {
    this.authClient.close();
  }

  async signup(input: AuthSignupDto) {
    return this.authClient.send('auth.post.signup', input).toPromise();
  }

  async signin(input: AuthSigninDto) {
    return this.authClient.send('auth.post.signin', input).toPromise();
  }

  async refresh(input: AuthRefreshTokenDto) {
    return this.authClient.send('auth.post.refresh', input).toPromise();
  }

  async me(access: string) {
    return this.authClient.send('auth.get.credentials', access).toPromise();
  }

}
