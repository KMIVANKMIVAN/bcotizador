import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Cotizacion } from 'src/cotizacion/cotizaciones/entities/cotizacion.entity';

@Entity('radiadoresejes50cm')
export class Radiadoreje50cm {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, nullable: false })
  modelo: string;

  @Column({ type: 'numeric', precision: 14, scale: 2, nullable: false })
  potenciawats: number;

  @OneToMany(() => Cotizacion, (cotizacion) => cotizacion.radiadoreje50cm)
  cotizaciones: Cotizacion[];
}
