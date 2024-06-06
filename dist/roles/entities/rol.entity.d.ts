import { Usuario } from '../../usuarios/entities/usuario.entity';
export declare class Rol {
    id: number;
    rol: string;
    usuarios: Usuario[];
}
