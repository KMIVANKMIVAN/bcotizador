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

import { Factorviaje } from 'src/cotizacion/factoresviajes/entities/factorviaje.entity';
import { Gastopersona } from 'src/cotizacion/gastospersonas/entities/gastopersona.entity';
import { Toalleroeje50cm } from 'src/cotizacion/producto/toallerosejes50cm/entities/toalleroeje50cm.entity';
import { Radiadoreje50cm } from 'src/cotizacion/producto/radiadoresejes50cm/entities/radiadoreje50cm.entity';
import { Instaltuberia } from 'src/cotizacion/tiempos/instaltuberias/entities/instaltuberia.entity';
import { Instalradiatoallero } from 'src/cotizacion/tiempos/instalradiatoalleros/entities/instalradiatoallero.entity';
import { Cotizacionambiente } from 'src/cotizacion/cotizacionesambientes/entities/cotizacionambiente.entity';

@Entity('cotizaciones')
export class Cotizacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  nombrecotizacion: string;

  @Column({ type: 'smallint', nullable: false })
  nrocotizacion: number;

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

  @ManyToOne(() => Toalleroeje50cm, (toalleroeje50cm) => toalleroeje50cm.cotizaciones)
  @JoinColumn({ name: 'toalleroeje50cm_id' })
  toalleroeje50cm: Toalleroeje50cm;

  @ManyToOne(() => Gastopersona, (gastopersona) => gastopersona.cotizaciones)
  @JoinColumn({ name: 'gastopersona_id' })
  gastopersona: Gastopersona;

  @ManyToOne(() => Radiadoreje50cm, (radiadoreje50cm) => radiadoreje50cm.cotizaciones)
  @JoinColumn({ name: 'radiadoreje50cm_id' })
  radiadoreje50cm: Radiadoreje50cm;

  @ManyToOne(() => Instaltuberia, (instaltuberia) => instaltuberia.cotizaciones)
  @JoinColumn({ name: 'instaltuberia_id' })
  instaltuberia: Instaltuberia;

  @ManyToOne(() => Instalradiatoallero, (instalradiatoallero) => instalradiatoallero.cotizaciones)
  @JoinColumn({ name: 'instalradiatoallero_id' })
  instalradiatoallero: Instalradiatoallero;

  @OneToMany(() => Cotizacionambiente, (cotizacionambiente) => cotizacionambiente.cotizacion)
  cotizacionesambientes: Cotizacionambiente[];
}
