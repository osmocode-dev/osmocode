import { Module } from "@nestjs/common";
import { ConfigModule as NestConfigModule } from "@nestjs/config";
import { configSchema } from "./config.schema";
import { config } from "./config";

@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env.local',
      validationSchema: configSchema,
      load: [config]
    })
  ]
})
export class ConfigModule { }
