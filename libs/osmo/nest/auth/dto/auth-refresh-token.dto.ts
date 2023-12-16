import { IsNotEmpty, IsString } from "class-validator";

export class AuthRefreshTokenDto {

  @IsNotEmpty()
  @IsString()
  readonly refresh!: string;

}
