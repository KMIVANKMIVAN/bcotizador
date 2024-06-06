import { Usuario } from '../usuarios/entities/usuario.entity';
import { Sucursal } from '../sucursales/entities/sucursal.entity';
import { Rol } from '../roles/entities/rol.entity';
import { Ciudad } from 'src/ciudades/entities/ciudad.entity';
import { Cargo } from 'src/empresa/cargos/entities/cargo.entity';
import { Unidad } from 'src/empresa/unidades/entities/unidade.entity';
import { Direccion } from 'src/empresa/direcciones/entities/direccion.entity';
import { Empresa } from 'src/empresa/empresas/entities/empresa.entity';
import { UsuariosService } from '../usuarios/usuarios.service';
import { SucursalesService } from '../sucursales/sucursales.service';
import { RolesService } from '../roles/roles.service';
import { CiudadesService } from 'src/ciudades/ciudades.service';
import { CargosService } from 'src/empresa/cargos/cargos.service';
import { UnidadesService } from 'src/empresa/unidades/unidades.service';
import { DireccionesService } from 'src/empresa/direcciones/direcciones.service';
import { EmpresasService } from 'src/empresa/empresas/empresas.service';
import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';
export declare class SemillasService {
    private readonly configService;
    private readonly usuarioRepository;
    private readonly sucursaleRepository;
    private readonly ciudadRepository;
    private readonly roleRepository;
    private readonly sucursalesService;
    private readonly ciudadesService;
    private readonly rolesService;
    private readonly usuarioService;
    private readonly cargosService;
    private readonly unidadesService;
    private readonly direccionesService;
    private readonly empresasService;
    private isProd;
    constructor(configService: ConfigService, usuarioRepository: Repository<Usuario>, sucursaleRepository: Repository<Sucursal>, ciudadRepository: Repository<Ciudad>, roleRepository: Repository<Rol>, sucursalesService: SucursalesService, ciudadesService: CiudadesService, rolesService: RolesService, usuarioService: UsuariosService, cargosService: CargosService, unidadesService: UnidadesService, direccionesService: DireccionesService, empresasService: EmpresasService);
    ejecutarSemilla(): Promise<boolean>;
    eliminarDatabase(): Promise<void>;
    crearCiudades(): Promise<Ciudad>;
    crearRoles(): Promise<Rol>;
    crearEmpresas(): Promise<Empresa>;
    crearDirecciones(): Promise<Direccion>;
    crearUnidades(): Promise<Unidad>;
    crearCargos(): Promise<Cargo>;
    crearSucursales(): Promise<Sucursal>;
    crearUsuarios(): Promise<Usuario>;
}
