import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrientacionDto } from './dto/create-orientacion.dto';
import { UpdateOrientacionDto } from './dto/update-orientacion.dto';
import { Orientacion } from './entities/orientacion.entity';
import { capitalizeTextos } from 'src/utils/capitalizeTextos';
@Injectable()
export class OrientacionesService {
  constructor(
    @InjectRepository(Orientacion)
    private readonly orientacionRepository: Repository<Orientacion>,
  ) { }

  async createSemilla(createOrientacionDto: CreateOrientacionDto): Promise<Orientacion> {
    try {
      createOrientacionDto.orientacion = capitalizeTextos(createOrientacionDto.orientacion);
      const nuevaOrientacion = this.orientacionRepository.create(
        createOrientacionDto,
      );
      return await this.orientacionRepository.save(nuevaOrientacion);
    } catch (error) {

      throw new InternalServerErrorException({

        mensaje: `Error del Servidor. Revisar el metodo (create) de la ruta "orientaciones"`,
        error: `${error}`,
      });
    }
  }
  async create(createOrientacionDto: CreateOrientacionDto): Promise<Orientacion> {
    try {
      createOrientacionDto.valor = Number(createOrientacionDto.valor) * 1 / 100;
      createOrientacionDto.orientacion = capitalizeTextos(createOrientacionDto.orientacion);
      const nuevaOrientacion = this.orientacionRepository.create(
        createOrientacionDto,
      );
      return await this.orientacionRepository.save(nuevaOrientacion);
    } catch (error) {

      throw new InternalServerErrorException({

        mensaje: `Error del Servidor. Revisar el metodo (create) de la ruta "orientaciones"`,
        error: `${error}`,
      });
    }
  }

  async findAll(): Promise<Orientacion[]> {
    try {
      const orientaciones = await this.orientacionRepository.find();
      if (!orientaciones || orientaciones.length === 0) {
        throw new NotFoundException({

          message: `No se encontraron orientaciones`,
        });
      }
      return orientaciones;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "orientaciones"`,
          error: `${error}`,
        });
      }
    }
  }
  async findAllPorNombOrient(orientacion: string): Promise<Orientacion[]> {
    try {
      const orientaciones = await this.orientacionRepository.createQueryBuilder('orientacion')
        .where('LOWER(orientacion.orientacion) LIKE LOWER(:orientacion)', { orientacion: `%${orientacion.toLowerCase()}%` })
        .limit(5)
        .getMany();

      if (!orientaciones || orientaciones.length === 0) {
        throw new NotFoundException({
          message: `No se encontraron orientaciones: ${orientacion}`,
        });
      }
      return orientaciones;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({
          message: `Error del Servidor. Revisar el metodo (findAllPorNombOrient) de la ruta "orientaciones"`,
          error: `${error}`,
        });
      }
    }
  }
  async findAllClear(): Promise<Orientacion[]> {
    try {
      const orientaciones = await this.orientacionRepository.find();
      if (!orientaciones || orientaciones.length === 0) {
        throw new NotFoundException({
          message: `No se encontraron orientaciones`,
        });
      }
      orientaciones.forEach((orientacion) => delete orientacion.valor);
      return orientaciones;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "orientaciones"`,
          error: `${error}`,
        });
      }
    }
  }

  async findOne(id: number): Promise<Orientacion> {
    try {
      const orientacion = await this.orientacionRepository.findOneBy({ id });
      if (!orientacion) {
        throw new NotFoundException({

          message: `Orientacion con ID: ${id} no fue encontrada`,
        });
      }
      return orientacion;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (findOne) de la ruta "orientaciones"`,
          error: `${error}`,
        });
      }
    }
  }

  async update(id: number, updateOrientacionDto: UpdateOrientacionDto): Promise<Orientacion> {
    try {
      const existeOrientacion = await this.findOne(id);
      updateOrientacionDto.orientacion = capitalizeTextos(updateOrientacionDto.orientacion);
      const actualizarOrientacion = this.orientacionRepository.merge(existeOrientacion, updateOrientacionDto);
      return await this.orientacionRepository.save(actualizarOrientacion);

    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (update) de la ruta "orientaciones"`,
          error: `${error}`,
        });
      }
    }
  }

  async remove(id: number): Promise<any> {
    try {
      const orientacion = await this.findOne(id);
      await this.orientacionRepository.delete(id);
      return {
        success: true,
        message: `Se eliminó la Orientacion con ID: ${id}`,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (remove) de la ruta "orientaciones"`,
          error: `${error}`,
        });
      }
    }
  }
}
