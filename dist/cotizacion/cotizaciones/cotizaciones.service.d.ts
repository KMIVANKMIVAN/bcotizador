import { Repository } from 'typeorm';
import { CreateCotizacionDto } from './dto/create-cotizacion.dto';
import { UpdateCotizacionDto } from './dto/update-cotizacion.dto';
import { Cotizacion } from './entities/cotizacion.entity';
import { CiudadeszonasService } from '../ciudadeszonas/ciudadeszonas.service';
import { NivelespisosService } from '../nivelespisos/nivelespisos.service';
import { OrientacionesService } from '../orientaciones/orientaciones.service';
import { TiposparedesService } from '../tiposparedes/tiposparedes.service';
import { TipossuelosService } from '../tipossuelos/tipossuelos.service';
import { TipostechosService } from '../tipostechos/tipostechos.service';
import { TiposvidriosService } from '../tiposvidrios/tiposvidrios.service';
export declare class CotizacionesService {
    private readonly cotizacionRepository;
    private readonly ciudadeszonasService;
    private readonly nivelespisosService;
    private readonly orientacionesService;
    private readonly tiposparedesService;
    private readonly tipossuelosService;
    private readonly tipostechosService;
    private readonly tiposvidriosService;
    constructor(cotizacionRepository: Repository<Cotizacion>, ciudadeszonasService: CiudadeszonasService, nivelespisosService: NivelespisosService, orientacionesService: OrientacionesService, tiposparedesService: TiposparedesService, tipossuelosService: TipossuelosService, tipostechosService: TipostechosService, tiposvidriosService: TiposvidriosService);
    create(createCotizacionDto: CreateCotizacionDto): Promise<Cotizacion>;
    findAll(): Promise<Cotizacion[]>;
    findOne(id: number): Promise<Cotizacion>;
    update(id: number, updateCotizacionDto: UpdateCotizacionDto): Promise<Cotizacion>;
    remove(id: number): Promise<any>;
}
