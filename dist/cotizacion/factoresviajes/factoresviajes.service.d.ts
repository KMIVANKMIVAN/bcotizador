import { Repository } from 'typeorm';
import { CreateFactorviajeDto } from './dto/create-factorviaje.dto';
import { UpdateFactorviajeDto } from './dto/update-factorviaje.dto';
import { Factorviaje } from './entities/factorviaje.entity';
export declare class FactoresviajesService {
    private readonly nivelpisoRepository;
    constructor(nivelpisoRepository: Repository<Factorviaje>);
    createSemilla(createFactorviajeDto: CreateFactorviajeDto): Promise<Factorviaje>;
    create(createFactorviajeDto: CreateFactorviajeDto): Promise<Factorviaje>;
    findAll(): Promise<Factorviaje[]>;
    findAllPorNombCiudad(ciudad: string): Promise<Factorviaje[]>;
    findAllClear(): Promise<Factorviaje[]>;
    findOne(id: number): Promise<Factorviaje>;
    update(id: number, updateFactorviajeDto: UpdateFactorviajeDto): Promise<Factorviaje>;
    remove(id: number): Promise<any>;
}
