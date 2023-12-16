import { AuthToken } from "../interfaces";

export class AuthTokenDto implements AuthToken {

  readonly access!: string;

  readonly refresh!: string;

}
