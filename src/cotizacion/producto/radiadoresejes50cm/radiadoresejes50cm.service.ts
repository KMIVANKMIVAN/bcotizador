import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRadiadoreje50cmDto } from './dto/create-radiadoreje50cm.dto';
import { UpdateRadiadoreje50cmDto } from './dto/update-radiadoreje50cm.dto';
import { Radiadoreje50cm } from './entities/radiadoreje50cm.entity';
import { capitalizeTextos } from 'src/utils/capitalizeTextos';

@Injectable()
export class Radiadoresejes50cmService {
  constructor(
    @InjectRepository(Radiadoreje50cm)
    private readonly nivelpisoRepository: Repository<Radiadoreje50cm>,
  ) { }

  async createSemilla(createRadiadoreje50cmDto: CreateRadiadoreje50cmDto): Promise<Radiadoreje50cm> {
    try {
      console.log("createRadiadoreje50cmDto",createRadiadoreje50cmDto);

      createRadiadoreje50cmDto.modelo = capitalizeTextos(createRadiadoreje50cmDto.modelo);
      const nuevoCiudad = this.nivelpisoRepository.create(
        createRadiadoreje50cmDto,
      );
      return await this.nivelpisoRepository.save(nuevoCiudad);
    } catch (error) {

      throw new InternalServerErrorException({

        mensaje: `Error del Servidor. Revisar el metodo (createSemilla) de la ruta "radiadoresejes50cm"`,
        error: `${error}`,
      });
    }
  }
  async create(createRadiadoreje50cmDto: CreateRadiadoreje50cmDto): Promise<Radiadoreje50cm> {
    try {

      createRadiadoreje50cmDto.modelo = capitalizeTextos(createRadiadoreje50cmDto.modelo);
      const nuevoCiudad = this.nivelpisoRepository.create(
        createRadiadoreje50cmDto,
      );
      return await this.nivelpisoRepository.save(nuevoCiudad);
    } catch (error) {

      throw new InternalServerErrorException({

        mensaje: `Error del Servidor. Revisar el metodo (create) de la ruta "radiadoresejes50cm"`,
        error: `${error}`,
      });
    }
  }

  async findAll(): Promise<Radiadoreje50cm[]> {
    try {
      const radiadoresejes50cm = await this.nivelpisoRepository.find();
      if (!radiadoresejes50cm || radiadoresejes50cm.length === 0) {
        throw new NotFoundException({

          message: `No se encontraron radiadoresejes50cm`,
        });
      }
      return radiadoresejes50cm;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "radiadoresejes50cm"`,
          error: `${error}`,
        });
      }
    }
  }
  async findAllPorNombModelo(modelo: string): Promise<Radiadoreje50cm[]> {
    try {
      const radiadoresejes50cm = await this.nivelpisoRepository.createQueryBuilder('modelo')
        .where('LOWER(modelo.modelo) LIKE LOWER(:modelo)', { modelo: `%${modelo.toLowerCase()}%` })
        .limit(5)
        .getMany();

      if (!radiadoresejes50cm || radiadoresejes50cm.length === 0) {
        throw new NotFoundException({
          message: `No se encontraron modelos: ${modelo}`,
        });
      }
      return radiadoresejes50cm;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({
          message: `Error del Servidor. Revisar el metodo (findAllPorNombModelo) de la ruta "radiadoresejes50cm"`,
          error: `${error}`,
        });
      }
    }
  }
  async findAllClear(): Promise<Radiadoreje50cm[]> {
    try {
      const radiadoresejes50cm = await this.nivelpisoRepository.find();
      if (!radiadoresejes50cm || radiadoresejes50cm.length === 0) {
        throw new NotFoundException({
          message: `No se encontraron radiadoresejes50cm`,
        });
      }
      radiadoresejes50cm.forEach((potenciawats) => delete potenciawats.potenciawats);
      return radiadoresejes50cm;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "radiadoresejes50cm"`,
          error: `${error}`,
        });
      }
    }
  }

  async findOne(id: number): Promise<Radiadoreje50cm> {
    try {
      const radiadoreje50cm = await this.nivelpisoRepository.findOneBy({ id });
      if (!radiadoreje50cm) {
        throw new NotFoundException({

          message: `Radiadoreje50cm con ID: ${id} no fue encontrada`,
        });
      }
      return radiadoreje50cm;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (findOne) de la ruta "radiadoresejes50cm"`,
          error: `${error}`,
        });
      }
    }
  }

  async update(id: number, updateRadiadoreje50cmDto: UpdateRadiadoreje50cmDto): Promise<Radiadoreje50cm> {
    try {
      const existeRadiadoresejes50cm = await this.findOne(id);
      updateRadiadoreje50cmDto.modelo = capitalizeTextos(updateRadiadoreje50cmDto.modelo);
      const actualizarCiudad = this.nivelpisoRepository.merge(existeRadiadoresejes50cm, updateRadiadoreje50cmDto);
      return await this.nivelpisoRepository.save(actualizarCiudad);

    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (update) de la ruta "radiadoresejes50cm"`,
          error: `${error}`,
        });
      }
    }
  }

  async remove(id: number): Promise<any> {
    try {
      const radiadoreje50cm = await this.findOne(id);
      await this.nivelpisoRepository.delete(id);
      return {
        success: true,
        message: `Se eliminó el Radiadoreje50cm con ID: ${id}`,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (remove) de la ruta "radiadoresejes50cm"`,
          error: `${error}`,
        });
      }
    }
  }
}
