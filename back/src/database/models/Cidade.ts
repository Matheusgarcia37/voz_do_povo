import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Denuncia } from './Denuncia'
import { UserPrefeitura } from './UserPrefeitura'

@Entity()
export class Cidade {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(type => UserPrefeitura, cidade => Cidade)
  usersPrefeitura: UserPrefeitura

  @OneToMany(type => Denuncia, cidade => Cidade)
  denuncias: Denuncia;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
