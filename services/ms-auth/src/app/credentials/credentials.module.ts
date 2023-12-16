import { Module } from "@nestjs/common";
import { CredentialsService } from "./credentials.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthCredentialEntity } from "@osmo/nest/auth/entities";


@Module({
  imports: [
    TypeOrmModule.forFeature([AuthCredentialEntity])
  ],
  providers: [
    CredentialsService
  ],
  exports: [
    CredentialsService
  ]
})
export class CredentialsModule { }
