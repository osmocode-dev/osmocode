import { Injectable } from "@nestjs/common";
import { HashService } from "../hash.service";
import { hash as crypt, genSalt, compare as resolve } from "bcrypt";


@Injectable()
export class BcryptService implements HashService {

  salt(rounds?: number | undefined): Promise<string> {
    return genSalt(rounds);
  }

  hash(data: string): Promise<string> {
    return crypt(data, 10);
  }

  compare(data: string, encrypted: string): Promise<boolean> {
    return resolve(data, encrypted);
  }

}
