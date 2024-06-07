import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Nivelpiso } from 'src/cotizacion/nivelespisos/entities/nivelpiso.entity';
import { Orientacion } from 'src/cotizacion/orientaciones/entities/orientacion.entity';
import { Tipopared } from 'src/cotizacion/tiposparedes/entities/tipopared.entity';
import { Tiposuelo } from 'src/cotizacion/tipossuelos/entities/tiposuelo.entity';
import { Tipotecho } from 'src/cotizacion/tipostechos/entities/tipotecho.entity';
import { Tipovidrio } from 'src/cotizacion/tiposvidrios/entities/tipovidrio.entity';
import { Ciudadzona } from 'src/cotizacion/ciudadeszonas/entities/ciudadzona.entity';
import { Tipocotizacion } from 'src/cotizacion/tiposcotizaciones/entities/tipocotizacion.entity';

@Entity('cotizaciones')
export class Cotizacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  nombrecotizacion: string;

  @Column({ type: 'numeric', precision: 12, scale: 4, nullable: false })
  volumen: number;

  @Column({ type: 'numeric', precision: 12, scale: 4, nullable: false })
  area: number;

  @Column({ type: 'numeric', precision: 12, scale: 4, nullable: false })
  altura: number;

  @Column({ type: 'smallint', nullable: false })
  nrocotizacion: number;

  @Column({ type: 'smallint', nullable: false })
  cantidadventana: number;

  @ManyToOne(() => Ciudadzona, (ciudadzona) => ciudadzona.cotizaciones)
  @JoinColumn({ name: 'ciudadzona_id' })
  ciudadzona: Ciudadzona;

  @ManyToOne(() => Nivelpiso, (nivelpiso) => nivelpiso.cotizaciones)
  @JoinColumn({ name: 'nivelpiso_id' })
  nivelpiso: Nivelpiso;

  @ManyToOne(() => Orientacion, (orientacion) => orientacion.cotizaciones)
  @JoinColumn({ name: 'orientacion_id' })
  orientacion: Orientacion;

  @ManyToOne(() => Tipopared, (tipopared) => tipopared.cotizaciones)
  @JoinColumn({ name: 'tipopared_id' })
  tipopared: Tipopared;

  @ManyToOne(() => Tiposuelo, (tiposuelo) => tiposuelo.cotizaciones)
  @JoinColumn({ name: 'tiposuelo_id' })
  tiposuelo: Tiposuelo;

  @ManyToOne(() => Tipotecho, (tipotecho) => tipotecho.cotizaciones)
  @JoinColumn({ name: 'tipotecho_id' })
  tipotecho: Tipotecho;

  @ManyToOne(() => Tipovidrio, (tipovidrio) => tipovidrio.cotizaciones)
  @JoinColumn({ name: 'tipovidrio_id' })
  tipovidrio: Tipovidrio;

  @ManyToOne(() => Tipocotizacion, (tipocotizacion) => tipocotizacion.cotizaciones)
  @JoinColumn({ name: 'tipocotizacion_id' })
  tipocotizacion: Tipocotizacion;
  /* @ManyToOne(() => , () => .cotizaciones)
  @JoinColumn({ name: '_id' })
  : ; */
}
