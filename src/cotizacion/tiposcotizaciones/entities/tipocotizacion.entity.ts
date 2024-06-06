import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Cotizacion } from 'src/cotizacion/cotizaciones/entities/cotizacion.entity';

@Entity('tiposcotizaciones')
export class Tipocotizacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, nullable: false })
  tipocotizacion: string;

  @OneToMany(() => Cotizacion, (cotizacion) => cotizacion.tipocotizacion)
  cotizaciones: Cotizacion[];
}
