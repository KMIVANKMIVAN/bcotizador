import { Cotizacion } from 'src/cotizacion/cotizaciones/entities/cotizacion.entity';
import { Ciudad } from 'src/ciudades/entities/ciudad.entity';
export declare class Ciudadzona {
    id: number;
    ciudadzona: string;
    valor: number;
    ciudad: Ciudad;
    cotizaciones: Cotizacion[];
}
