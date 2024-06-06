import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTipovidrioDto } from './dto/create-tipovidrio.dto';
import { UpdateTipovidrioDto } from './dto/update-tipovidrio.dto';
import { Tipovidrio } from './entities/tipovidrio.entity';
import { capitalizeTextos } from 'src/utils/capitalizeTextos';
@Injectable()
export class TiposvidriosService {
  constructor(
    @InjectRepository(Tipovidrio)
    private readonly tipovidrioRepository: Repository<Tipovidrio>,
  ) { }

  async createSemilla(createTipovidrioDto: CreateTipovidrioDto): Promise<Tipovidrio> {
    try {
      createTipovidrioDto.tipovidrio = capitalizeTextos(createTipovidrioDto.tipovidrio);
      const nuevoTipovidrio = this.tipovidrioRepository.create(
        createTipovidrioDto,
      );
      return await this.tipovidrioRepository.save(nuevoTipovidrio);
    } catch (error) {
      throw new InternalServerErrorException({
        mensaje: `Error del Servidor. Revisar el metodo (create) de la ruta "tiposvidrios"`,
        error: `${error}`,
      });
    }
  }
  async create(createTipovidrioDto: CreateTipovidrioDto): Promise<Tipovidrio> {
    try {
      createTipovidrioDto.valor = Number(createTipovidrioDto.valor) * 1 / 100;
      createTipovidrioDto.tipovidrio = capitalizeTextos(createTipovidrioDto.tipovidrio);
      const nuevoTipovidrio = this.tipovidrioRepository.create(
        createTipovidrioDto,
      );
      return await this.tipovidrioRepository.save(nuevoTipovidrio);
    } catch (error) {

      throw new InternalServerErrorException({

        mensaje: `Error del Servidor. Revisar el metodo (create) de la ruta "tiposvidrios"`,
        error: `${error}`,
      });
    }
  }

  async findAll(): Promise<Tipovidrio[]> {
    try {
      const tiposvidrios = await this.tipovidrioRepository.find();
      if (!tiposvidrios || tiposvidrios.length === 0) {
        throw new NotFoundException({

          message: `No se encontraron tiposvidrios`,
        });
      }
      return tiposvidrios;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "tiposvidrios"`,
          error: `${error}`,
        });
      }
    }
  }

  async findAllClear(): Promise<Tipovidrio[]> {
    try {
      const tiposvidrios = await this.tipovidrioRepository.find();
      if (!tiposvidrios || tiposvidrios.length === 0) {
        throw new NotFoundException({

          message: `No se encontraron tiposvidrios`,
        });
      }
      tiposvidrios.forEach((tipovidrio) => delete tipovidrio.valor);
      return tiposvidrios;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "tiposvidrios"`,
          error: `${error}`,
        });
      }
    }
  }

  async findOne(id: number): Promise<Tipovidrio> {
    try {
      const tipovidrio = await this.tipovidrioRepository.findOneBy({ id });
      if (!tipovidrio) {
        throw new NotFoundException({

          message: `Tipovidrio con ID: ${id} no fue encontrada`,
        });
      }
      return tipovidrio;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (findOne) de la ruta "tiposvidrios"`,
          error: `${error}`,
        });
      }
    }
  }

  async update(id: number, updateTipovidrioDto: UpdateTipovidrioDto): Promise<Tipovidrio> {
    try {
      const existeTipovidrio = await this.findOne(id);
      updateTipovidrioDto.tipovidrio = capitalizeTextos(updateTipovidrioDto.tipovidrio);
      const actualizarTipovidrio = this.tipovidrioRepository.merge(existeTipovidrio, updateTipovidrioDto);
      return await this.tipovidrioRepository.save(actualizarTipovidrio);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (update) de la ruta "tiposvidrios"`,
          error: `${error}`,
        });
      }
    }
  }

  async remove(id: number): Promise<any> {
    try {
      const tipovidrio = await this.findOne(id);
      await this.tipovidrioRepository.delete(id);
      return {
        success: true,
        message: `Se eliminó el Tipovidrio con ID: ${id}`,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (remove) de la ruta "tiposvidrios"`,
          error: `${error}`,
        });
      }
    }
  }
}
