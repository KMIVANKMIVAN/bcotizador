import { CargosService } from './cargos.service';
import { CreateCargoDto } from './dto/create-cargo.dto';
import { UpdateCargoDto } from './dto/update-cargo.dto';
export declare class CargosController {
    private readonly cargosService;
    constructor(cargosService: CargosService);
    create(createCargoDto: CreateCargoDto): Promise<import("./entities/cargo.entity").Cargo>;
    findAll(): Promise<import("./entities/cargo.entity").Cargo[]>;
    findOne(id: number): Promise<import("./entities/cargo.entity").Cargo>;
    update(id: number, updateCargoDto: UpdateCargoDto): Promise<import("./entities/cargo.entity").Cargo>;
    remove(id: number): Promise<any>;
}
