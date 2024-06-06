import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUnidadeDto } from './dto/create-unidade.dto';
import { UpdateUnidadeDto } from './dto/update-unidade.dto';

import { Unidad } from './entities/unidade.entity';

import { DireccionesService } from '../direcciones/direcciones.service';
import { capitalizeTextos } from 'src/utils/capitalizeTextos';
@Injectable()
export class UnidadesService {
  constructor(
    @InjectRepository(Unidad)
    private readonly unidadRepository: Repository<Unidad>,

    private readonly direccionesService: DireccionesService,
  ) { }

  async create(createUnidadeDto: CreateUnidadeDto): Promise<Unidad> {
    try {
      const buscarDireccion = await this.direccionesService.findOne(createUnidadeDto.direccion_id)
      createUnidadeDto.unidad = capitalizeTextos(createUnidadeDto.unidad);
      createUnidadeDto.descripcion = capitalizeTextos(createUnidadeDto.descripcion);

      const { direccion_id, ...unidadDatos } = createUnidadeDto; // propagar los datos de direccion

      const nuevaUnidad = this.unidadRepository.create({
        ...unidadDatos,
        direccion: buscarDireccion, // Asigna empresa a la direccion
      });

      return await this.unidadRepository.save(nuevaUnidad);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (create) de la ruta "unidades"`,
          error: `${error}`,
        });
      }
    }
  }

  async findAll(): Promise<Unidad[]> {
    try {
      const unidades = await this.unidadRepository.find({ relations: ['direccion'] });
      if (!unidades || unidades.length === 0) {
        throw new NotFoundException({

          message: `No se encontraron Unidades`,
        });
      }
      return unidades;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "unidades"`,
          error: `${error}`,
        });
      }
    }
  }

  async findOne(id: number): Promise<Unidad> {
    try {
      const unidad = await this.unidadRepository.findOne({
        where: { id },
        relations: ['direccion'],
      });
      if (!unidad) {
        throw new NotFoundException({

          message: `Unidad con ID: ${id} no fue encontrada`,
        });
      }
      return unidad;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (findOne) de la ruta "unidades"`,
          error: `${error}`,
        });
      }
    }
  }

  async update(id: number, updateUnidadeDto: UpdateUnidadeDto)
    : Promise<Unidad> {
    try {
      const existeUnidad = await this.findOne(id);
      updateUnidadeDto.unidad = capitalizeTextos(updateUnidadeDto.unidad);
      updateUnidadeDto.descripcion = capitalizeTextos(updateUnidadeDto.descripcion);
      const buscarDireccion = await this.direccionesService.findOne(updateUnidadeDto.direccion_id);

      const actualizarUnidad = await this.unidadRepository.preload({
        id,
        ...updateUnidadeDto,
      });
      actualizarUnidad.direccion = buscarDireccion

      return await this.unidadRepository.save(actualizarUnidad);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (update) de la ruta "unidades"`,
          error: `${error}`,
        });
      }
    }
  }

  async remove(id: number): Promise<any> {
    try {
      const unidad = await this.findOne(id);
      await this.unidadRepository.delete(id);
      return {
        success: true,
        message: `Se eliminó el Unidad con ID: ${id}`,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (remove) de la ruta "unidades"`,
          error: `${error}`,
        });
      }
    }
  }
}
