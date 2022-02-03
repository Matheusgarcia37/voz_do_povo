import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Denuncia } from './Denuncia'

@Entity()
export class RegistroDeCidadao {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column({ type: 'float' })
  telefone: number;

  @Column()
  cep: number

  @Column()
  endereco: string

  @Column()
  numero: number

  @Column()
  bairro: string
  
  @Column()
  complemento: string

  @OneToMany(type => Denuncia, registroDeCidadao => RegistroDeCidadao)
  denuncias: Denuncia

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
