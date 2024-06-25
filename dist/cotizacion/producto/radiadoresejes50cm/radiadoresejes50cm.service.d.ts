import { Repository } from 'typeorm';
import { CreateRadiadoreje50cmDto } from './dto/create-radiadoreje50cm.dto';
import { UpdateRadiadoreje50cmDto } from './dto/update-radiadoreje50cm.dto';
import { Radiadoreje50cm } from './entities/radiadoreje50cm.entity';
export declare class Radiadoresejes50cmService {
    private readonly nivelpisoRepository;
    constructor(nivelpisoRepository: Repository<Radiadoreje50cm>);
    createSemilla(createRadiadoreje50cmDto: CreateRadiadoreje50cmDto): Promise<Radiadoreje50cm>;
    create(createRadiadoreje50cmDto: CreateRadiadoreje50cmDto): Promise<Radiadoreje50cm>;
    findAll(): Promise<Radiadoreje50cm[]>;
    findAllPorNombModelo(modelo: string): Promise<Radiadoreje50cm[]>;
    findAllClear(): Promise<Radiadoreje50cm[]>;
    findOne(id: number): Promise<Radiadoreje50cm>;
    update(id: number, updateRadiadoreje50cmDto: UpdateRadiadoreje50cmDto): Promise<Radiadoreje50cm>;
    remove(id: number): Promise<any>;
}
