import { Injectable } from "@nestjs/common";


@Injectable()
export abstract class HashService {

  abstract salt(rounds?: number): Promise<string>;

  abstract hash(data: string): Promise<string>;

  abstract compare(data: string, encrypted: string): Promise<boolean>;

}
