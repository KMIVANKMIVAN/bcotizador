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
  SEMILLA_TIPOVIDRIO
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

import { Ciudadzona } from 'src/cotizacion/ciudadeszonas/entities/ciudadzona.entity';
import { Nivelpiso } from 'src/cotizacion/nivelespisos/entities/nivelpiso.entity';
import { Orientacion } from 'src/cotizacion/orientaciones/entities/orientacion.entity';
import { Tipopared } from 'src/cotizacion/tiposparedes/entities/tipopared.entity';
import { Tiposuelo } from 'src/cotizacion/tipossuelos/entities/tiposuelo.entity';
import { Tipotecho } from 'src/cotizacion/tipostechos/entities/tipotecho.entity';
import { Tipovidrio } from 'src/cotizacion/tiposvidrios/entities/tipovidrio.entity';

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
