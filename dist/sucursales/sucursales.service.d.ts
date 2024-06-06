import { Repository } from 'typeorm';
import { CreateSucursaleDto } from './dto/create-sucursal.dto';
import { UpdateSucursaleDto } from './dto/update-sucursal.dto';
import { Sucursal } from './entities/sucursal.entity';
import { CiudadesService } from 'src/ciudades/ciudades.service';
export declare class SucursalesService {
    private readonly sucursaleRepository;
    private readonly ciudadesService;
    constructor(sucursaleRepository: Repository<Sucursal>, ciudadesService: CiudadesService);
    create(createSucursaleDto: CreateSucursaleDto): Promise<Sucursal>;
    findAll(): Promise<Sucursal[]>;
    findOne(id: number): Promise<Sucursal>;
    update(id: number, updateSucursaleDto: UpdateSucursaleDto): Promise<Sucursal>;
    remove(id: number): Promise<any>;
}
