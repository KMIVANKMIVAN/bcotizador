import { Repository } from 'typeorm';
import { CreateInstalradiatoalleroDto } from './dto/create-instalradiatoallero.dto';
import { UpdateInstalradiatoalleroDto } from './dto/update-instalradiatoallero.dto';
import { Instalradiatoallero } from './entities/instalradiatoallero.entity';
export declare class InstalradiatoallerosService {
    private readonly nivelpisoRepository;
    constructor(nivelpisoRepository: Repository<Instalradiatoallero>);
    createSemilla(createInstalradiatoalleroDto: CreateInstalradiatoalleroDto): Promise<Instalradiatoallero>;
    create(createInstalradiatoalleroDto: CreateInstalradiatoalleroDto): Promise<Instalradiatoallero>;
    findAll(): Promise<Instalradiatoallero[]>;
    findAllPorNroradiador(nroradiador: number): Promise<Instalradiatoallero[]>;
    findAllClear(): Promise<Instalradiatoallero[]>;
    findOne(id: number): Promise<Instalradiatoallero>;
    update(id: number, updateInstalradiatoalleroDto: UpdateInstalradiatoalleroDto): Promise<Instalradiatoallero>;
    remove(id: number): Promise<any>;
}
