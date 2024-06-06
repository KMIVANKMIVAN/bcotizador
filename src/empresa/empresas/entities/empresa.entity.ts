import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { Direccion } from 'src/empresa/direcciones/entities/direccion.entity';

@Entity('empresas')
export class Empresa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  razon_social: string;

  @Column({ type: 'varchar', length: 30, nullable: false })
  nit: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  ubicacion: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  pagina_web: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  telefono: string;

  @Column({ type: 'varchar', length: 9, nullable: true })
  linea_gratuita: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  celular: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  correo: string;

  @OneToMany(() => Direccion, (direccion) => direccion.empresa)
  direcciones: Direccion[]
}
