import { Repository } from 'typeorm';
import { CreateCotizacionambienteDto } from './dto/create-cotizacionambiente.dto';
import { UpdateCotizacionambienteDto } from './dto/update-cotizacionambiente.dto';
import { Cotizacionambiente } from './entities/cotizacionambiente.entity';
import { CotizacionesService } from '../cotizaciones/cotizaciones.service';
export declare class CotizacionesambientesService {
    private readonly cotizacionambienteRepository;
    private readonly cotizacionesService;
    constructor(cotizacionambienteRepository: Repository<Cotizacionambiente>, cotizacionesService: CotizacionesService);
    create(createCotizacionambienteDto: CreateCotizacionambienteDto): Promise<Cotizacionambiente>;
    findAllPorCotizacion(id: number): Promise<Cotizacionambiente[]>;
    findAll(): Promise<Cotizacionambiente[]>;
    findOne(id: number): Promise<Cotizacionambiente>;
    update(id: number, updateCotizacionambienteDto: UpdateCotizacionambienteDto): Promise<Cotizacionambiente>;
    remove(id: number): Promise<any>;
}
