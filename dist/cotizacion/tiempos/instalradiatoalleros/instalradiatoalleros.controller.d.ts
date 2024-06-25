import { InstalradiatoallerosService } from './instalradiatoalleros.service';
import { CreateInstalradiatoalleroDto } from './dto/create-instalradiatoallero.dto';
import { UpdateInstalradiatoalleroDto } from './dto/update-instalradiatoallero.dto';
export declare class InstalradiatoallerosController {
    private readonly instalradiatoallerosService;
    constructor(instalradiatoallerosService: InstalradiatoallerosService);
    create(createInstalradiatoalleroDto: CreateInstalradiatoalleroDto): Promise<import("./entities/instalradiatoallero.entity").Instalradiatoallero>;
    findAll(): Promise<import("./entities/instalradiatoallero.entity").Instalradiatoallero[]>;
    findAllClear(): Promise<import("./entities/instalradiatoallero.entity").Instalradiatoallero[]>;
    findAllPorNroradiador(nroradiador: number): Promise<import("./entities/instalradiatoallero.entity").Instalradiatoallero[]>;
    findOne(id: number): Promise<import("./entities/instalradiatoallero.entity").Instalradiatoallero>;
    update(id: number, updateInstalradiatoalleroDto: UpdateInstalradiatoalleroDto): Promise<import("./entities/instalradiatoallero.entity").Instalradiatoallero>;
    remove(id: number): Promise<any>;
}
