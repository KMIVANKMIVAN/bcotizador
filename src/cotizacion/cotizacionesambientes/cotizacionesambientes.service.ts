import {
  NotFoundException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCotizacionambienteDto } from './dto/create-cotizacionambiente.dto';
import { UpdateCotizacionambienteDto } from './dto/update-cotizacionambiente.dto';
import { Cotizacionambiente } from './entities/cotizacionambiente.entity';
import { CotizacionesService } from '../cotizaciones/cotizaciones.service';

import { capitalizeTextos } from 'src/utils/capitalizeTextos';
@Injectable()
export class CotizacionesambientesService {
  constructor(
    @InjectRepository(Cotizacionambiente)
    private readonly cotizacionambienteRepository: Repository<Cotizacionambiente>,

    private readonly cotizacionesService: CotizacionesService,

  ) { }

  async create(createCotizacionambienteDto: CreateCotizacionambienteDto): Promise<Cotizacionambiente> {
    try {
      const buscarCotizacion = await this.cotizacionesService.findOne(createCotizacionambienteDto.cotizacion_id)

      createCotizacionambienteDto.nombreambiente = capitalizeTextos(createCotizacionambienteDto.nombreambiente);

      const { cotizacion_id, ...cotizacionDatos } = createCotizacionambienteDto;

      const nuevaCotizacion = this.cotizacionambienteRepository.create({
        ...cotizacionDatos,
        cotizacion: buscarCotizacion,
      });

      return await this.cotizacionambienteRepository.save(nuevaCotizacion);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (create) de la ruta "cotizacionesambientes"`,
          error: `${error}`,
        });
      }
    }
  }

  async findAll(): Promise<Cotizacionambiente[]> {
    try {
      const cotizacionesambientes = await this.cotizacionambienteRepository.find(
        { relations: ['cotizacion',] }
      );
      if (!cotizacionesambientes || cotizacionesambientes.length === 0) {
        throw new NotFoundException({
          message: `No se encontraron Cotizacionesambientes`,
        });
      }
      return cotizacionesambientes;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "cotizacionesambientes"`,
          error: `${error}`,
        });
      }
    }
  }

  async findOne(id: number): Promise<Cotizacionambiente> {
    try {
      const cotizacionambiente = await this.cotizacionambienteRepository.findOne({
        where: { id },
      });
      if (!cotizacionambiente) {
        throw new NotFoundException({

          message: `Cotizacionambiente con ID ${id} no fue encontrado`,
        });
      }
      return cotizacionambiente;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (findOne) de la ruta "cotizacionesambientes"`,
          error: `${error}`,
        });
      }
    }
  }

  async update(id: number, updateCotizacionambienteDto: UpdateCotizacionambienteDto): Promise<Cotizacionambiente> {
    try {
      const existeCotizacionambiente = await this.findOne(id);

      const buscarCotizacion = await this.cotizacionesService.findOne(updateCotizacionambienteDto.cotizacion_id)

      updateCotizacionambienteDto.nombreambiente = capitalizeTextos(updateCotizacionambienteDto.nombreambiente);

      const actualizarCotizacionambiente = await this.cotizacionambienteRepository.preload({
        id,
        ...updateCotizacionambienteDto
      })

      actualizarCotizacionambiente.cotizacion = buscarCotizacion;

      // delete actualizarCotizacionambiente.ciudadzona.valor;

      return await this.cotizacionambienteRepository.save(actualizarCotizacionambiente);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (update) de la ruta "cotizacionesambientes"`,
          error: `${error}`,
        });
      }
    }
  }

  async remove(id: number): Promise<any> {
    try {
      const cotizacionambiente = await this.findOne(id);

      await this.cotizacionambienteRepository.delete(id);
      return { success: true, message: `Se eliminó la Cotizacionambiente con ID: ${id}` };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (remove) de la ruta "cotizacionesambientes"`,
          error: `${error}`,
        });
      }
    }
  }
}
