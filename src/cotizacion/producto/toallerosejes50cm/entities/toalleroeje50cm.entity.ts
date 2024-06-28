import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Cotizacion } from 'src/cotizacion/cotizaciones/entities/cotizacion.entity';

@Entity('toallerosejes50cm')
export class Toalleroeje50cm {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, nullable: false })
  modelo: string;

  @Column({ type: 'numeric', precision: 14, scale: 2, nullable: false })
  potenciawats: number;

  @Column({ type: 'numeric', precision: 14, scale: 2, nullable: false })
  precio: number;

  @Column({ type: 'numeric', precision: 14, scale: 2, nullable: false })
  preciopaquete: number;

  @OneToMany(() => Cotizacion, (cotizacion) => cotizacion.toalleroeje50cm)
  cotizaciones: Cotizacion[];
}
