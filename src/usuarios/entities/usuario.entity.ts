import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Rol } from '../../roles/entities/rol.entity';
import { Sucursal } from 'src/sucursales/entities/sucursal.entity';
import { Cargo } from 'src/empresa/cargos/entities/cargo.entity';

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, nullable: false })
  nombres: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  apellidos: string;

  @Column({ type: 'varchar', length: 50, nullable: false, unique: true })
  ci: string;

  @Column({ type: 'varchar', nullable: true, length: 10 })
  complemento: string;

  @Column({ type: 'varchar', length: 50, nullable: false, unique: true })
  correo: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  contrasenia: string;

  @Column({ type: 'boolean', default: true, nullable: false })
  es_activo: boolean;

  @Column({ type: 'boolean', default: false, nullable: false })
  se_cambiado_cntr: boolean;

  @ManyToMany(() => Rol, (rol) => rol.usuarios, { cascade: true })
  @JoinTable()
  roles: Rol[];

  @ManyToOne(() => Sucursal, (sucursal) => sucursal.usuarios)
  @JoinColumn({ name: 'sucursal_id' })
  sucursal: Sucursal;

  @ManyToOne(() => Cargo, (cargo) => cargo.usuarios)
  @JoinColumn({ name: 'cargo_id' })
  cargo: Cargo;
}
