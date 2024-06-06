import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTipotechoDto } from './dto/create-tipotecho.dto';
import { UpdateTipotechoDto } from './dto/update-tipotecho.dto';
import { Tipotecho } from './entities/tipotecho.entity';
import { capitalizeTextos } from 'src/utils/capitalizeTextos';
@Injectable()
export class TipostechosService {
  constructor(
    @InjectRepository(Tipotecho)
    private readonly tipotechoRepository: Repository<Tipotecho>,
  ) { }

  async createSemilla(createTipotechoDto: CreateTipotechoDto): Promise<Tipotecho> {
    try {
      createTipotechoDto.tipotecho = capitalizeTextos(createTipotechoDto.tipotecho);
      const nuevoTipotecho = this.tipotechoRepository.create(
        createTipotechoDto,
      );
      return await this.tipotechoRepository.save(nuevoTipotecho);
    } catch (error) {

      throw new InternalServerErrorException({

        mensaje: `Error del Servidor. Revisar el metodo (create) de la ruta "tipostechos"`,
        error: `${error}`,
      });
    }
  }
  async create(createTipotechoDto: CreateTipotechoDto): Promise<Tipotecho> {
    try {
      createTipotechoDto.valor = Number(createTipotechoDto.valor) * 1 / 100;
      createTipotechoDto.tipotecho = capitalizeTextos(createTipotechoDto.tipotecho);
      const nuevoTipotecho = this.tipotechoRepository.create(
        createTipotechoDto,
      );
      return await this.tipotechoRepository.save(nuevoTipotecho);
    } catch (error) {

      throw new InternalServerErrorException({

        mensaje: `Error del Servidor. Revisar el metodo (create) de la ruta "tipostechos"`,
        error: `${error}`,
      });
    }
  }

  async findAll(): Promise<Tipotecho[]> {
    try {
      const tipostechos = await this.tipotechoRepository.find();
      if (!tipostechos || tipostechos.length === 0) {
        throw new NotFoundException({

          message: `No se encontraron tipostechos`,
        });
      }
      return tipostechos;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "tipostechos"`,
          error: `${error}`,
        });
      }
    }
  }

  async findAllClear(): Promise<Tipotecho[]> {
    try {
      const tipostechos = await this.tipotechoRepository.find();
      if (!tipostechos || tipostechos.length === 0) {
        throw new NotFoundException({
          message: `No se encontraron tipostechos`,
        });
      }
      tipostechos.forEach((tipotecho) => delete tipotecho.valor);
      return tipostechos;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({
          message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "tipostechos"`,
          error: `${error}`,
        });
      }
    }
  }

  async findOne(id: number): Promise<Tipotecho> {
    try {
      const tipotecho = await this.tipotechoRepository.findOneBy({ id });
      if (!tipotecho) {
        throw new NotFoundException({

          message: `Tipotecho con ID: ${id} no fue encontrada`,
        });
      }
      return tipotecho;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (findOne) de la ruta "tipostechos"`,
          error: `${error}`,
        });
      }
    }
  }

  async update(id: number, updateTipotechoDto: UpdateTipotechoDto): Promise<Tipotecho> {
    try {
      const existeTipotecho = await this.findOne(id);
      updateTipotechoDto.tipotecho = capitalizeTextos(updateTipotechoDto.tipotecho);
      const actualizarTipotecho = this.tipotechoRepository.merge(existeTipotecho, updateTipotechoDto);
      return await this.tipotechoRepository.save(actualizarTipotecho);

    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (update) de la ruta "tipostechos"`,
          error: `${error}`,
        });
      }
    }
  }

  async remove(id: number): Promise<any> {
    try {
      const tipotecho = await this.findOne(id);
      await this.tipotechoRepository.delete(id);
      return {
        success: true,
        message: `Se eliminó el Tipotecho con ID: ${id}`,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (remove) de la ruta "tipostechos"`,
          error: `${error}`,
        });
      }
    }
  }
}
