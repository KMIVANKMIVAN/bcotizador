import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Cotizacion } from 'src/cotizacion/cotizaciones/entities/cotizacion.entity';
import { Ciudad } from 'src/ciudades/entities/ciudad.entity';

@Entity('ciudadeszonas')
export class Ciudadzona {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  ciudadzona: string;

  @Column({ type: 'numeric', precision: 5, scale: 4, nullable: false })
  valor: number;

  @ManyToOne(() => Ciudad, (ciudad) => ciudad.ciudadeszonas)
  @JoinColumn({ name: 'ciudad_id' })
  ciudad: Ciudad;

  @OneToMany(() => Cotizacion, (cotizacion) => cotizacion.ciudadzona)
  cotizaciones: Cotizacion[];
}
