import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
export declare class UsuariosController {
    private readonly usuariosService;
    constructor(usuariosService: UsuariosService);
    create(createUsuarioDto: CreateUsuarioDto): Promise<import("./entities/usuario.entity").Usuario>;
    findAllPorNombCi(nomci: string): Promise<import("./entities/usuario.entity").Usuario[]>;
    findAll(): Promise<import("./entities/usuario.entity").Usuario[]>;
    findOne(id: number): Promise<import("./entities/usuario.entity").Usuario>;
    findOneCi(nomci: string): Promise<import("./entities/usuario.entity").Usuario[]>;
    findOneByUserCi(ci: string): Promise<import("./entities/usuario.entity").Usuario>;
    update(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<import("./entities/usuario.entity").Usuario>;
    resetearContrasenia(id: number): Promise<Partial<import("./entities/usuario.entity").Usuario>>;
    updateEstado(id: number, body: {
        es_activo: boolean;
    }): Promise<import("./entities/usuario.entity").Usuario>;
    updateContrasenia(id: number, contraseniaAntigua: string, updateUsuarioDto: UpdateUsuarioDto): Promise<Partial<import("./entities/usuario.entity").Usuario>>;
    remove(id: number): Promise<any>;
}
