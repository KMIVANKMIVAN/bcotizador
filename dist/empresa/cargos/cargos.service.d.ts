import { Repository } from 'typeorm';
import { CreateCargoDto } from './dto/create-cargo.dto';
import { UpdateCargoDto } from './dto/update-cargo.dto';
import { Cargo } from './entities/cargo.entity';
import { UnidadesService } from '../unidades/unidades.service';
export declare class CargosService {
    private readonly cargoRepository;
    private readonly unidadesService;
    constructor(cargoRepository: Repository<Cargo>, unidadesService: UnidadesService);
    create(createCargoDto: CreateCargoDto): Promise<Cargo>;
    findAllPorNombCargo(cargo: string): Promise<Cargo[]>;
    findAll(): Promise<Cargo[]>;
    findOne(id: number): Promise<Cargo>;
    update(id: number, updateCargoDto: UpdateCargoDto): Promise<Cargo>;
    remove(id: number): Promise<any>;
}
