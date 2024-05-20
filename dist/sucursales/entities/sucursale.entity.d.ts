import { Departamento } from 'src/departamentos/entities/departamento.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
export declare class Sucursal {
    id: number;
    sucursal: string;
    ubicacion: string;
    departamento: Departamento;
    usuarios: Usuario[];
}
