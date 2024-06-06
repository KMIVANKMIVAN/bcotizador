import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';

import { Direccion } from 'src/empresa/direcciones/entities/direccion.entity';
import { Cargo } from 'src/empresa/cargos/entities/cargo.entity';

@Entity('unidades')
export class Unidad {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  unidad: string;

  @Column({ type: 'varchar', length: 200, nullable: false })
  descripcion: string;

  @ManyToOne(() => Direccion, (direccion) => direccion.unidades)
  @JoinColumn({ name: 'direccion_id' })
  direccion: Direccion

  @OneToMany(() => Cargo, (cargo) => cargo.unidad)
  cargos: Cargo[]
}
