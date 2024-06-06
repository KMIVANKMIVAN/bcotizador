import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-rol.dto';
import { UpdateRoleDto } from './dto/update-rol.dto';
export declare class RolesController {
    private readonly rolesService;
    constructor(rolesService: RolesService);
    create(createRoleDto: CreateRoleDto): Promise<import("./entities/rol.entity").Rol>;
    findAll(): Promise<import("./entities/rol.entity").Rol[]>;
    findOne(id: number): Promise<import("./entities/rol.entity").Rol>;
    update(id: number, updateRoleDto: UpdateRoleDto): Promise<import("./entities/rol.entity").Rol>;
    remove(id: number): Promise<any>;
}
