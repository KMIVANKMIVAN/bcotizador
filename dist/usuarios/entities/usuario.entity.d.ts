import { Rol } from '../../roles/entities/rol.entity';
import { Sucursal } from 'src/sucursales/entities/sucursal.entity';
import { Cargo } from 'src/empresa/cargos/entities/cargo.entity';
export declare class Usuario {
    id: number;
    nombres: string;
    apellidos: string;
    ci: string;
    complemento: string;
    correo: string;
    contrasenia: string;
    es_activo: boolean;
    se_cambiado_cntr: boolean;
    roles: Rol[];
    sucursal: Sucursal;
    cargo: Cargo;
}
