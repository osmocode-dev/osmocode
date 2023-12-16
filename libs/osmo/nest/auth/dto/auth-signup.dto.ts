import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { AuthSignup } from "../interfaces/auth-signup.interface";

export class AuthSignupDto implements AuthSignup {

  @IsNotEmpty()
  @IsEmail()
  readonly email!: string;

  // TODO REGEX for password validation
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  readonly password!: string;

}
