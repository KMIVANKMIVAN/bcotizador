import { Nivelpiso } from 'src/cotizacion/nivelespisos/entities/nivelpiso.entity';
import { Orientacion } from 'src/cotizacion/orientaciones/entities/orientacion.entity';
import { Tipopared } from 'src/cotizacion/tiposparedes/entities/tipopared.entity';
import { Tiposuelo } from 'src/cotizacion/tipossuelos/entities/tiposuelo.entity';
import { Tipotecho } from 'src/cotizacion/tipostechos/entities/tipotecho.entity';
import { Tipovidrio } from 'src/cotizacion/tiposvidrios/entities/tipovidrio.entity';
import { Ciudadzona } from 'src/cotizacion/ciudadeszonas/entities/ciudadzona.entity';
import { Tipocotizacion } from 'src/cotizacion/tiposcotizaciones/entities/tipocotizacion.entity';
export declare class Cotizacion {
    id: number;
    volumen: number;
    cantidadventana: number;
    ciudadzona: Ciudadzona;
    nivelpiso: Nivelpiso;
    orientacion: Orientacion;
    tipopared: Tipopared;
    tiposuelo: Tiposuelo;
    tipotecho: Tipotecho;
    tipovidrio: Tipovidrio;
    tipocotizacion: Tipocotizacion;
}
