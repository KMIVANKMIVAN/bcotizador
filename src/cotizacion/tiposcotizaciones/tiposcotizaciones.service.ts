import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTipocotizacionDto } from './dto/create-tipocotizacion.dto';
import { UpdateTipocotizacionDto } from './dto/update-tipocotizacion.dto';
import { Tipocotizacion } from './entities/tipocotizacion.entity';
import { capitalizeTextos } from 'src/utils/capitalizeTextos';

@Injectable()
export class TiposcotizacionesService {
  constructor(
    @InjectRepository(Tipocotizacion)
    private readonly tipocotizacionRepository: Repository<Tipocotizacion>,
  ) { }

  async createSemilla(createTipocotizacionDto: CreateTipocotizacionDto): Promise<Tipocotizacion> {
    try {
      createTipocotizacionDto.tipocotizacion = capitalizeTextos(createTipocotizacionDto.tipocotizacion);
      const nuevoTipocotizacion = this.tipocotizacionRepository.create(
        createTipocotizacionDto,
      );
      return await this.tipocotizacionRepository.save(nuevoTipocotizacion);
    } catch (error) {
      throw new InternalServerErrorException({
        mensaje: `Error del Servidor. Revisar el metodo (createSemilla) de la ruta "tiposcotizaciones"`,
        error: `${error}`,
      });
    }
  }
  async create(createTipocotizacionDto: CreateTipocotizacionDto): Promise<Tipocotizacion> {
    try {
      createTipocotizacionDto.tipocotizacion = capitalizeTextos(createTipocotizacionDto.tipocotizacion);
      const nuevoTipocotizacion = this.tipocotizacionRepository.create(
        createTipocotizacionDto,
      );
      return await this.tipocotizacionRepository.save(nuevoTipocotizacion);
    } catch (error) {

      throw new InternalServerErrorException({

        mensaje: `Error del Servidor. Revisar el metodo (create) de la ruta "tiposcotizaciones"`,
        error: `${error}`,
      });
    }
  }
  async findAllPorNombTipoCotiz(tipocotizacion: string): Promise<Tipocotizacion[]> {
    try {
      const tiposcotizaciones = await this.tipocotizacionRepository.createQueryBuilder('tipocotizacion')
        .where('LOWER(tipocotizacion.tipocotizacion) LIKE LOWER(:tipocotizacion)', { tipocotizacion: `%${tipocotizacion.toLowerCase()}%` })
        .limit(5)
        .getMany();

      if (!tiposcotizaciones || tiposcotizaciones.length === 0) {
        throw new NotFoundException({
          message: `No se encontraron tipos cotizaciones: ${tipocotizacion}`,
        });
      }
      return tiposcotizaciones;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({
          message: `Error del Servidor. Revisar el metodo (findAllPorNombTipoCotiz) de la ruta "tiposcotizaciones"`,
          error: `${error}`,
        });
      }
    }
  }
  async findAll(): Promise<Tipocotizacion[]> {
    try {
      const tiposcotizaciones = await this.tipocotizacionRepository.find();
      if (!tiposcotizaciones || tiposcotizaciones.length === 0) {
        throw new NotFoundException({

          message: `No se encontraron tiposcotizaciones`,
        });
      }
      return tiposcotizaciones;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "tiposcotizaciones"`,
          error: `${error}`,
        });
      }
    }
  }

  async findAllClear(): Promise<Tipocotizacion[]> {
    try {
      const tiposcotizaciones = await this.tipocotizacionRepository.find();
      if (!tiposcotizaciones || tiposcotizaciones.length === 0) {
        throw new NotFoundException({

          message: `No se encontraron tiposcotizaciones`,
        });
      }
      // .forEach(() => delete .valor);
      return tiposcotizaciones;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "tiposcotizaciones"`,
          error: `${error}`,
        });
      }
    }
  }

  async findOne(id: number): Promise<Tipocotizacion> {
    try {
      const Tipocotizacion = await this.tipocotizacionRepository.findOneBy({ id });
      if (!Tipocotizacion) {
        throw new NotFoundException({

          message: `Tipocotizacion con ID: ${id} no fue encontrada`,
        });
      }
      return Tipocotizacion;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (findOne) de la ruta "tiposcotizaciones"`,
          error: `${error}`,
        });
      }
    }
  }

  async update(id: number, updateTipocotizacionDto: UpdateTipocotizacionDto): Promise<Tipocotizacion> {
    try {
      const existeTipocotizacion = await this.findOne(id);
      updateTipocotizacionDto.tipocotizacion = capitalizeTextos(updateTipocotizacionDto.tipocotizacion);
      const actualizarTipocotizacion = this.tipocotizacionRepository.merge(existeTipocotizacion, updateTipocotizacionDto);
      return await this.tipocotizacionRepository.save(actualizarTipocotizacion);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (update) de la ruta "tiposcotizaciones"`,
          error: `${error}`,
        });
      }
    }
  }

  async remove(id: number): Promise<any> {
    try {
      const Tipocotizacion = await this.findOne(id);
      await this.tipocotizacionRepository.delete(id);
      return {
        success: true,
        message: `Se eliminó el Tipocotizacion con ID: ${id}`,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (remove) de la ruta "tiposcotizaciones"`,
          error: `${error}`,
        });
      }
    }
  }
}
