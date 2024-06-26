import { CotizacionesambientesService } from './cotizacionesambientes.service';
import { CreateCotizacionambienteDto } from './dto/create-cotizacionambiente.dto';
import { UpdateCotizacionambienteDto } from './dto/update-cotizacionambiente.dto';
export declare class CotizacionesambientesController {
    private readonly cotizacionesambientesService;
    constructor(cotizacionesambientesService: CotizacionesambientesService);
    create(createCotizacionambienteDto: CreateCotizacionambienteDto): Promise<import("./entities/cotizacionambiente.entity").Cotizacionambiente>;
    findAll(): Promise<import("./entities/cotizacionambiente.entity").Cotizacionambiente[]>;
    findOne(id: number): Promise<import("./entities/cotizacionambiente.entity").Cotizacionambiente>;
    update(id: number, updateCotizacionambienteDto: UpdateCotizacionambienteDto): Promise<import("./entities/cotizacionambiente.entity").Cotizacionambiente>;
    remove(id: number): Promise<any>;
}
