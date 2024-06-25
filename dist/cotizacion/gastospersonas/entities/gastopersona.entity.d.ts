import { Cotizacion } from 'src/cotizacion/cotizaciones/entities/cotizacion.entity';
export declare class Gastopersona {
    id: number;
    nropersona: number;
    alimento: number;
    alojamiento: number;
    extras: number;
    cotizaciones: Cotizacion[];
}
