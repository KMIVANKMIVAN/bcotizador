import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
export declare class RolesController {
    private readonly rolesService;
    constructor(rolesService: RolesService);
    create(createRoleDto: CreateRoleDto): Promise<import("./entities/role.entity").Rol>;
    findAll(): Promise<import("./entities/role.entity").Rol[]>;
    findOne(id: number): Promise<import("./entities/role.entity").Rol>;
    update(id: number, updateRoleDto: UpdateRoleDto): Promise<UpdateRoleDto & import("./entities/role.entity").Rol>;
    remove(id: number): Promise<{
        success: boolean;
        message: string;
    }>;
}
