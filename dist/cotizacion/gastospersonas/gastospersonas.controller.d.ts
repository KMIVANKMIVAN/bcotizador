import { GastospersonasService } from './gastospersonas.service';
import { CreateGastopersonaDto } from './dto/create-gastopersona.dto';
import { UpdateGastopersonaDto } from './dto/update-gastopersona.dto';
export declare class GastospersonasController {
    private readonly gastospersonasService;
    constructor(gastospersonasService: GastospersonasService);
    create(createGastospersonaDto: CreateGastopersonaDto): Promise<import("./entities/gastopersona.entity").Gastopersona>;
    findAll(): Promise<import("./entities/gastopersona.entity").Gastopersona[]>;
    findAllClear(): Promise<import("./entities/gastopersona.entity").Gastopersona[]>;
    findAllPorNombNivelPiso(nropersona: number): Promise<import("./entities/gastopersona.entity").Gastopersona[]>;
    findOne(id: number): Promise<import("./entities/gastopersona.entity").Gastopersona>;
    update(id: number, updateGastospersonaDto: UpdateGastopersonaDto): Promise<import("./entities/gastopersona.entity").Gastopersona>;
    remove(id: number): Promise<any>;
}
