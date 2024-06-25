import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInstaltuberiaDto } from './dto/create-instaltuberia.dto';
import { UpdateInstaltuberiaDto } from './dto/update-instaltuberia.dto';
import { Instaltuberia } from './entities/instaltuberia.entity';
import { capitalizeTextos } from 'src/utils/capitalizeTextos';

@Injectable()
export class InstaltuberiasService {
  constructor(
    @InjectRepository(Instaltuberia)
    private readonly nivelpisoRepository: Repository<Instaltuberia>,
  ) { }

  async createSemilla(createInstaltuberiaDto: CreateInstaltuberiaDto): Promise<Instaltuberia> {
    try {
      const nuevoInstaltuberia = this.nivelpisoRepository.create(
        createInstaltuberiaDto,
      );
      return await this.nivelpisoRepository.save(nuevoInstaltuberia);
    } catch (error) {

      throw new InternalServerErrorException({

        mensaje: `Error del Servidor. Revisar el metodo (createSemilla) de la ruta "instaltuberias"`,
        error: `${error}`,
      });
    }
  }
  async create(createInstaltuberiaDto: CreateInstaltuberiaDto): Promise<Instaltuberia> {
    try {
      const nuevoInstaltuberia = this.nivelpisoRepository.create(
        createInstaltuberiaDto,
      );
      return await this.nivelpisoRepository.save(nuevoInstaltuberia);
    } catch (error) {

      throw new InternalServerErrorException({

        mensaje: `Error del Servidor. Revisar el metodo (create) de la ruta "instaltuberias"`,
        error: `${error}`,
      });
    }
  }

  async findAll(): Promise<Instaltuberia[]> {
    try {
      const instaltuberias = await this.nivelpisoRepository.find();
      if (!instaltuberias || instaltuberias.length === 0) {
        throw new NotFoundException({

          message: `No se encontraron instaltuberias`,
        });
      }
      return instaltuberias;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "instaltuberias"`,
          error: `${error}`,
        });
      }
    }
  }
  async findAllPorRango(rango: number): Promise<Instaltuberia[]> {
    try {
      const instaltuberias = await this.nivelpisoRepository.createQueryBuilder('instaltuberia')
        .where(':rango BETWEEN instaltuberia.inicio AND instaltuberia.fin', { rango })
        .limit(5)
        .getMany();

      if (!instaltuberias || instaltuberias.length === 0) {
        throw new NotFoundException({
          message: `No se encontraron rangos: ${rango}`,
        });
      }
      return instaltuberias;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({
          message: `Error del Servidor. Revisar el metodo (findAllPorRango) de la ruta "instaltuberias"`,
          error: `${error}`,
        });
      }
    }
  }
  async findAllClear(): Promise<Instaltuberia[]> {
    try {
      const instaltuberias = await this.nivelpisoRepository.find();
      if (!instaltuberias || instaltuberias.length === 0) {
        throw new NotFoundException({
          message: `No se encontraron instaltuberias`,
        });
      }
      instaltuberias.forEach((horas) => delete horas.horas);
      return instaltuberias;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "instaltuberias"`,
          error: `${error}`,
        });
      }
    }
  }

  async findOne(id: number): Promise<Instaltuberia> {
    try {
      const instaltuberia = await this.nivelpisoRepository.findOneBy({ id });
      if (!instaltuberia) {
        throw new NotFoundException({

          message: `Instaltuberia con ID: ${id} no fue encontrada`,
        });
      }
      return instaltuberia;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (findOne) de la ruta "instaltuberias"`,
          error: `${error}`,
        });
      }
    }
  }

  async update(id: number, updateInstaltuberiaDto: UpdateInstaltuberiaDto): Promise<Instaltuberia> {
    try {
      const existeInstaltuberias = await this.findOne(id);
      const actualizarInstaltuberia = this.nivelpisoRepository.merge(existeInstaltuberias, updateInstaltuberiaDto);
      return await this.nivelpisoRepository.save(actualizarInstaltuberia);

    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (update) de la ruta "instaltuberias"`,
          error: `${error}`,
        });
      }
    }
  }

  async remove(id: number): Promise<any> {
    try {
      const instaltuberia = await this.findOne(id);
      await this.nivelpisoRepository.delete(id);
      return {
        success: true,
        message: `Se eliminó el Instaltuberia con ID: ${id}`,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (remove) de la ruta "instaltuberias"`,
          error: `${error}`,
        });
      }
    }
  }
}
