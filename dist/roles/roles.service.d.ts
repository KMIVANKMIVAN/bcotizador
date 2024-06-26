import { Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-rol.dto';
import { UpdateRoleDto } from './dto/update-rol.dto';
import { Rol } from './entities/rol.entity';
export declare class RolesService {
    private readonly rolRepository;
    constructor(rolRepository: Repository<Rol>);
    create(createRoleDto: CreateRoleDto): Promise<Rol>;
    findAllPorNombRol(rol: string): Promise<Rol[]>;
    findAll(): Promise<Rol[]>;
    findOne(id: number): Promise<Rol>;
    findByIds(ids: number[]): Promise<Rol[]>;
    update(id: number, updateRoleDto: UpdateRoleDto): Promise<Rol>;
    remove(id: number): Promise<any>;
}
