import { EmpresasService } from './empresas.service';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
export declare class EmpresasController {
    private readonly empresasService;
    constructor(empresasService: EmpresasService);
    create(createEmpresaDto: CreateEmpresaDto): Promise<import("./entities/empresa.entity").Empresa>;
    findAll(): Promise<import("./entities/empresa.entity").Empresa[]>;
    findOne(id: number): Promise<import("./entities/empresa.entity").Empresa>;
    update(id: number, updateEmpresaDto: UpdateEmpresaDto): Promise<import("./entities/empresa.entity").Empresa>;
    remove(id: number): Promise<{
        success: boolean;
        message: string;
    }>;
}
