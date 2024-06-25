import { Radiadoresejes50cmService } from './radiadoresejes50cm.service';
import { CreateRadiadoreje50cmDto } from './dto/create-radiadoreje50cm.dto';
import { UpdateRadiadoreje50cmDto } from './dto/update-radiadoreje50cm.dto';
export declare class Radiadoresejes50cmController {
    private readonly radiadoresejes50cmService;
    constructor(radiadoresejes50cmService: Radiadoresejes50cmService);
    create(createRadiadoreje50cmDto: CreateRadiadoreje50cmDto): Promise<import("./entities/radiadoreje50cm.entity").Radiadoreje50cm>;
    findAll(): Promise<import("./entities/radiadoreje50cm.entity").Radiadoreje50cm[]>;
    findAllClear(): Promise<import("./entities/radiadoreje50cm.entity").Radiadoreje50cm[]>;
    findAllPorNombModelo(modelo: string): Promise<import("./entities/radiadoreje50cm.entity").Radiadoreje50cm[]>;
    findOne(id: number): Promise<import("./entities/radiadoreje50cm.entity").Radiadoreje50cm>;
    update(id: number, updateRadiadoreje50cmDto: UpdateRadiadoreje50cmDto): Promise<import("./entities/radiadoreje50cm.entity").Radiadoreje50cm>;
    remove(id: number): Promise<any>;
}
