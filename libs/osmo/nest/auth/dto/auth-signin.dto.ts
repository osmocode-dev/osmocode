import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { AuthSignin } from "../interfaces/auth-signin.interface";

export class AuthSigninDto implements AuthSignin {

  @IsNotEmpty()
  @IsEmail()
  readonly email!: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  readonly password!: string;

}
