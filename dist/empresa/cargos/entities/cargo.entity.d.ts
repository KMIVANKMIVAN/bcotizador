import { Unidad } from "src/empresa/unidades/entities/unidade.entity";
import { Usuario } from 'src/usuarios/entities/usuario.entity';
export declare class Cargo {
    id: number;
    cargo: string;
    descripcion: string;
    unidad: Unidad;
    usuarios: Usuario[];
}
