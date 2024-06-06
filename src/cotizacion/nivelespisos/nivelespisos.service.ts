import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNivelpisoDto } from './dto/create-nivelpiso.dto';
import { UpdateNivelpisoDto } from './dto/update-nivelpiso.dto';
import { Nivelpiso } from './entities/nivelpiso.entity';

@Injectable()
export class NivelespisosService {
  constructor(
    @InjectRepository(Nivelpiso)
    private readonly nivelpisoRepository: Repository<Nivelpiso>,
  ) { }

  async createSemilla(createNivelpisoDto: CreateNivelpisoDto): Promise<Nivelpiso> {
    try {
      const nuevoNivelpiso = this.nivelpisoRepository.create(
        createNivelpisoDto,
      );
      return await this.nivelpisoRepository.save(nuevoNivelpiso);
    } catch (error) {

      throw new InternalServerErrorException({

        mensaje: `Error del Servidor. Revisar el metodo (create) de la ruta "nivelespisos"`,
        error: `${error}`,
      });
    }
  }
  async create(createNivelpisoDto: CreateNivelpisoDto): Promise<Nivelpiso> {
    try {
      createNivelpisoDto.valor = Number(createNivelpisoDto.valor) * 1 / 100;
      const nuevoNivelpiso = this.nivelpisoRepository.create(
        createNivelpisoDto,
      );
      return await this.nivelpisoRepository.save(nuevoNivelpiso);
    } catch (error) {

      throw new InternalServerErrorException({

        mensaje: `Error del Servidor. Revisar el metodo (create) de la ruta "nivelespisos"`,
        error: `${error}`,
      });
    }
  }

  async findAll(): Promise<Nivelpiso[]> {
    try {
      const nivelespisos = await this.nivelpisoRepository.find();
      if (!nivelespisos || nivelespisos.length === 0) {
        throw new NotFoundException({

          message: `No se encontraron nivelespisos`,
        });
      }
      return nivelespisos;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "nivelespisos"`,
          error: `${error}`,
        });
      }
    }
  }

  async findOne(id: number): Promise<Nivelpiso> {
    try {
      const nivelpiso = await this.nivelpisoRepository.findOneBy({ id });
      if (!nivelpiso) {
        throw new NotFoundException({

          message: `Nivelpiso con ID: ${id} no fue encontrada`,
        });
      }
      return nivelpiso;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (findOne) de la ruta "nivelespisos"`,
          error: `${error}`,
        });
      }
    }
  }

  async update(id: number, updateNivelpisoDto: UpdateNivelpisoDto): Promise<Nivelpiso> {
    try {
      const existeNivelpiso = await this.findOne(id);
      const actualizarNivelpiso = this.nivelpisoRepository.merge(existeNivelpiso, updateNivelpisoDto);

      return await this.nivelpisoRepository.save(actualizarNivelpiso);

    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (update) de la ruta "nivelespisos"`,
          error: `${error}`,
        });
      }
    }
  }

  async remove(id: number): Promise<any> {
    try {
      const nivelpiso = await this.findOne(id);
      await this.nivelpisoRepository.delete(id);
      return {
        success: true,
        message: `Se eliminó el Nivelpiso con ID: ${id}`,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (remove) de la ruta "nivelespisos"`,
          error: `${error}`,
        });
      }
    }
  }
}
