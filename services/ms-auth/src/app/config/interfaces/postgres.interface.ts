
export interface IPostgres {
  host:               string;
  port:               number;
  database:           string;
  username:           string;
  password:           string;
  autoLoadEntities:   boolean;
  synchronize:        boolean;
};
