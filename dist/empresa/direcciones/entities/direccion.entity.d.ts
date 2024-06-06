import { Empresa } from 'src/empresa/empresas/entities/empresa.entity';
import { Unidad } from 'src/empresa/unidades/entities/unidade.entity';
export declare class Direccion {
    id: number;
    direccion: string;
    descripcion: string;
    empresa: Empresa;
    unidades: Unidad[];
}
