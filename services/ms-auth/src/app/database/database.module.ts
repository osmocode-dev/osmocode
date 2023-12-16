import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";


@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('postgres.host'),
        port: configService.get<number>('postgres.port'),
        database: configService.get<string>('postgres.database'),
        username: configService.get<string>('postgres.username'),
        password: configService.get<string>('postgres.password'),
        autoLoadEntities: configService.get<boolean>('postgres.autoLoadEntities'),
        synchronize: configService.get<boolean>('postgres.synchronize'),
      }),
      inject: [ConfigService],
    })
  ],
  exports: [TypeOrmModule]
})
export class DatabaseModule { }
