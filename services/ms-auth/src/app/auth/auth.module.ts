import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { CredentialsModule } from "../credentials/credentials.module";
import { HashModule } from "../hash/hash.module";
import { JwtModule } from "../jwt/jwt.module";


@Module({
  imports: [
    CredentialsModule,
    HashModule,
    JwtModule
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule { }
