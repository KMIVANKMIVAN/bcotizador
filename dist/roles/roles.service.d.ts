import { Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Rol } from './entities/role.entity';
export declare class RolesService {
    private readonly rolRepository;
    constructor(rolRepository: Repository<Rol>);
    create(createRoleDto: CreateRoleDto): Promise<Rol>;
    findAll(): Promise<Rol[]>;
    findOne(id: number): Promise<Rol>;
    findByIds(ids: number[]): Promise<Rol[]>;
    update(id: number, updateRoleDto: UpdateRoleDto): Promise<Rol>;
    remove(id: number): Promise<{
        success: boolean;
        message: string;
    }>;
}
