import { Repository } from 'typeorm';
import { CreateInstaltuberiaDto } from './dto/create-instaltuberia.dto';
import { UpdateInstaltuberiaDto } from './dto/update-instaltuberia.dto';
import { Instaltuberia } from './entities/instaltuberia.entity';
export declare class InstaltuberiasService {
    private readonly nivelpisoRepository;
    constructor(nivelpisoRepository: Repository<Instaltuberia>);
    createSemilla(createInstaltuberiaDto: CreateInstaltuberiaDto): Promise<Instaltuberia>;
    create(createInstaltuberiaDto: CreateInstaltuberiaDto): Promise<Instaltuberia>;
    findAll(): Promise<Instaltuberia[]>;
    findAllPorRango(rango: number): Promise<Instaltuberia[]>;
    findAllClear(): Promise<Instaltuberia[]>;
    findOne(id: number): Promise<Instaltuberia>;
    update(id: number, updateInstaltuberiaDto: UpdateInstaltuberiaDto): Promise<Instaltuberia>;
    remove(id: number): Promise<any>;
}
