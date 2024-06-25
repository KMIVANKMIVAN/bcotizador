import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Cotizacion } from 'src/cotizacion/cotizaciones/entities/cotizacion.entity';

@Entity('instaltuberias')
export class Instaltuberia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'numeric', precision: 20, scale: 2, nullable: false })
  inicio: number;

  @Column({ type: 'numeric', precision: 20, scale: 2, nullable: false })
  fin: number;

  @Column({ type: 'smallint', nullable: false })
  horas: number;

  @OneToMany(() => Cotizacion, (cotizacion) => cotizacion.instaltuberia)
  cotizaciones: Cotizacion[];
}
