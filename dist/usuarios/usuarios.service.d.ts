import { Repository } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { SucursalesService } from 'src/sucursales/sucursales.service';
import { RolesService } from 'src/roles/roles.service';
import { CargosService } from 'src/empresa/cargos/cargos.service';
export declare class UsuariosService {
    private readonly usuarioRepository;
    private readonly rolesService;
    private readonly sucursalesService;
    private readonly cargosService;
    constructor(usuarioRepository: Repository<Usuario>, rolesService: RolesService, sucursalesService: SucursalesService, cargosService: CargosService);
    createSemilla(createUsuarioDto: CreateUsuarioDto): Promise<Usuario>;
    create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario>;
    findAllPorNombCi(nomci: string): Promise<Usuario[]>;
    findAll(): Promise<Usuario[]>;
    findOne(id: number): Promise<Usuario>;
    findOneUsuarioPW(id: number): Promise<Usuario>;
    findOneCi(ci: string): Promise<Usuario[]>;
    findOneByUserCi(ci: string): Promise<Usuario>;
    update(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<Usuario>;
    updateEstado(id: number, estado: {
        es_activo: boolean;
    }): Promise<Usuario>;
    updateContrasenia(id: number, contraseniaAntigua: string, updateUsuarioDto: UpdateUsuarioDto): Promise<Partial<Usuario>>;
    resetearContrasenia(id: number): Promise<Partial<Usuario>>;
    remove(id: number): Promise<any>;
}
