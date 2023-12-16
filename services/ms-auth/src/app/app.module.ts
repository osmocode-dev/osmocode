import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from './config/config.module';
import { CredentialsModule } from './credentials/credentials.module';
import { DatabaseModule } from './database/database.module';
import { HashModule } from './hash/hash.module';
import { JwtModule } from './jwt/jwt.module';


@Module({
  imports: [
    AuthModule,
    ConfigModule,
    CredentialsModule,
    DatabaseModule,
    HashModule,
    JwtModule
  ]
})
export class AppModule {}
