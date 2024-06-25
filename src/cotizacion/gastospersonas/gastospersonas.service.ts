import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGastopersonaDto } from './dto/create-gastopersona.dto';
import { UpdateGastopersonaDto } from './dto/update-gastopersona.dto';
import { Gastopersona } from './entities/gastopersona.entity';
import { capitalizeTextos } from 'src/utils/capitalizeTextos';

@Injectable()
export class GastospersonasService {
  constructor(
    @InjectRepository(Gastopersona)
    private readonly gastopersonaRepository: Repository<Gastopersona>,
  ) { }

  async createSemilla(createGastopersonaDto: CreateGastopersonaDto): Promise<Gastopersona> {
    try {
      const nuevoGastospersona = this.gastopersonaRepository.create(
        createGastopersonaDto,
      );
      return await this.gastopersonaRepository.save(nuevoGastospersona);
    } catch (error) {

      throw new InternalServerErrorException({

        mensaje: `Error del Servidor. Revisar el metodo (createSemilla) de la ruta "gastospersonas"`,
        error: `${error}`,
      });
    }
  }
  async create(createGastopersonaDto: CreateGastopersonaDto): Promise<Gastopersona> {
    try {
      const nuevoGastospersona = this.gastopersonaRepository.create(
        createGastopersonaDto,
      );
      return await this.gastopersonaRepository.save(nuevoGastospersona);
    } catch (error) {

      throw new InternalServerErrorException({

        mensaje: `Error del Servidor. Revisar el metodo (create) de la ruta "gastospersonas"`,
        error: `${error}`,
      });
    }
  }

  async findAll(): Promise<Gastopersona[]> {
    try {
      const gastospersonas = await this.gastopersonaRepository.find();
      if (!gastospersonas || gastospersonas.length === 0) {
        throw new NotFoundException({

          message: `No se encontraron gastospersonas`,
        });
      }
      return gastospersonas;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "gastospersonas"`,
          error: `${error}`,
        });
      }
    }
  }
  async findAllPorNroPersona(nropersona: number): Promise<Gastopersona[]> {
    try {
      const gastospersonas = await this.gastopersonaRepository.createQueryBuilder('nropersona')
        .where({ nropersona: nropersona })
        .limit(5)
        .getMany();

      if (!gastospersonas || gastospersonas.length === 0) {
        throw new NotFoundException({
          message: `No se encontraron numero de persona: ${nropersona}`,
        });
      }
      return gastospersonas;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({
          message: `Error del Servidor. Revisar el metodo (findAllPorNroPersona) de la ruta "gastospersonas"`,
          error: `${error}`,
        });
      }
    }
  }
  async findAllClear(): Promise<Gastopersona[]> {
    try {
      const gastospersonas = await this.gastopersonaRepository.find();
      if (!gastospersonas || gastospersonas.length === 0) {
        throw new NotFoundException({
          message: `No se encontraron gastospersonas`,
        });
      }
      gastospersonas.forEach((gastopersona) => delete gastopersona.alimento);
      gastospersonas.forEach((gastopersona) => delete gastopersona.alojamiento);
      gastospersonas.forEach((gastopersona) => delete gastopersona.extras);
      return gastospersonas;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "gastospersonas"`,
          error: `${error}`,
        });
      }
    }
  }

  async findOne(id: number): Promise<Gastopersona> {
    try {
      const gastopersona = await this.gastopersonaRepository.findOneBy({ id });
      if (!gastopersona) {
        throw new NotFoundException({

          message: `Gastopersona con ID: ${id} no fue encontrada`,
        });
      }
      return gastopersona;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (findOne) de la ruta "gastospersonas"`,
          error: `${error}`,
        });
      }
    }
  }

  async update(id: number, updateGastopersonaDto: UpdateGastopersonaDto): Promise<Gastopersona> {
    try {
      const existeGastospersona = await this.findOne(id);
      const actualizarGastospersona = this.gastopersonaRepository.merge(existeGastospersona, updateGastopersonaDto);
      return await this.gastopersonaRepository.save(actualizarGastospersona);

    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (update) de la ruta "gastospersonas"`,
          error: `${error}`,
        });
      }
    }
  }

  async remove(id: number): Promise<any> {
    try {
      const gastopersona = await this.findOne(id);
      await this.gastopersonaRepository.delete(id);
      return {
        success: true,
        message: `Se eliminó el Gastopersona con ID: ${id}`,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (remove) de la ruta "gastospersonas"`,
          error: `${error}`,
        });
      }
    }
  }
}
