import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Cotizacion } from 'src/cotizacion/cotizaciones/entities/cotizacion.entity';

@Entity('cotizacionesambientes')
export class Cotizacionambiente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  nombreambiente: string;

  @Column({ type: 'numeric', precision: 12, scale: 4, nullable: false })
  volumen: number;

  @Column({ type: 'numeric', precision: 12, scale: 4, nullable: false })
  area: number;

  @Column({ type: 'numeric', precision: 12, scale: 4, nullable: false })
  altura: number;

  @Column({ type: 'smallint', nullable: false })
  nrocelda: number;

  @Column({ type: 'smallint', nullable: false })
  nroradiador: number;

  @Column({ type: 'smallint', nullable: false })
  cantidadventana: number;

  @ManyToOne(() => Cotizacion, (cotizacion) => cotizacion.cotizacionesambientes)
  @JoinColumn({ name: 'cotizacion_id' })
  cotizacion: Cotizacion;
}
