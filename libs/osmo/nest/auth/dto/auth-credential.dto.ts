import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { Exclude } from "class-transformer";
import { AuthCredential } from "../interfaces";

export class AuthCredentialDto implements AuthCredential {

  @IsString()
  readonly id!: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email!: string;

  @Exclude()
  readonly password!: string;

  constructor(partial: Partial<AuthCredential>) {
    Object.assign(this, partial);
  }

}
