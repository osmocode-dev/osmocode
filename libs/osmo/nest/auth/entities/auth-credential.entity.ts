import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { AuthCredential } from "../interfaces/auth-credential.interface";

@Entity('credentials')
export class AuthCredentialEntity implements AuthCredential {

  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ name: 'email', unique: true, nullable: false })
  email!: string;

  @Column({ name: 'password', nullable: false })
  password!: string;

  constructor(partial: Partial<AuthCredentialEntity>) {
    Object.assign(this, partial);
  }

}
