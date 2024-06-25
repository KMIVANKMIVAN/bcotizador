import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInstalradiatoalleroDto } from './dto/create-instalradiatoallero.dto';
import { UpdateInstalradiatoalleroDto } from './dto/update-instalradiatoallero.dto';
import { Instalradiatoallero } from './entities/instalradiatoallero.entity';

@Injectable()
export class InstalradiatoallerosService {
  constructor(
    @InjectRepository(Instalradiatoallero)
    private readonly nivelpisoRepository: Repository<Instalradiatoallero>,
  ) { }

  async createSemilla(createInstalradiatoalleroDto: CreateInstalradiatoalleroDto): Promise<Instalradiatoallero> {
    try {
      console.log("createInstalradiatoalleroDto",createInstalradiatoalleroDto);

      const nuevoInstalradiatoallero = this.nivelpisoRepository.create(
        createInstalradiatoalleroDto,
      );
      return await this.nivelpisoRepository.save(nuevoInstalradiatoallero);
    } catch (error) {

      throw new InternalServerErrorException({

        mensaje: `Error del Servidor. Revisar el metodo (createSemilla) de la ruta "instalradiatoalleros"`,
        error: `${error}`,
      });
    }
  }
  async create(createInstalradiatoalleroDto: CreateInstalradiatoalleroDto): Promise<Instalradiatoallero> {
    try {
      const nuevoInstalradiatoallero = this.nivelpisoRepository.create(
        createInstalradiatoalleroDto,
      );
      return await this.nivelpisoRepository.save(nuevoInstalradiatoallero);
    } catch (error) {

      throw new InternalServerErrorException({

        mensaje: `Error del Servidor. Revisar el metodo (create) de la ruta "instalradiatoalleros"`,
        error: `${error}`,
      });
    }
  }

  async findAll(): Promise<Instalradiatoallero[]> {
    try {
      const instalradiatoalleros = await this.nivelpisoRepository.find();
      if (!instalradiatoalleros || instalradiatoalleros.length === 0) {
        throw new NotFoundException({

          message: `No se encontraron instalradiatoalleros`,
        });
      }
      return instalradiatoalleros;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "instalradiatoalleros"`,
          error: `${error}`,
        });
      }
    }
  }
  async findAllPorNroradiador(nroradiador: number): Promise<Instalradiatoallero[]> {
    try {
      const instalradiatoalleros = await this.nivelpisoRepository.createQueryBuilder('nroradiador')
        .where('LOWER(nroradiador.nroradiador) LIKE LOWER(:nroradiador)', { nroradiador: `%${nroradiador}%` })
        .limit(5)
        .getMany();

      if (!instalradiatoalleros || instalradiatoalleros.length === 0) {
        throw new NotFoundException({
          message: `No se encontraron nroradiadors: ${nroradiador}`,
        });
      }
      return instalradiatoalleros;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({
          message: `Error del Servidor. Revisar el metodo (findAllPorNroradiador) de la ruta "instalradiatoalleros"`,
          error: `${error}`,
        });
      }
    }
  }
  async findAllClear(): Promise<Instalradiatoallero[]> {
    try {
      const instalradiatoalleros = await this.nivelpisoRepository.find();
      if (!instalradiatoalleros || instalradiatoalleros.length === 0) {
        throw new NotFoundException({
          message: `No se encontraron instalradiatoalleros`,
        });
      }
      instalradiatoalleros.forEach((horas) => delete horas.horas);
      return instalradiatoalleros;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "instalradiatoalleros"`,
          error: `${error}`,
        });
      }
    }
  }

  async findOne(id: number): Promise<Instalradiatoallero> {
    try {
      const instalradiatoallero = await this.nivelpisoRepository.findOneBy({ id });
      if (!instalradiatoallero) {
        throw new NotFoundException({

          message: `Instalradiatoallero con ID: ${id} no fue encontrada`,
        });
      }
      return instalradiatoallero;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (findOne) de la ruta "instalradiatoalleros"`,
          error: `${error}`,
        });
      }
    }
  }

  async update(id: number, updateInstalradiatoalleroDto: UpdateInstalradiatoalleroDto): Promise<Instalradiatoallero> {
    try {
      const existeInstaltuberias = await this.findOne(id);
      const actualizarInstalradiatoallero = this.nivelpisoRepository.merge(existeInstaltuberias, updateInstalradiatoalleroDto);
      return await this.nivelpisoRepository.save(actualizarInstalradiatoallero);

    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (update) de la ruta "instalradiatoalleros"`,
          error: `${error}`,
        });
      }
    }
  }

  async remove(id: number): Promise<any> {
    try {
      const instalradiatoallero = await this.findOne(id);
      await this.nivelpisoRepository.delete(id);
      return {
        success: true,
        message: `Se eliminó el Instalradiatoallero con ID: ${id}`,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (remove) de la ruta "instalradiatoalleros"`,
          error: `${error}`,
        });
      }
    }
  }
}
