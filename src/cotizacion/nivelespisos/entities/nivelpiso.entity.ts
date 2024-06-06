import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Cotizacion } from 'src/cotizacion/cotizaciones/entities/cotizacion.entity';

@Entity('nivelespisos')
export class Nivelpiso {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  nivelpiso: string;

  @Column({ type: 'numeric', precision: 5, scale: 4, nullable: false })
  valor: number;

  @OneToMany(() => Cotizacion, (cotizacion) => cotizacion.ciudadzona)
  cotizaciones: Cotizacion[];
}
