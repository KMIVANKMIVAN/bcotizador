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
      const buscarCiudadZona = await this.ciudadeszonasService.findOne(createCotizacionDto.ciudadzona_id)
      const buscarNivelPiso = await this.nivelespisosService.findOne(createCotizacionDto.nivelpiso_id)
      const buscarOrientacion = await this.orientacionesService.findOne(createCotizacionDto.orientacion_id)
      const buscarTipoPared = await this.tiposparedesService.findOne(createCotizacionDto.tipopared_id)
      const buscarTipoSuelo = await this.tipossuelosService.findOne(createCotizacionDto.tiposuelo_id)
      const buscarTipoTecho = await this.tipostechosService.findOne(createCotizacionDto.tipotecho_id)
      const buscarTipoVidrio = await this.tiposvidriosService.findOne(createCotizacionDto.tipovidrio_id)

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


  async findOne(id: number): Promise<Cotizacion> {
    try {
      const cotizacion = await this.cotizacionRepository.findOne({
        where: { id },
      });
      if (!cotizacion) {
        throw new NotFoundException({

          message: `Cotizacion con ID ${id} no fue encontrada`,
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
