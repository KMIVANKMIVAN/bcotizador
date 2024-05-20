export declare const SEMILLA_DEPARTAMENTOS: {
    departamento: string;
}[];
export declare const SEMILLA_SUCURSAL: {
    sucursal: string;
    ubicacion: string;
    departamento_id: number;
}[];
export declare const SEMILLA_ROLES: {
    rol: string;
}[];
export declare const SEMILLA_USUARIOS: {
    nombres: string;
    apellidos: string;
    ci: string;
    complemento: string;
    correo: string;
    contrasenia: string;
    es_activo: boolean;
    se_cambiado_cntr: boolean;
    roles: number[];
    sucursal_id: number;
    cargo_id: number;
}[];
export declare const SEMILLA_EMPRESA: {
    razon_social: string;
    nit: string;
    ubicacion: string;
    pagina_web: string;
    celular: string;
    telefono: any;
    linea_gratuita: any;
    correo: string;
}[];
export declare const SEMILLA_DIRECCION: {
    direccion: string;
    descripcion: string;
    empresa_id: number;
}[];
export declare const SEMILLA_UNIDAD: {
    unidad: string;
    descripcion: string;
    direccion_id: number;
}[];
export declare const SEMILLA_CARGO: {
    cargo: string;
    descripcion: string;
    unidad_id: number;
}[];
