import { Usuario } from '../usuarios/entities/usuario.entity';
import { Sucursal } from '../sucursales/entities/sucursale.entity';
import { Departamento } from '../departamentos/entities/departamento.entity';
import { Rol } from '../roles/entities/role.entity';
import { Cargo } from 'src/empresa/cargos/entities/cargo.entity';
import { Unidad } from 'src/empresa/unidades/entities/unidade.entity';
import { Direccion } from 'src/empresa/direcciones/entities/direccione.entity';
import { Empresa } from 'src/empresa/empresas/entities/empresa.entity';
import { UsuariosService } from '../usuarios/usuarios.service';
import { SucursalesService } from '../sucursales/sucursales.service';
import { DepartamentosService } from '../departamentos/departamentos.service';
import { RolesService } from '../roles/roles.service';
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
    private readonly departamentoRepository;
    private readonly roleRepository;
    private readonly sucursalesService;
    private readonly departamentosService;
    private readonly rolesService;
    private readonly usuarioService;
    private readonly cargoRepository;
    private readonly unidadRepository;
    private readonly direccionRepository;
    private readonly empresaRepository;
    private readonly cargosService;
    private readonly unidadesService;
    private readonly direccionesService;
    private readonly empresasService;
    private isProd;
    constructor(configService: ConfigService, usuarioRepository: Repository<Usuario>, sucursaleRepository: Repository<Sucursal>, departamentoRepository: Repository<Departamento>, roleRepository: Repository<Rol>, sucursalesService: SucursalesService, departamentosService: DepartamentosService, rolesService: RolesService, usuarioService: UsuariosService, cargoRepository: Repository<Cargo>, unidadRepository: Repository<Unidad>, direccionRepository: Repository<Direccion>, empresaRepository: Repository<Empresa>, cargosService: CargosService, unidadesService: UnidadesService, direccionesService: DireccionesService, empresasService: EmpresasService);
    ejecutarSemilla(): Promise<boolean>;
    eliminarDatabase(): Promise<void>;
    crearDepartamentos(): Promise<Departamento>;
    crearRoles(): Promise<Rol>;
    crearEmpresas(): Promise<Empresa>;
    crearDirecciones(): Promise<Direccion>;
    crearUnidades(): Promise<Unidad>;
    crearCargos(): Promise<Cargo>;
    crearSucursales(): Promise<Sucursal>;
    crearUsuarios(): Promise<Usuario>;
}
