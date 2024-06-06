import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTipoparedDto } from './dto/create-tipopared.dto';
import { UpdateTipoparedDto } from './dto/update-tipopared.dto';
import { Tipopared } from './entities/tipopared.entity';

@Injectable()
export class TiposparedesService {
  constructor(
    @InjectRepository(Tipopared)
    private readonly nivelpisoRepository: Repository<Tipopared>,
  ) { }

  async createSemilla(createTipoparedDto: CreateTipoparedDto): Promise<Tipopared> {
    try {
      const nuevoTipopared = this.nivelpisoRepository.create(
        createTipoparedDto,
      );
      return await this.nivelpisoRepository.save(nuevoTipopared);
    } catch (error) {

      throw new InternalServerErrorException({

        mensaje: `Error del Servidor. Revisar el metodo (create) de la ruta "tiposparedes"`,
        error: `${error}`,
      });
    }
  }
  async create(createTipoparedDto: CreateTipoparedDto): Promise<Tipopared> {
    try {
      createTipoparedDto.valor = Number(createTipoparedDto.valor) * 1/100;
      const nuevoTipopared = this.nivelpisoRepository.create(
        createTipoparedDto,
      );
      return await this.nivelpisoRepository.save(nuevoTipopared);
    } catch (error) {

      throw new InternalServerErrorException({

        mensaje: `Error del Servidor. Revisar el metodo (create) de la ruta "tiposparedes"`,
        error: `${error}`,
      });
    }
  }

  async findAll(): Promise<Tipopared[]> {
    try {
      const tiposparedes = await this.nivelpisoRepository.find();
      if (!tiposparedes || tiposparedes.length === 0) {
        throw new NotFoundException({

          message: `No se encontraron tiposparedes`,
        });
      }
      return tiposparedes;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "tiposparedes"`,
          error: `${error}`,
        });
      }
    }
  }

  async findOne(id: number): Promise<Tipopared> {
    try {
      const tipopared = await this.nivelpisoRepository.findOneBy({ id });
      if (!tipopared) {
        throw new NotFoundException({

          message: `Tipopared con ID: ${id} no fue encontrada`,
        });
      }
      return tipopared;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (findOne) de la ruta "tiposparedes"`,
          error: `${error}`,
        });
      }
    }
  }

  async update(id: number, updateTipoparedDto: UpdateTipoparedDto): Promise<Tipopared> {
    try {
      const existeTipopared = await this.findOne(id);
      const actualizarTipopared = this.nivelpisoRepository.merge(existeTipopared, updateTipoparedDto);

      return await this.nivelpisoRepository.save(actualizarTipopared);

    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (update) de la ruta "tiposparedes"`,
          error: `${error}`,
        });
      }
    }
  }

  async remove(id: number): Promise<any> {
    try {
      const tipopared = await this.findOne(id);
      await this.nivelpisoRepository.delete(id);
      return {
        success: true,
        message: `Se eliminó el Tipopared con ID: ${id}`,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (remove) de la ruta "tiposparedes"`,
          error: `${error}`,
        });
      }
    }
  }
}
