import { DepartamentosService } from './departamentos.service';
import { CreateDepartamentoDto } from './dto/create-departamento.dto';
import { UpdateDepartamentoDto } from './dto/update-departamento.dto';
export declare class DepartamentosController {
    private readonly departamentosService;
    constructor(departamentosService: DepartamentosService);
    create(createDepartamentoDto: CreateDepartamentoDto): Promise<import("./entities/departamento.entity").Departamento>;
    findAll(): Promise<import("./entities/departamento.entity").Departamento[]>;
    findOne(id: number): Promise<import("./entities/departamento.entity").Departamento>;
    update(id: number, updateDepartamentoDto: UpdateDepartamentoDto): Promise<UpdateDepartamentoDto & import("./entities/departamento.entity").Departamento>;
    remove(id: number): Promise<{
        success: boolean;
        message: string;
    }>;
}
