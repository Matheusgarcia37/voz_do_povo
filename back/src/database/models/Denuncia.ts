import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Arquivo } from './Arquivo'
import { Cidade } from './Cidade'
import { ComentariosDeDenuncia } from './ComentariosDeDenuncia'
import { RegistroDeCidadao } from './RegistroDeCidadao'

export type Status = 'aberto' | 'fechado' | 'resolvido'

@Entity()
export class Denuncia {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  token: string;

  @Column()
  titulo: string;

  @Column()
  descricao: string;

  @Column({ type: 'enum', enum: ['aberto', 'fechado', 'resolvido'], default: 'aberto' })
  status: Status

  @Column({ nullable: true })
  cidadeId: number

  @ManyToOne(type => Cidade, denuncias => Denuncia)
  @JoinColumn({ name: 'cidadeId', referencedColumnName: 'id' })
  cidade: Cidade;

  @OneToMany(type => Arquivo, Arquivo => Arquivo.denuncia)
  arquivos: Arquivo[];

  @OneToMany(type => ComentariosDeDenuncia, ComentariosDeDenuncia => ComentariosDeDenuncia.denuncia)
  comentariosDeDenuncias: ComentariosDeDenuncia[];

  @Column({ nullable: true })
  cidadaoId: number

  @ManyToOne(type => RegistroDeCidadao, denuncias => Denuncia)
  @JoinColumn({ name: 'cidadaoId', referencedColumnName: 'id' })
  registroDeCidadao: RegistroDeCidadao;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
