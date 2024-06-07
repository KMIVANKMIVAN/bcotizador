import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTiposueloDto } from './dto/create-tiposuelo.dto';
import { UpdateTiposueloDto } from './dto/update-tiposuelo.dto';
import { Tiposuelo } from './entities/tiposuelo.entity';
import { capitalizeTextos } from 'src/utils/capitalizeTextos';
@Injectable()
export class TipossuelosService {
  constructor(
    @InjectRepository(Tiposuelo)
    private readonly tiposueloRepository: Repository<Tiposuelo>,
  ) { }

  async createSemilla(createTiposueloDto: CreateTiposueloDto): Promise<Tiposuelo> {
    try {
      createTiposueloDto.tiposuelo = capitalizeTextos(createTiposueloDto.tiposuelo);
      const nuevoTiposuelo = this.tiposueloRepository.create(
        createTiposueloDto,
      );
      return await this.tiposueloRepository.save(nuevoTiposuelo);
    } catch (error) {

      throw new InternalServerErrorException({

        mensaje: `Error del Servidor. Revisar el metodo (create) de la ruta "tipossuelos"`,
        error: `${error}`,
      });
    }
  }
  async create(createTiposueloDto: CreateTiposueloDto): Promise<Tiposuelo> {
    try {
      createTiposueloDto.valor = Number(createTiposueloDto.valor) * 1 / 100;
      createTiposueloDto.tiposuelo = capitalizeTextos(createTiposueloDto.tiposuelo);
      const nuevoTiposuelo = this.tiposueloRepository.create(
        createTiposueloDto,
      );
      return await this.tiposueloRepository.save(nuevoTiposuelo);
    } catch (error) {

      throw new InternalServerErrorException({

        mensaje: `Error del Servidor. Revisar el metodo (create) de la ruta "tipossuelos"`,
        error: `${error}`,
      });
    }
  }
  async findAllPorNombTipoSuelo(tiposuelo: string): Promise<Tiposuelo[]> {
    try {
      const tipossuelos = await this.tiposueloRepository.createQueryBuilder('tiposuelo')
        .where('LOWER(tiposuelo.tiposuelo) LIKE LOWER(:tiposuelo)', { tiposuelo: `%${tiposuelo.toLowerCase()}%` })
        .limit(5)
        .getMany();

      if (!tipossuelos || tipossuelos.length === 0) {
        throw new NotFoundException({
          message: `No se encontraron tipos suelos: ${tiposuelo}`,
        });
      }
      return tipossuelos;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({
          message: `Error del Servidor. Revisar el metodo (findAllPorNombTipoSuelo) de la ruta "tipossuelos"`,
          error: `${error}`,
        });
      }
    }
  }
  async findAll(): Promise<Tiposuelo[]> {
    try {
      const tipossuelos = await this.tiposueloRepository.find();
      if (!tipossuelos || tipossuelos.length === 0) {
        throw new NotFoundException({

          message: `No se encontraron tipossuelos`,
        });
      }
      return tipossuelos;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "tipossuelos"`,
          error: `${error}`,
        });
      }
    }
  }

  async findAllClear(): Promise<Tiposuelo[]> {
    try {
      const tipossuelos = await this.tiposueloRepository.find();
      if (!tipossuelos || tipossuelos.length === 0) {
        throw new NotFoundException({
          message: `No se encontraron tipossuelos`,
        });
      }
      tipossuelos.forEach((tiposuelo) => delete tiposuelo.valor);
      return tipossuelos;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "tipossuelos"`,
          error: `${error}`,
        });
      }
    }
  }

  async findOne(id: number): Promise<Tiposuelo> {
    try {
      const tiposuelo = await this.tiposueloRepository.findOneBy({ id });
      if (!tiposuelo) {
        throw new NotFoundException({

          message: `Tiposuelo con ID: ${id} no fue encontrada`,
        });
      }
      return tiposuelo;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (findOne) de la ruta "tipossuelos"`,
          error: `${error}`,
        });
      }
    }
  }

  async update(id: number, updateTiposueloDto: UpdateTiposueloDto): Promise<Tiposuelo> {
    try {
      const existeTiposuelo = await this.findOne(id);
      updateTiposueloDto.tiposuelo = capitalizeTextos(updateTiposueloDto.tiposuelo);
      const actualizarTiposuelo = this.tiposueloRepository.merge(existeTiposuelo, updateTiposueloDto);
      return await this.tiposueloRepository.save(actualizarTiposuelo);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({
          message: `Error del Servidor. Revisar el metodo (update) de la ruta "tipossuelos"`,
          error: `${error}`,
        });
      }
    }
  }

  async remove(id: number): Promise<any> {
    try {
      const tiposuelo = await this.findOne(id);
      await this.tiposueloRepository.delete(id);
      return {
        success: true,
        message: `Se eliminó el Tiposuelo con ID: ${id}`,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (remove) de la ruta "tipossuelos"`,
          error: `${error}`,
        });
      }
    }
  }
}
