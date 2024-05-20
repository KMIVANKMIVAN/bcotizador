import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Empresa } from 'src/empresa/empresas/entities/empresa.entity';
import { Unidad } from 'src/empresa/unidades/entities/unidade.entity';

@Entity('direcciones')
export class Direccion {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  direccion: string;

  @Column({ type: 'varchar', length: 200, nullable: false })
  descripcion: string;

  @ManyToOne(() => Empresa, (empresa) => empresa.direcciones)
  @JoinColumn({ name: 'empresa_id' })
  empresa: Empresa

  @OneToMany(() => Unidad, (unidad) => unidad.direccion)
  unidades: Unidad[]
}
