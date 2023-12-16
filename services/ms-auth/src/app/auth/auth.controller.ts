import { Controller } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { MessagePattern, Payload } from "@nestjs/microservices";
import { AuthSignupDto, AuthSigninDto, AuthCredentialDto, AuthRefreshTokenDto, AuthTokenDto } from "@osmo/nest/auth/dto";
import { AuthTokenType } from "@osmo/nest/auth/enums";


@Controller()
export class AuthController {

  constructor(
    private readonly authService: AuthService,
  ) { }

  @MessagePattern('auth.post.signup')
  async signup(@Payload() input: AuthSignupDto) {
    return await this.authService.signup(input);
  }

  @MessagePattern('auth.post.signin')
  async signin(@Payload() input: AuthSigninDto) {
    return await this.authService.signin(input);
  }

  @MessagePattern('auth.post.refresh')
  async refresh(@Payload() input: AuthRefreshTokenDto): Promise<Partial<AuthTokenDto>> {
    return await this.authService.refresh(input);
  }

  @MessagePattern('auth.jwt.token.access.credentials')
  async accessToken(@Payload() token: string): Promise<AuthCredentialDto> {
    const credential = await this.authService.accessToken(AuthTokenType.ACCESS, token);
    return new AuthCredentialDto(credential);
  }

}
