import { TipossuelosService } from './tipossuelos.service';
import { CreateTiposueloDto } from './dto/create-tiposuelo.dto';
import { UpdateTiposueloDto } from './dto/update-tiposuelo.dto';
export declare class TipossuelosController {
    private readonly tipossuelosService;
    constructor(tipossuelosService: TipossuelosService);
    create(createTiposueloDto: CreateTiposueloDto): Promise<import("./entities/tiposuelo.entity").Tiposuelo>;
    findAll(): Promise<import("./entities/tiposuelo.entity").Tiposuelo[]>;
    findAllPorNombTipoSuelo(tiposuelo: string): Promise<import("./entities/tiposuelo.entity").Tiposuelo[]>;
    findAllClear(): Promise<import("./entities/tiposuelo.entity").Tiposuelo[]>;
    findOne(id: number): Promise<import("./entities/tiposuelo.entity").Tiposuelo>;
    update(id: number, updateTiposueloDto: UpdateTiposueloDto): Promise<import("./entities/tiposuelo.entity").Tiposuelo>;
    remove(id: number): Promise<any>;
}
