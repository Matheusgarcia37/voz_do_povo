import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Denuncia } from './Denuncia'

@Entity()
export class ComentariosDeDenuncia {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  mensagem: string;

  @Column()
  authenticated: boolean;

  @Column()
  denunciaId: number

  @ManyToOne(type => Denuncia, comentariosDeDenuncias => ComentariosDeDenuncia)
  @JoinColumn({ name: 'denunciaId', referencedColumnName: 'id' })
  denuncia: Denuncia;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
