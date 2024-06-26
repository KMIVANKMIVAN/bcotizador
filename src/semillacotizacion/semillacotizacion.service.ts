import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';

import {
  SEMILLA_CIUDADZONA,
  SEMILLA_NIVELPISO,
  SEMILLA_ORIENTACION,
  SEMILLA_TIPOPARED,
  SEMILLA_TIPOSUELO,
  SEMILLA_TIPOTECHO,
  SEMILLA_TIPOVIDRIO,
  SEMILLA_TIPOCOTIZACION,
  SEMILLA_FACTORVIAJE,
  SEMILLA_GASTOPERSONA,
  SEMILLA_INSTALRADIATOALEROS,
  SEMILLA_INSTALTUBERIAS,
  SEMILLA_RADIADORES50CM,
  SEMILLA_TOALLEROS50CM
} from "./datos/semillacotizacion-datos";

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';

import { CiudadeszonasService } from 'src/cotizacion/ciudadeszonas/ciudadeszonas.service';
import { NivelespisosService } from 'src/cotizacion/nivelespisos/nivelespisos.service';
import { OrientacionesService } from 'src/cotizacion/orientaciones/orientaciones.service';
import { TiposparedesService } from 'src/cotizacion/tiposparedes/tiposparedes.service';
import { TipossuelosService } from 'src/cotizacion/tipossuelos/tipossuelos.service';
import { TipostechosService } from 'src/cotizacion/tipostechos/tipostechos.service';
import { TiposvidriosService } from 'src/cotizacion/tiposvidrios/tiposvidrios.service';
import { TiposcotizacionesService } from 'src/cotizacion/tiposcotizaciones/tiposcotizaciones.service';
import { FactoresviajesService } from 'src/cotizacion/factoresviajes/factoresviajes.service';
import { GastospersonasService } from 'src/cotizacion/gastospersonas/gastospersonas.service';
import { Toallerosejes50cmService } from 'src/cotizacion/producto/toallerosejes50cm/toallerosejes50cm.service';
import { Radiadoresejes50cmService } from 'src/cotizacion/producto/radiadoresejes50cm/radiadoresejes50cm.service';
import { InstaltuberiasService } from 'src/cotizacion/tiempos/instaltuberias/instaltuberias.service';
import { InstalradiatoallerosService } from 'src/cotizacion/tiempos/instalradiatoalleros/instalradiatoalleros.service';

import { Ciudadzona } from 'src/cotizacion/ciudadeszonas/entities/ciudadzona.entity';
import { Nivelpiso } from 'src/cotizacion/nivelespisos/entities/nivelpiso.entity';
import { Orientacion } from 'src/cotizacion/orientaciones/entities/orientacion.entity';
import { Tipopared } from 'src/cotizacion/tiposparedes/entities/tipopared.entity';
import { Tiposuelo } from 'src/cotizacion/tipossuelos/entities/tiposuelo.entity';
import { Tipotecho } from 'src/cotizacion/tipostechos/entities/tipotecho.entity';
import { Tipovidrio } from 'src/cotizacion/tiposvidrios/entities/tipovidrio.entity';
import { Tipocotizacion } from 'src/cotizacion/tiposcotizaciones/entities/tipocotizacion.entity';
import { Factorviaje } from 'src/cotizacion/factoresviajes/entities/factorviaje.entity';
import { Gastopersona } from 'src/cotizacion/gastospersonas/entities/gastopersona.entity';
import { Toalleroeje50cm } from 'src/cotizacion/producto/toallerosejes50cm/entities/toalleroeje50cm.entity';
import { Radiadoreje50cm } from 'src/cotizacion/producto/radiadoresejes50cm/entities/radiadoreje50cm.entity';
import { Instaltuberia } from 'src/cotizacion/tiempos/instaltuberias/entities/instaltuberia.entity';
import { Instalradiatoallero } from 'src/cotizacion/tiempos/instalradiatoalleros/entities/instalradiatoallero.entity';

@Injectable()
export class SemillacotizacionService {
  private isProd: boolean;

  constructor(
    private readonly configService: ConfigService,

    private readonly ciudadeszonasService: CiudadeszonasService,
    private readonly nivelespisosService: NivelespisosService,
    private readonly orientacionesService: OrientacionesService,
    private readonly tiposparedesService: TiposparedesService,
    private readonly tipossuelosService: TipossuelosService,
    private readonly tipostechosService: TipostechosService,
    private readonly tiposvidriosService: TiposvidriosService,
    private readonly tiposcotizacionesService: TiposcotizacionesService,
    private readonly factoresviajesService: FactoresviajesService,
    private readonly gastospersonasService: GastospersonasService,
    private readonly toallerosejes50cmService: Toallerosejes50cmService,
    private readonly radiadoresejes50cmService: Radiadoresejes50cmService,
    private readonly instaltuberiasService: InstaltuberiasService,
    private readonly instalradiatoallerosService: InstalradiatoallerosService,

  ) {
    this.isProd = configService.get('STATE') === 'prod';
  }

  async ejecutarSemillacotizacion() {
    try {
      if (this.isProd) {
        throw new BadRequestException({
          error: `Error al ejecutar la semilla`,
          message: `Problemas en la ejecucion de la semilla`,
        });
      }

      //?EJECUTAR POR ORDEN
      await this.crearNivelespisos();
      await this.crearOrientaciones();
      await this.crearTiposparedes();
      await this.crearTipossuelos();
      await this.crearTipostechos();
      await this.crearTiposvidrios();
      await this.crearCiudadeszonas();
      await this.crearTiposcotizaciones();
      // await this.crearFactoresviajes();
      await this.crearGastospersonas();
      await this.crearInstalartuberias();
      await this.crearInstalasradiatoalleros();
      await this.crearToallerosejes50cm();
      await this.crearRadiadoresejes50cm();

      return true;
    } catch (error) {
      // Manejo de excepciones
      throw new InternalServerErrorException({
        message: `Error del Servidor. Revisar el metodo (ejecutarSemilla) de la ruta "semillas"`,
        error: error,
      });
    }
  }

  //!EJECUTAR LA SEMILLA Y LUEGO EJECUTAR SEMILLACOTIZACION
  //!CREAR PRIMARIOS LOS QUE NO DEPENDEN DE NADIE
  async crearNivelespisos(): Promise<Nivelpiso> {
    const nivelespisos = [];
    for (const nivelpiso of SEMILLA_NIVELPISO) {
      nivelespisos.push(await this.nivelespisosService.createSemilla(nivelpiso));
    }
    return nivelespisos[0];
  }
  async crearOrientaciones(): Promise<Orientacion> {
    const orientaciones = [];
    for (const orientacion of SEMILLA_ORIENTACION) {
      orientaciones.push(await this.orientacionesService.createSemilla(orientacion));
    }
    return orientaciones[0];
  }
  async crearTiposparedes(): Promise<Tipopared> {
    const tiposparedes = [];
    for (const tipopared of SEMILLA_TIPOPARED) {
      tiposparedes.push(await this.tiposparedesService.createSemilla(tipopared));
    }
    return tiposparedes[0];
  }
  async crearTipossuelos(): Promise<Tiposuelo> {
    const tipossuelos = [];
    for (const tiposuelo of SEMILLA_TIPOSUELO) {
      tipossuelos.push(await this.tipossuelosService.createSemilla(tiposuelo));
    }
    return tipossuelos[0];
  }
  async crearTipostechos(): Promise<Tipotecho> {
    const tipostechos = [];
    for (const tipotecho of SEMILLA_TIPOTECHO) {
      tipostechos.push(await this.tipostechosService.createSemilla(tipotecho));
    }
    return tipostechos[0];
  }
  async crearTiposvidrios(): Promise<Tipovidrio> {
    const tiposvidrios = [];
    for (const tipovidrio of SEMILLA_TIPOVIDRIO) {
      tiposvidrios.push(await this.tiposvidriosService.createSemilla(tipovidrio));
    }
    return tiposvidrios[0];
  }
  async crearTiposcotizaciones(): Promise<Tipocotizacion> {
    const tiposcotizaciones = [];
    for (const tipocotizacion of SEMILLA_TIPOCOTIZACION) {
      tiposcotizaciones.push(await this.tiposcotizacionesService.createSemilla(tipocotizacion));
    }
    return tiposcotizaciones[0];
  }
  /* async crearFactoresviajes(): Promise<Factorviaje> {
    const factoresviajes = [];
    for (const factorviaje of SEMILLA_FACTORVIAJE) {
      factoresviajes.push(await this.factoresviajesService.createSemilla(factorviaje));
    }
    return factoresviajes[0];
  } */
  async crearGastospersonas(): Promise<Gastopersona> {
    const gastopersona = [];
    for (const gastospersonas of SEMILLA_GASTOPERSONA) {
      gastopersona.push(await this.gastospersonasService.createSemilla(gastospersonas));
    }
    return gastopersona[0];
  }
  async crearInstalasradiatoalleros(): Promise<Instalradiatoallero> {
    const instalradiatoallero = [];
    for (const instalasradiatoalleros of SEMILLA_INSTALRADIATOALEROS) {
      instalradiatoallero.push(await this.instalradiatoallerosService.createSemilla(instalasradiatoalleros));
    }
    return instalradiatoallero[0];
  }
  async crearInstalartuberias(): Promise<Instaltuberia> {
    const instalartuberias = [];
    for (const instaltuberia of SEMILLA_INSTALTUBERIAS) {
      instalartuberias.push(await this.instaltuberiasService.createSemilla(instaltuberia));
    }
    return instalartuberias[0];
  }
  async crearRadiadoresejes50cm(): Promise<Radiadoreje50cm> {
    const radiadoresejes50cm = [];
    for (const radiadoreje50cm of SEMILLA_RADIADORES50CM) {
      radiadoresejes50cm.push(await this.radiadoresejes50cmService.createSemilla(radiadoreje50cm));
    }
    return radiadoresejes50cm[0];
  }
  async crearToallerosejes50cm(): Promise<Toalleroeje50cm> {
    const toallerosejes50cm = [];
    for (const toalleroeje50cm of SEMILLA_TOALLEROS50CM) {
      toallerosejes50cm.push(await this.toallerosejes50cmService.createSemilla(toalleroeje50cm));
    }
    return toallerosejes50cm[0];
  }


  //!CREAR DEPENDIENTES EN ORDEN
  async crearCiudadeszonas(): Promise<Ciudadzona> {
    // console.log("SEMILLA_CIUDADZONA", SEMILLA_CIUDADZONA);

    const ciudadeszonas = [];
    for (const ciudadzona of SEMILLA_CIUDADZONA) {
      ciudadeszonas.push(await this.ciudadeszonasService.createSemilla(ciudadzona));
    }
    return ciudadeszonas[0];
  }

}
