import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Denuncia } from './Denuncia'

@Entity()
export class Arquivo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  url: string;

  @Column()
  denunciaId: number;

  @ManyToOne(type => Denuncia, arquivos => Arquivo)
  @JoinColumn({ name: 'denunciaId', referencedColumnName: 'id' })
  denuncia: Denuncia

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
