import { Direccion } from 'src/empresa/direcciones/entities/direccione.entity';
import { Cargo } from 'src/empresa/cargos/entities/cargo.entity';
export declare class Unidad {
    id: number;
    unidad: string;
    descripcion: string;
    direccion: Direccion;
    cargos: Cargo[];
}
