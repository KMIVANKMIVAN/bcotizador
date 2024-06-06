import { Direccion } from 'src/empresa/direcciones/entities/direccion.entity';
export declare class Empresa {
    id: number;
    razon_social: string;
    nit: string;
    ubicacion: string;
    pagina_web: string;
    telefono: string;
    linea_gratuita: string;
    celular: string;
    correo: string;
    direcciones: Direccion[];
}
