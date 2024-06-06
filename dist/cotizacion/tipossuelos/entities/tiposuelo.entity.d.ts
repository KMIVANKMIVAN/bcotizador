import { Cotizacion } from 'src/cotizacion/cotizaciones/entities/cotizacion.entity';
export declare class Tiposuelo {
    id: number;
    tiposuelo: string;
    valor: number;
    cotizaciones: Cotizacion[];
}
