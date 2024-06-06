import { OrientacionesService } from './orientaciones.service';
import { CreateOrientacionDto } from './dto/create-orientacion.dto';
import { UpdateOrientacionDto } from './dto/update-orientacion.dto';
export declare class OrientacionesController {
    private readonly orientacionesService;
    constructor(orientacionesService: OrientacionesService);
    create(createOrientacionDto: CreateOrientacionDto): Promise<import("./entities/orientacion.entity").Orientacion>;
    findAll(): Promise<import("./entities/orientacion.entity").Orientacion[]>;
    findOne(id: number): Promise<import("./entities/orientacion.entity").Orientacion>;
    update(id: number, updateOrientacionDto: UpdateOrientacionDto): Promise<import("./entities/orientacion.entity").Orientacion>;
    remove(id: number): Promise<any>;
}
