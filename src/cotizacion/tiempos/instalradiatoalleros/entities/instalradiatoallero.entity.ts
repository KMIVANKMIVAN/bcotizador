import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Cotizacion } from 'src/cotizacion/cotizaciones/entities/cotizacion.entity';

@Entity('instalradiatoalleros')
export class Instalradiatoallero {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'smallint', nullable: false })
  nroradiador: number;
  
  @Column({ type: 'smallint', nullable: false })
  horas: number;

  @OneToMany(() => Cotizacion, (cotizacion) => cotizacion.instalradiatoallero)
  cotizaciones: Cotizacion[];
}
