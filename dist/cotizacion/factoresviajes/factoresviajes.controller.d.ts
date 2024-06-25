import { FactoresviajesService } from './factoresviajes.service';
import { CreateFactorviajeDto } from './dto/create-factorviaje.dto';
import { UpdateFactorviajeDto } from './dto/update-factorviaje.dto';
export declare class FactoresviajesController {
    private readonly factoresviajesService;
    constructor(factoresviajesService: FactoresviajesService);
    create(createFactorviajeDto: CreateFactorviajeDto): Promise<import("./entities/factorviaje.entity").Factorviaje>;
    findAll(): Promise<import("./entities/factorviaje.entity").Factorviaje[]>;
    findAllClear(): Promise<import("./entities/factorviaje.entity").Factorviaje[]>;
    findAllPorNombCiudad(ciudad: string): Promise<import("./entities/factorviaje.entity").Factorviaje[]>;
    findOne(id: number): Promise<import("./entities/factorviaje.entity").Factorviaje>;
    update(id: number, updateFactorviajeDto: UpdateFactorviajeDto): Promise<import("./entities/factorviaje.entity").Factorviaje>;
    remove(id: number): Promise<any>;
}
