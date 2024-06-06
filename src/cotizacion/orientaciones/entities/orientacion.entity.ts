import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Cotizacion } from 'src/cotizacion/cotizaciones/entities/cotizacion.entity';

@Entity('orientaciones')
export class Orientacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  orientacion: string;

  @Column({ type: 'numeric', precision: 5, scale: 4, nullable: false })
  valor: number;

  @OneToMany(() => Cotizacion, (cotizacion) => cotizacion.orientacion)
  cotizaciones: Cotizacion[];
}
