import { Sucursal } from 'src/sucursales/entities/sucursal.entity';
import { Ciudadzona } from 'src/cotizacion/ciudadeszonas/entities/ciudadzona.entity';
export declare class Ciudad {
    id: number;
    ciudad: string;
    valor: number;
    sucursales: Sucursal[];
    ciudadeszonas: Ciudadzona[];
}
