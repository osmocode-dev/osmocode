import { IJwt } from "./interfaces/jwt.interface";
import { IPostgres } from "./interfaces/postgres.interface";

export interface IConfig {
  readonly postgres: IPostgres;
  readonly jwt: IJwt
}

export const config = (): IConfig => ({
  postgres: {
    host: process.env['PG_HOST'] as string,
    port: Number.parseInt(process.env['PG_PORT'] || ''),
    database: process.env['PG_DATABASE'] as string,
    username: process.env['PG_USERNAME'] as string,
    password: process.env['PG_PASSWORD'] as string,
    autoLoadEntities: Boolean(process.env['PG_AUTOLOAD']),
    synchronize: Boolean(process.env['PG_SYNCHRONIZE'])
  },
  jwt: {
    access: {
      public: process.env['JWT_ACCESS_PUBLIC'] as string,
      private: process.env['JWT_ACCESS_PRIVATE'] as string,
      time: Number.parseInt(process.env['JWT_ACCESS_TIME'] || '')
    },
    refresh: {
      secret: process.env['JWT_REFRESH_SECRET'] as string,
      time: Number.parseInt(process.env['JWT_REFRESH_TIME'] || '')
    },
  }
  // jwt: {
  //   access: {
  //     public: readFileSync(process.env['JWT_ACCESS_PUBLIC'] as string, 'utf-8'),
  //     private: readFileSync(process.env['JWT_ACCESS_PRIVATE'] as string, 'utf-8'),
  //     time: Number.parseInt(process.env['JWT_ACCESS_TIME'] || '')
  //   },
  //   refresh: {
  //     secret: process.env['JWT_REFRESH_SECRET'] as string,
  //     time: Number.parseInt(process.env['JWT_REFRESH_TIME'] || '')
  //   },
  // }
  //   confirmation: {
  //     secret: process.env['JWT_CONFIRMATION_SECRET'] as string,
  //     time: Number.parseInt(process.env['JWT_CONFIRMATION_TIME'] || '')
  //   },
  //   recovery: {
  //     secret: process.env['JWT_RECOVERY_SECRET'] as string,
  //     time: Number.parseInt(process.env['JWT_RECOVERY_TIME'] || '')
  //   }
  // },
  // google: {
  //   clientID: process.env['GOOGLE_CLIENT_ID'] as string,
  //   clientSecret: process.env['GOOGLE_CLIENT_SECRET'] as string,
  //   callbackURL: process.env['GOOGLE_CALL_BACK'] as string
  // },
  // github: {
  //   clientID: process.env['GITHUB_CLIENT_ID'] as string,
  //   clientSecret: process.env['GITHUB_CLIENT_SECRET'] as string,
  //   callbackURL: process.env['GITHUB_CALL_BACK'] as string
  // }
});
