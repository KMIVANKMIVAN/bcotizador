import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Departamento } from 'src/departamentos/entities/departamento.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';

@Entity('sucursales')
export class Sucursal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, nullable: false })
  sucursal: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  ubicacion: string;

  @ManyToOne(() => Departamento, (departamento) => departamento.sucursales)
  @JoinColumn({ name: 'departamento_id' })
  departamento: Departamento;

  @OneToMany(() => Usuario, (usuario) => usuario.sucursal)
  usuarios: Usuario[];
}
