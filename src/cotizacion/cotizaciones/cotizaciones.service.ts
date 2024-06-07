import {
  NotFoundException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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
import { capitalizeTextos } from 'src/utils/capitalizeTextos';
@Injectable()
export class CotizacionesService {
  constructor(
    @InjectRepository(Cotizacion)
    private readonly cotizacionRepository: Repository<Cotizacion>,

    private readonly ciudadeszonasService: CiudadeszonasService,
    private readonly nivelespisosService: NivelespisosService,
    private readonly orientacionesService: OrientacionesService,
    private readonly tiposparedesService: TiposparedesService,
    private readonly tipossuelosService: TipossuelosService,
    private readonly tipostechosService: TipostechosService,
    private readonly tiposvidriosService: TiposvidriosService,

  ) { }

  async create(createCotizacionDto: CreateCotizacionDto): Promise<Cotizacion> {
    try {
      console.log("createCotizacionDto", createCotizacionDto);

      const buscarCiudadZona = await this.ciudadeszonasService.findOne(createCotizacionDto.ciudadzona_id)
      const buscarNivelPiso = await this.nivelespisosService.findOne(createCotizacionDto.nivelpiso_id)
      const buscarOrientacion = await this.orientacionesService.findOne(createCotizacionDto.orientacion_id)
      const buscarTipoPared = await this.tiposparedesService.findOne(createCotizacionDto.tipopared_id)
      const buscarTipoSuelo = await this.tipossuelosService.findOne(createCotizacionDto.tiposuelo_id)
      const buscarTipoTecho = await this.tipostechosService.findOne(createCotizacionDto.tipotecho_id)
      const buscarTipoVidrio = await this.tiposvidriosService.findOne(createCotizacionDto.tipovidrio_id)

      createCotizacionDto.nombrecotizacion = capitalizeTextos(createCotizacionDto.nombrecotizacion);

      // Encuentra la cotización con el número más alto para el nombre de cotización dado
      const maxNroCotizacion = await this.cotizacionRepository
        .createQueryBuilder('cotizacion')
        .select('MAX(cotizacion.nrocotizacion)', 'max')
        .where('cotizacion.nombrecotizacion = :nombrecotizacion', { nombrecotizacion: createCotizacionDto.nombrecotizacion })
        .getRawOne();

      const maxNro = maxNroCotizacion.max ? parseInt(maxNroCotizacion.max, 10) : 0;
      createCotizacionDto.nrocotizacion = maxNro + 1;

      const { ciudadzona_id, nivelpiso_id, orientacion_id, tipopared_id, tiposuelo_id, tipotecho_id, tipovidrio_id, ...cotizacionDatos } = createCotizacionDto;

      const nuevaCotizacion = this.cotizacionRepository.create({
        ...cotizacionDatos,
        ciudadzona: buscarCiudadZona,
        nivelpiso: buscarNivelPiso,
        orientacion: buscarOrientacion,
        tipopared: buscarTipoPared,
        tiposuelo: buscarTipoSuelo,
        tipotecho: buscarTipoTecho,
        tipovidrio: buscarTipoVidrio,
      });


      delete nuevaCotizacion.ciudadzona.valor;
      delete nuevaCotizacion.nivelpiso.valor;
      delete nuevaCotizacion.orientacion.valor;
      delete nuevaCotizacion.tipopared.valor;
      delete nuevaCotizacion.tiposuelo.valor;
      delete nuevaCotizacion.tipotecho.valor;
      delete nuevaCotizacion.tipovidrio.valor;

      console.log("nuevaCotizacion", nuevaCotizacion);


      return await this.cotizacionRepository.save(nuevaCotizacion);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (create) de la ruta "cotizaciones"`,
          error: `${error}`,
        });
      }
    }
  }

  async findAll(): Promise<Cotizacion[]> {
    try {
      const cotizaciones = await this.cotizacionRepository.find(
        { relations: ['ciudadzona', 'nivelpiso', 'orientacion', 'tipopared', 'tiposuelo', 'tipotecho', 'tipovidrio',] }
      );
      if (!cotizaciones || cotizaciones.length === 0) {
        throw new NotFoundException({
          message: `No se encontraron Cotizaciones`,
        });
      }
      cotizaciones.forEach((cotizacion) => delete cotizacion.ciudadzona.valor);
      cotizaciones.forEach((cotizacion) => delete cotizacion.nivelpiso.valor);
      cotizaciones.forEach((cotizacion) => delete cotizacion.orientacion.valor);
      cotizaciones.forEach((cotizacion) => delete cotizacion.tipopared.valor);
      cotizaciones.forEach((cotizacion) => delete cotizacion.tiposuelo.valor);
      cotizaciones.forEach((cotizacion) => delete cotizacion.tipotecho.valor);
      cotizaciones.forEach((cotizacion) => delete cotizacion.tipovidrio.valor);
      return cotizaciones;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "cotizaciones"`,
          error: `${error}`,
        });
      }
    }
  }
  /* async findAll(): Promise<Cotizacion[]> {
    try {
      const cotizaciones = await this.cotizacionRepository.find(
        { relations: ['ciudadzona', 'nivelpiso', 'orientacion', 'tipopared', 'tiposuelo', 'tipotecho', 'tipovidrio',] }
      );
      if (!cotizaciones || cotizaciones.length === 0) {
        throw new NotFoundException({
          message: `No se encontraron Cotizaciones`,
        });
      }
      return cotizaciones;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "cotizaciones"`,
          error: `${error}`,
        });
      }
    }
  } */
  async findAllPorNombCotiz(nombcotiz: string): Promise<Cotizacion[]> {
    try {
      let cotizaciones: Cotizacion[];

      // Buscar coincidencia exacta
      cotizaciones = await this.cotizacionRepository.find({
        where: { nombrecotizacion: nombcotiz },
        relations: ['ciudadzona', 'nivelpiso', 'orientacion', 'tipopared', 'tiposuelo', 'tipotecho', 'tipovidrio'],
      });

      if (!cotizaciones || cotizaciones.length === 0) {
        // Si no hay coincidencia exacta, hacer una búsqueda parcial
        cotizaciones = await this.cotizacionRepository.createQueryBuilder('cotizacion')
          .leftJoinAndSelect('cotizacion.ciudadzona', 'ciudadzona')
          .leftJoinAndSelect('cotizacion.nivelpiso', 'nivelpiso')
          .leftJoinAndSelect('cotizacion.orientacion', 'orientacion')
          .leftJoinAndSelect('cotizacion.tipopared', 'tipopared')
          .leftJoinAndSelect('cotizacion.tiposuelo', 'tiposuelo')
          .leftJoinAndSelect('cotizacion.tipotecho', 'tipotecho')
          .leftJoinAndSelect('cotizacion.tipovidrio', 'tipovidrio')
          .where('LOWER(cotizacion.nombrecotizacion) LIKE LOWER(:nombcotiz)', { nombcotiz: `%${nombcotiz.toLowerCase()}%` })
          .limit(5)
          .getMany();
      }

      if (!cotizaciones || cotizaciones.length === 0) {
        throw new NotFoundException({
          message: `No se encontraron Cotizaciones con nombre: ${nombcotiz}`,
        });
      }
      cotizaciones.forEach((cotizacion) => delete cotizacion.ciudadzona.valor);
      cotizaciones.forEach((cotizacion) => delete cotizacion.nivelpiso.valor);
      cotizaciones.forEach((cotizacion) => delete cotizacion.orientacion.valor);
      cotizaciones.forEach((cotizacion) => delete cotizacion.tipopared.valor);
      cotizaciones.forEach((cotizacion) => delete cotizacion.tiposuelo.valor);
      cotizaciones.forEach((cotizacion) => delete cotizacion.tipotecho.valor);
      cotizaciones.forEach((cotizacion) => delete cotizacion.tipovidrio.valor);

      return cotizaciones;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({
          message: `Error del Servidor. Revisar el metodo (findAllPorNombCotiz) de la ruta "cotizaciones"`,
          error: `${error}`,
        });
      }
    }
  }


  async findOne(id: number): Promise<Cotizacion> {
    try {
      const cotizacion = await this.cotizacionRepository.findOne({
        where: { id },
      });
      if (!cotizacion) {
        throw new NotFoundException({

          message: `Cotizacion con ID ${id} no fue encontrado`,
        });
      }
      return cotizacion;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (findOne) de la ruta "cotizaciones"`,
          error: `${error}`,
        });
      }
    }
  }
  async findOnePorNombre(nomCotizacion: string): Promise<Cotizacion> {
    try {
      const cotizacion = await this.cotizacionRepository.findOne({
        where: { nombrecotizacion: nomCotizacion },
      });
      if (!cotizacion) {
        throw new NotFoundException({
          message: `Cotizacion con nombre ${nomCotizacion} no fue encontrado`,
        });
      }
      return cotizacion;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (findOne) de la ruta "cotizaciones"`,
          error: `${error}`,
        });
      }
    }
  }

  async update(id: number, updateCotizacionDto: UpdateCotizacionDto): Promise<Cotizacion> {
    try {
      const existeCotizacion = await this.findOne(id);

      const buscarCiudadZona = await this.ciudadeszonasService.findOne(updateCotizacionDto.ciudadzona_id)
      const buscarNivelPiso = await this.nivelespisosService.findOne(updateCotizacionDto.nivelpiso_id)
      const buscarOrientacion = await this.orientacionesService.findOne(updateCotizacionDto.orientacion_id)
      const buscarTipoPared = await this.tiposparedesService.findOne(updateCotizacionDto.tipopared_id)
      const buscarTipoSuelo = await this.tipossuelosService.findOne(updateCotizacionDto.tiposuelo_id)
      const buscarTipoTecho = await this.tipostechosService.findOne(updateCotizacionDto.tipotecho_id)
      const buscarTipoVidrio = await this.tiposvidriosService.findOne(updateCotizacionDto.tipovidrio_id)

      updateCotizacionDto.nombrecotizacion = capitalizeTextos(updateCotizacionDto.nombrecotizacion);

      const actualizarCotizacion = await this.cotizacionRepository.preload({
        id,
        ...updateCotizacionDto
      })

      actualizarCotizacion.ciudadzona = buscarCiudadZona;
      actualizarCotizacion.nivelpiso = buscarNivelPiso;
      actualizarCotizacion.orientacion = buscarOrientacion;
      actualizarCotizacion.tipopared = buscarTipoPared;
      actualizarCotizacion.tiposuelo = buscarTipoSuelo;
      actualizarCotizacion.tipotecho = buscarTipoTecho;
      actualizarCotizacion.tipovidrio = buscarTipoVidrio;

      delete actualizarCotizacion.ciudadzona.valor;
      delete actualizarCotizacion.nivelpiso.valor;
      delete actualizarCotizacion.orientacion.valor;
      delete actualizarCotizacion.tipopared.valor;
      delete actualizarCotizacion.tiposuelo.valor;
      delete actualizarCotizacion.tipotecho.valor;
      delete actualizarCotizacion.tipovidrio.valor;

      return await this.cotizacionRepository.save(actualizarCotizacion);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (update) de la ruta "cotizaciones"`,
          error: `${error}`,
        });
      }
    }
  }

  async remove(id: number): Promise<any> {
    try {
      const cotizacion = await this.findOne(id);

      await this.cotizacionRepository.delete(id);
      return { success: true, message: `Se eliminó la Cotizacion con ID: ${id}` };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (remove) de la ruta "cotizaciones"`,
          error: `${error}`,
        });
      }
    }
  }
}
