import { Body, Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AuthRefreshTokenDto, AuthSigninDto, AuthSignupDto, AuthTokenDto } from "@osmo/nest/auth/dto";
import { AuthService } from "./auth.service";


@Controller('auth')
export class AuthController {

  constructor(
    private readonly authService: AuthService,
  ) { }

  @Post('/signup')
  async signup(@Body() input: AuthSignupDto) {
    return await this.authService.signup(input);
  }

  @Post('/signin')
  async signin(@Body() input: AuthSigninDto): Promise<AuthTokenDto> {
    return await this.authService.signin(input);
  }

  @Post('/refresh')
  async refresh(@Body() input: AuthRefreshTokenDto): Promise<AuthTokenDto> {
    return await this.authService.refresh(input);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/me')
  async me(@Req() req: Request) {
    return req['user'];
  }

  @Get('/test')
  test() {
    return {
      message: 'Ok'
    };
  }

}
