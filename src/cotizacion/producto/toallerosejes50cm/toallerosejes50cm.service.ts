import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateToalleroeje50cmDto } from './dto/create-toalleroeje50cm.dto';
import { UpdateToalleroeje50cmDto } from './dto/update-toalleroeje50cm.dto';
import { Toalleroeje50cm } from './entities/toalleroeje50cm.entity';
import { capitalizeTextos } from 'src/utils/capitalizeTextos';

@Injectable()
export class Toallerosejes50cmService {
  constructor(
    @InjectRepository(Toalleroeje50cm)
    private readonly nivelpisoRepository: Repository<Toalleroeje50cm>,
  ) { }

  async createSemilla(createToalleroeje50cmDto: CreateToalleroeje50cmDto): Promise<Toalleroeje50cm> {
    try {
      createToalleroeje50cmDto.modelo = capitalizeTextos(createToalleroeje50cmDto.modelo);
      const nuevoCiudad = this.nivelpisoRepository.create(
        createToalleroeje50cmDto,
      );
      return await this.nivelpisoRepository.save(nuevoCiudad);
    } catch (error) {

      throw new InternalServerErrorException({

        mensaje: `Error del Servidor. Revisar el metodo (createSemilla) de la ruta "toallerosejes50cm"`,
        error: `${error}`,
      });
    }
  }
  async create(createToalleroeje50cmDto: CreateToalleroeje50cmDto): Promise<Toalleroeje50cm> {
    try {

      createToalleroeje50cmDto.modelo = capitalizeTextos(createToalleroeje50cmDto.modelo);
      const nuevoCiudad = this.nivelpisoRepository.create(
        createToalleroeje50cmDto,
      );
      return await this.nivelpisoRepository.save(nuevoCiudad);
    } catch (error) {

      throw new InternalServerErrorException({

        mensaje: `Error del Servidor. Revisar el metodo (create) de la ruta "toallerosejes50cm"`,
        error: `${error}`,
      });
    }
  }

  async findAll(): Promise<Toalleroeje50cm[]> {
    try {
      const toallerosejes50cm = await this.nivelpisoRepository.find();
      if (!toallerosejes50cm || toallerosejes50cm.length === 0) {
        throw new NotFoundException({

          message: `No se encontraron toallerosejes50cm`,
        });
      }
      return toallerosejes50cm;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "toallerosejes50cm"`,
          error: `${error}`,
        });
      }
    }
  }
  async findAllPorNombModelo(modelo: string): Promise<Toalleroeje50cm[]> {
    try {
      const toallerosejes50cm = await this.nivelpisoRepository.createQueryBuilder('modelo')
        .where('LOWER(modelo.modelo) LIKE LOWER(:modelo)', { modelo: `%${modelo.toLowerCase()}%` })
        .limit(5)
        .getMany();

      if (!toallerosejes50cm || toallerosejes50cm.length === 0) {
        throw new NotFoundException({
          message: `No se encontraron modelos: ${modelo}`,
        });
      }
      return toallerosejes50cm;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({
          message: `Error del Servidor. Revisar el metodo (findAllPorNombModelo) de la ruta "toallerosejes50cm"`,
          error: `${error}`,
        });
      }
    }
  }
  async findAllClear(): Promise<Toalleroeje50cm[]> {
    try {
      const toallerosejes50cm = await this.nivelpisoRepository.find();
      if (!toallerosejes50cm || toallerosejes50cm.length === 0) {
        throw new NotFoundException({
          message: `No se encontraron toallerosejes50cm`,
        });
      }
      toallerosejes50cm.forEach((potenciawats) => delete potenciawats.potenciawats);
      return toallerosejes50cm;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "toallerosejes50cm"`,
          error: `${error}`,
        });
      }
    }
  }

  async findOne(id: number): Promise<Toalleroeje50cm> {
    try {
      const toalleroeje50cm = await this.nivelpisoRepository.findOneBy({ id });
      if (!toalleroeje50cm) {
        throw new NotFoundException({

          message: `Toalleroeje50cm con ID: ${id} no fue encontrada`,
        });
      }
      return toalleroeje50cm;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (findOne) de la ruta "toallerosejes50cm"`,
          error: `${error}`,
        });
      }
    }
  }

  async update(id: number, updateToalleroeje50cmDto: UpdateToalleroeje50cmDto): Promise<Toalleroeje50cm> {
    try {
      const existeToalleroeje50cm = await this.findOne(id);
      updateToalleroeje50cmDto.modelo = capitalizeTextos(updateToalleroeje50cmDto.modelo);
      const actualizarCiudad = this.nivelpisoRepository.merge(existeToalleroeje50cm, updateToalleroeje50cmDto);
      return await this.nivelpisoRepository.save(actualizarCiudad);

    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (update) de la ruta "toallerosejes50cm"`,
          error: `${error}`,
        });
      }
    }
  }

  async remove(id: number): Promise<any> {
    try {
      const toalleroeje50cm = await this.findOne(id);
      await this.nivelpisoRepository.delete(id);
      return {
        success: true,
        message: `Se eliminó el Toalleroeje50cm con ID: ${id}`,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (remove) de la ruta "toallerosejes50cm"`,
          error: `${error}`,
        });
      }
    }
  }
}
