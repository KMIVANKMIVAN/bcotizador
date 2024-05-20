import { Repository } from 'typeorm';
import { CreateDepartamentoDto } from './dto/create-departamento.dto';
import { UpdateDepartamentoDto } from './dto/update-departamento.dto';
import { Departamento } from './entities/departamento.entity';
export declare class DepartamentosService {
    private readonly departamentoRepository;
    constructor(departamentoRepository: Repository<Departamento>);
    create(createDepartamentoDto: CreateDepartamentoDto): Promise<Departamento>;
    findAll(): Promise<Departamento[]>;
    findOne(id: number): Promise<Departamento>;
    update(id: number, updateDepartamentoDto: UpdateDepartamentoDto): Promise<UpdateDepartamentoDto & Departamento>;
    remove(id: number): Promise<{
        success: boolean;
        message: string;
    }>;
}
