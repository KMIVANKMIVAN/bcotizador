import { Repository } from 'typeorm';
import { CreateGastopersonaDto } from './dto/create-gastopersona.dto';
import { UpdateGastopersonaDto } from './dto/update-gastopersona.dto';
import { Gastopersona } from './entities/gastopersona.entity';
export declare class GastospersonasService {
    private readonly gastopersonaRepository;
    constructor(gastopersonaRepository: Repository<Gastopersona>);
    createSemilla(createGastopersonaDto: CreateGastopersonaDto): Promise<Gastopersona>;
    create(createGastopersonaDto: CreateGastopersonaDto): Promise<Gastopersona>;
    findAll(): Promise<Gastopersona[]>;
    findAllPorNroPersona(nropersona: number): Promise<Gastopersona[]>;
    findAllClear(): Promise<Gastopersona[]>;
    findOne(id: number): Promise<Gastopersona>;
    update(id: number, updateGastopersonaDto: UpdateGastopersonaDto): Promise<Gastopersona>;
    remove(id: number): Promise<any>;
}
