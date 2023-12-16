import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { AuthStrategy } from "./auth.strategy";


@Module({
  controllers: [AuthController],
})
export class AuthModule {
  static forRoot() {
    return {
      module: AuthModule,
      imports: [
        ClientsModule.register([{
          name: 'AUTH_SERVICE',
          transport: Transport.KAFKA,
          options: {
            client: {
              clientId: 'auth', // auth-client
              brokers: ['localhost:29092']
            },
            consumer: {
              groupId: 'auth-consumer' // auth-consumer-client
            }
          }
        }]),
      ],
      providers: [AuthService, AuthStrategy],
      exports: [AuthService, AuthStrategy]
    }
  }
}
