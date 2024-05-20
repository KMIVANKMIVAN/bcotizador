import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Sucursal } from 'src/sucursales/entities/sucursale.entity';

@Entity('departamentos')
export class Departamento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, nullable: false })
  departamento: string;

  @OneToMany(() => Sucursal, (sucursal) => sucursal.departamento)
  sucursales: Sucursal[];
}
