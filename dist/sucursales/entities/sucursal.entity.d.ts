import { Ciudad } from 'src/ciudades/entities/ciudad.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
export declare class Sucursal {
    id: number;
    sucursal: string;
    ubicacion: string;
    ciudad: Ciudad;
    usuarios: Usuario[];
}
