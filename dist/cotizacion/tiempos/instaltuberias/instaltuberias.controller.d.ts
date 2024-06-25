import { InstaltuberiasService } from './instaltuberias.service';
import { CreateInstaltuberiaDto } from './dto/create-instaltuberia.dto';
import { UpdateInstaltuberiaDto } from './dto/update-instaltuberia.dto';
export declare class InstaltuberiasController {
    private readonly instaltuberiasService;
    constructor(instaltuberiasService: InstaltuberiasService);
    create(createInstaltuberiaDto: CreateInstaltuberiaDto): Promise<import("./entities/instaltuberia.entity").Instaltuberia>;
    findAll(): Promise<import("./entities/instaltuberia.entity").Instaltuberia[]>;
    findAllClear(): Promise<Partial<import("./entities/instaltuberia.entity").Instaltuberia>[]>;
    findAllPorRango(rango: number): Promise<import("./entities/instaltuberia.entity").Instaltuberia[]>;
    findOne(id: number): Promise<import("./entities/instaltuberia.entity").Instaltuberia>;
    update(id: number, updateInstaltuberiaDto: UpdateInstaltuberiaDto): Promise<import("./entities/instaltuberia.entity").Instaltuberia>;
    remove(id: number): Promise<any>;
}
