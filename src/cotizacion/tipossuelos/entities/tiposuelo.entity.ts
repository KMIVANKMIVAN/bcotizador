import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Cotizacion } from 'src/cotizacion/cotizaciones/entities/cotizacion.entity';

@Entity('tipossuelos')
export class Tiposuelo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  tiposuelo: string;

  @Column({ type: 'numeric', precision: 5, scale: 4, nullable: false })
  valor: number;

  @OneToMany(() => Cotizacion, (cotizacion) => cotizacion.tiposuelo)
  cotizaciones: Cotizacion[];
}
