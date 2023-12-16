import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Optional } from "typescript-optional";
import { AuthCredentialEntity } from "@osmo/nest/auth/entities";
import { AuthCredential } from "@osmo/nest/auth/interfaces";


@Injectable()
export class CredentialsService {

  constructor(
    @InjectRepository(AuthCredentialEntity) private readonly credentialsRepository: Repository<AuthCredentialEntity>,
  ) { }

  async findByEmail(email: string): Promise<Optional<AuthCredential>> {
    const user = await this.credentialsRepository.findOneBy({ email });
    return Optional.ofNullable(user);
  }

  async create(user: Partial<AuthCredentialEntity>): Promise<AuthCredential> {
    return await this.credentialsRepository.save(user);
  }

}
