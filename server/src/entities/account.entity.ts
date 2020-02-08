import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Account extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  facebook: string;

  @Column()
  google: string;

  @Column()
  twitter: string;

  @Column()
  github: string;

  @Column()
  slack: string;

  @Column('jsonb')
  token: any;

  @Column()
  role: string;

  @Column()
  avatar: string;
}

export default Account;
