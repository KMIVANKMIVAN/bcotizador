import { Cotizacion } from 'src/cotizacion/cotizaciones/entities/cotizacion.entity';
export declare class Tipovidrio {
    id: number;
    tipovidrio: string;
    valor: number;
    cotizaciones: Cotizacion[];
}
