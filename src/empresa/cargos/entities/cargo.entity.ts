import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';

import { Unidad } from "src/empresa/unidades/entities/unidade.entity";
import { Usuario } from 'src/usuarios/entities/usuario.entity';

@Entity('cargos')
export class Cargo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  cargo: string;

  @Column({ type: 'varchar', length: 200, nullable: false })
  descripcion: string;

  @ManyToOne(() => Unidad, (unidad) => unidad.cargos)
  @JoinColumn({ name: 'unidad_id' })
  unidad: Unidad;

  @OneToMany(() => Usuario, (usuario) => usuario.cargo)
  usuarios: Usuario[]
}
