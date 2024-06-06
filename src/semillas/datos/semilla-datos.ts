export const SEMILLA_CIUDADES = [
  {
    ciudad: 'La Paz',
    valor: 0.5,
  },
  {
    ciudad: 'El Alto',
    valor: 0.5,
  },
  {
    ciudad: 'Beni',
    valor: 0.2,
  },
  {
    ciudad: 'Cochabamba',
    valor: 0.3,
  },
  {
    ciudad: 'Chuquisaca',
    valor: 0.2,
  },
  {
    ciudad: 'Oruro',
    valor: 0.6,
  },
  {
    ciudad: 'Pando',
    valor: 0.2,
  },
  {
    ciudad: 'Potosí',
    valor: 0.5,
  },
  {
    ciudad: 'Tarija',
    valor: 0.2,
  },
  {
    ciudad: 'Santa Cruz',
    valor: 0.2,
  },
];
export const SEMILLA_SUCURSAL = [
  {
    sucursal: 'Oficina Central',
    ubicacion: 'Calle Lisimaco Gutierrez Nro. 494 - Sopocachi.',
    ciudad_id: 1,
  },
  {
    sucursal: 'Showroom',
    ubicacion:
      'Avenida montenegro Nro. 911 - San Miguel.',
      ciudad_id: 1,
  },
];
export const SEMILLA_ROLES = [
  {
    rol: 'Administrador',
  },
  {
    rol: 'Sub Administrador',
  },
  {
    rol: 'Usuario',
  },
];
export const SEMILLA_USUARIOS = [
  {
    nombres: 'ADMIN',
    apellidos: 'ADMIN',
    ci: 'ADMINROOT',
    complemento: null,
    correo: 'admin@domoticus.com.bo',
    contrasenia: 'ADMINROOT',
    es_activo: true,
    se_cambiado_cntr: true,
    roles: [1, 2, 3],
    sucursal_id: 1,
    cargo_id: 1
  },
  {
    nombres: 'ADMINLPZ',
    apellidos: 'ADMINLPZ',
    ci: 'ADMINROOTLPZ',
    complemento: null,
    correo: 'adminlpz@domoticus.com.bo',
    contrasenia: 'ADMINROOTLPZ',
    es_activo: true,
    se_cambiado_cntr: false,
    roles: [2],
    sucursal_id: 1,
    cargo_id: 2
  },
  {
    nombres: 'CAMILA',
    apellidos: 'BLANCO',
    ci: '80706050',
    complemento: 'LP',
    correo: 'camila.blanco@domoticus.com.bo',
    contrasenia: '80706050',
    es_activo: true,
    se_cambiado_cntr: false,
    roles: [3],
    sucursal_id: 1,
    cargo_id: 9
  },
  {
    nombres: 'MARIELA',
    apellidos: 'LIMA',
    ci: '50607080',
    complemento: 'LP',
    correo: 'mariela.lima@domoticus.com.bo',
    contrasenia: '50607080',
    es_activo: true,
    se_cambiado_cntr: false,
    roles: [3],
    sucursal_id: 1,
    cargo_id: 10
  },
  {
    nombres: 'CINTHYA',
    apellidos: 'CARPIO',
    ci: '10203040',
    complemento: 'LP',
    correo: 'cinthya.carpio@domoticus.com.bo',
    contrasenia: '10203040',
    es_activo: true,
    se_cambiado_cntr: false,
    roles: [3],
    sucursal_id: 1,
    cargo_id: 11
  },

];
export const SEMILLA_EMPRESA = [
  {
    razon_social: 'Domoticus Bolivia',
    nit: '123456789',
    ubicacion: 'Calle Lisimaco Gutierrez Nro. 494 - Sopocachi',
    pagina_web: 'https://domoticus.com.bo/',
    celular: '+591 70792122 - +591 71410764',
    telefono: null,
    linea_gratuita: null,
    correo: 'info@domoticus.com.bo',
  }
];
export const SEMILLA_DIRECCION = [
  {
    direccion: 'Tecnologia',
    descripcion: 'La direccion Tecnologia se encarga de gestionar el uso de las tecnologias de la informacion.',
    empresa_id: 1
  },
  {
    direccion: 'Administrativa',
    descripcion: 'La direccion Administrativa se encarga de gestionar la empresa.',
    empresa_id: 1
  },
];
export const SEMILLA_UNIDAD = [
  {
    unidad: 'Informatica',
    descripcion: 'La unidad Informatica se encarga de gestionar las tecnologias de informacion y comunicaion.',
    direccion_id: 1
  },
  {
    unidad: 'Comercial',
    descripcion: 'La unidad Comercial se encarga de cotizar los productos.',
    direccion_id: 2
  },
];
export const SEMILLA_CARGO = [
  {
    cargo: 'ADMINISTRADOR de la unidad Informatica',
    descripcion: 'Es el ADMINISTRADOR de la unidad Informatica se encarga de administrar TODO LOS SISTEMAS UN USUARIO ROOT.',
    unidad_id: 1
  },
  {
    cargo: 'ADMINISTRADOR GEGIONAL de la unidad Informatica',
    descripcion: 'Es el ADMINISTRADOR GEGIONAL de la unidad Informatica se encarga de administrar TODO LOS SISTEMAS UN USUARIO ROOT de su region.',
    unidad_id: 1
  },
  {
    cargo: 'Jefe de la unidad Informatica',
    descripcion: 'Es el jefe de la unidad Informatica se encarga de administrar la unidad.',
    unidad_id: 1
  },
  {
    cargo: 'Responsable de la unidad Informatica en Infraestructura',
    descripcion: 'Es el segundo al mando de la unidad Informatica por debajo del jefe se encarga de administrar la infraestructura de los sistemas de comunicacion.',
    unidad_id: 1
  },
  {
    cargo: 'Responsable de la unidad Informatica en Desarrollo de Sistemas',
    descripcion: 'Es el segundo al mando de la unidad Informatica por debajo del jefe se encarga de administrar los procesos de los desarrollos de sistemas informaticos.',
    unidad_id: 1
  },
  {
    cargo: 'Desarrollador I',
    descripcion: 'Es el desarrollador "Senior" de sistemas informaticos de la unidad Informatica.',
    unidad_id: 1
  },
  {
    cargo: 'Desarrollador II',
    descripcion: 'Es el desarrollador "Junior" de sistemas informaticos de la unidad Informatica.',
    unidad_id: 1
  },
  {
    cargo: 'Pasante Desarrollador',
    descripcion: 'Es el pasante el desarrollo de sistemas informaticos de la unidad Informatica.',
    unidad_id: 1
  },
  {
    cargo: 'Jefe de la unidad Comercial',
    descripcion: 'Es el jefe de la unidad Comercial se encarga de administrar la unidad.',
    unidad_id: 2
  },
  {
    cargo: 'Responsable de la unidad Comercial',
    descripcion: 'Es el segundo al mando de la unidad Comercial por debajo del jefe se encarga de administrar los procesos de las cotizaciones.',
    unidad_id: 2
  },
  {
    cargo: 'Agente I de la unidad Comercial',
    descripcion: 'El agente "Senior" de la unidad Comercial se encarga de cotizar los productos e enviar las cotizaciones a los clientes.',
    unidad_id: 2
  },
  {
    cargo: 'Agente II de la unidad Comercial',
    descripcion: 'El agente "Junior" de la unidad Comercial se encarga de cotizar los productos e enviar las cotizaciones a los clientes previa revicion.',
    unidad_id: 2
  },
  {
    cargo: 'Pasante de la unidad Comercial',
    descripcion: 'El pasante de la unidad Comercial se encarga de cotizar los productos.',
    unidad_id: 2
  },
];
