import { Repository } from 'typeorm';
import { CreateSucursaleDto } from './dto/create-sucursale.dto';
import { UpdateSucursaleDto } from './dto/update-sucursale.dto';
import { Sucursal } from './entities/sucursale.entity';
import { DepartamentosService } from 'src/departamentos/departamentos.service';
export declare class SucursalesService {
    private readonly sucursaleRepository;
    private readonly departamentosService;
    constructor(sucursaleRepository: Repository<Sucursal>, departamentosService: DepartamentosService);
    create(createSucursaleDto: CreateSucursaleDto): Promise<Sucursal>;
    findAll(): Promise<Sucursal[]>;
    findOne(id: number): Promise<Sucursal>;
    update(id: number, updateSucursaleDto: UpdateSucursaleDto): Promise<Sucursal>;
    remove(id: number): Promise<any>;
}
