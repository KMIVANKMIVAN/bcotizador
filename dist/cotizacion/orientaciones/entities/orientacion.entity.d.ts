import { Cotizacion } from 'src/cotizacion/cotizaciones/entities/cotizacion.entity';
export declare class Orientacion {
    id: number;
    orientacion: string;
    valor: number;
    cotizaciones: Cotizacion[];
}
