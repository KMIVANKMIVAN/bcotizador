import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Ciudad } from 'src/ciudades/entities/ciudad.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';

@Entity('sucursales')
export class Sucursal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, nullable: false })
  sucursal: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  ubicacion: string;

  @ManyToOne(() => Ciudad, (ciudad) => ciudad.sucursales)
  @JoinColumn({ name: 'ciudad_id' })
  ciudad: Ciudad;

  @OneToMany(() => Usuario, (usuario) => usuario.sucursal)
  usuarios: Usuario[];
}
