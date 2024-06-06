import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Sucursal } from 'src/sucursales/entities/sucursal.entity';
import { Ciudadzona } from 'src/cotizacion/ciudadeszonas/entities/ciudadzona.entity';

@Entity('ciudades')
export class Ciudad {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, nullable: false })
  ciudad: string;

  @Column({ type: 'numeric', precision: 5, scale: 4, nullable: false })
  valor: number;

  @OneToMany(() => Sucursal, (sucursal) => sucursal.ciudad)
  sucursales: Sucursal[];

  @OneToMany(() => Ciudadzona, (ciudadzona) => ciudadzona.ciudad)
  ciudadeszonas: Ciudadzona[];
}
