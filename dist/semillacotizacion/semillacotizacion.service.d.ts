import { ConfigService } from '@nestjs/config';
import { CiudadeszonasService } from 'src/cotizacion/ciudadeszonas/ciudadeszonas.service';
import { NivelespisosService } from 'src/cotizacion/nivelespisos/nivelespisos.service';
import { OrientacionesService } from 'src/cotizacion/orientaciones/orientaciones.service';
import { TiposparedesService } from 'src/cotizacion/tiposparedes/tiposparedes.service';
import { TipossuelosService } from 'src/cotizacion/tipossuelos/tipossuelos.service';
import { TipostechosService } from 'src/cotizacion/tipostechos/tipostechos.service';
import { TiposvidriosService } from 'src/cotizacion/tiposvidrios/tiposvidrios.service';
import { TiposcotizacionesService } from 'src/cotizacion/tiposcotizaciones/tiposcotizaciones.service';
import { Ciudadzona } from 'src/cotizacion/ciudadeszonas/entities/ciudadzona.entity';
import { Nivelpiso } from 'src/cotizacion/nivelespisos/entities/nivelpiso.entity';
import { Orientacion } from 'src/cotizacion/orientaciones/entities/orientacion.entity';
import { Tipopared } from 'src/cotizacion/tiposparedes/entities/tipopared.entity';
import { Tiposuelo } from 'src/cotizacion/tipossuelos/entities/tiposuelo.entity';
import { Tipotecho } from 'src/cotizacion/tipostechos/entities/tipotecho.entity';
import { Tipovidrio } from 'src/cotizacion/tiposvidrios/entities/tipovidrio.entity';
import { Tipocotizacion } from 'src/cotizacion/tiposcotizaciones/entities/tipocotizacion.entity';
export declare class SemillacotizacionService {
    private readonly configService;
    private readonly ciudadeszonasService;
    private readonly nivelespisosService;
    private readonly orientacionesService;
    private readonly tiposparedesService;
    private readonly tipossuelosService;
    private readonly tipostechosService;
    private readonly tiposvidriosService;
    private readonly tiposcotizacionesService;
    private isProd;
    constructor(configService: ConfigService, ciudadeszonasService: CiudadeszonasService, nivelespisosService: NivelespisosService, orientacionesService: OrientacionesService, tiposparedesService: TiposparedesService, tipossuelosService: TipossuelosService, tipostechosService: TipostechosService, tiposvidriosService: TiposvidriosService, tiposcotizacionesService: TiposcotizacionesService);
    ejecutarSemillacotizacion(): Promise<boolean>;
    crearNivelespisos(): Promise<Nivelpiso>;
    crearOrientaciones(): Promise<Orientacion>;
    crearTiposparedes(): Promise<Tipopared>;
    crearTipossuelos(): Promise<Tiposuelo>;
    crearTipostechos(): Promise<Tipotecho>;
    crearTiposvidrios(): Promise<Tipovidrio>;
    crearTiposcotizaciones(): Promise<Tipocotizacion>;
    crearCiudadeszonas(): Promise<Ciudadzona>;
}