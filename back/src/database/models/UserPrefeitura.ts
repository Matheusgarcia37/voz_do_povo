import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Cidade } from './Cidade'
import bcrypt from 'bcryptjs'

@Entity()
export class UserPrefeitura {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  login: string;

  @Column()
  senha: string;

  @Column()
  cidadeId: number

  @ManyToOne(type => Cidade, usersPrefeitura => UserPrefeitura)
  @JoinColumn({ name: 'cidadeId', referencedColumnName: 'id' })
  cidade: Cidade;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword () {
    this.senha = bcrypt.hashSync(this.senha, 8)
  }
}
