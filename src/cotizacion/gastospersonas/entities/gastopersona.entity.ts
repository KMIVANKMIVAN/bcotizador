import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Cotizacion } from 'src/cotizacion/cotizaciones/entities/cotizacion.entity';

@Entity('gastospersonas')
export class Gastopersona {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'smallint', nullable: false })
  nropersona: number;

  @Column({ type: 'smallint', nullable: false })
  alimento: number;

  @Column({ type: 'smallint', nullable: false })
  alojamiento: number;

  @Column({ type: 'numeric', precision: 14, scale: 2, nullable: false })
  extras: number;

  @OneToMany(() => Cotizacion, (cotizacion) => cotizacion.gastopersona)
  cotizaciones: Cotizacion[];
}
