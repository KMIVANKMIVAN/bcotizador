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
import { capitalizeTextos } from 'src/utils/capitalizeTextos';
@Injectable()
export class TiposparedesService {
  constructor(
    @InjectRepository(Tipopared)
    private readonly tipoparedRepository: Repository<Tipopared>,
  ) { }

  async createSemilla(createTipoparedDto: CreateTipoparedDto): Promise<Tipopared> {
    try {
      createTipoparedDto.tipopared = capitalizeTextos(createTipoparedDto.tipopared);
      const nuevoTipopared = this.tipoparedRepository.create(
        createTipoparedDto,
      );
      return await this.tipoparedRepository.save(nuevoTipopared);
    } catch (error) {

      throw new InternalServerErrorException({

        mensaje: `Error del Servidor. Revisar el metodo (create) de la ruta "tiposparedes"`,
        error: `${error}`,
      });
    }
  }
  async create(createTipoparedDto: CreateTipoparedDto): Promise<Tipopared> {
    try {
      createTipoparedDto.valor = Number(createTipoparedDto.valor) * 1 / 100;
      createTipoparedDto.tipopared = capitalizeTextos(createTipoparedDto.tipopared);
      const nuevoTipopared = this.tipoparedRepository.create(
        createTipoparedDto,
      );
      return await this.tipoparedRepository.save(nuevoTipopared);
    } catch (error) {

      throw new InternalServerErrorException({

        mensaje: `Error del Servidor. Revisar el metodo (create) de la ruta "tiposparedes"`,
        error: `${error}`,
      });
    }
  }
  async findAllPorNombTipoPared(tipopared: string): Promise<Tipopared[]> {
    try {
      const tiposparedes = await this.tipoparedRepository.createQueryBuilder('tipopared')
        .where('LOWER(tipopared.tipopared) LIKE LOWER(:tipopared)', { tipopared: `%${tipopared.toLowerCase()}%` })
        .limit(5)
        .getMany();

      if (!tiposparedes || tiposparedes.length === 0) {
        throw new NotFoundException({
          message: `No se encontraron tipos paredes: ${tipopared}`,
        });
      }
      return tiposparedes;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({
          message: `Error del Servidor. Revisar el metodo (findAllPorNombTipoPared) de la ruta "tiposparedes"`,
          error: `${error}`,
        });
      }
    }
  }
  async findAll(): Promise<Tipopared[]> {
    try {
      const tiposparedes = await this.tipoparedRepository.find();
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

  async findAllClear(): Promise<Tipopared[]> {
    try {
      const tiposparedes = await this.tipoparedRepository.find();
      if (!tiposparedes || tiposparedes.length === 0) {
        throw new NotFoundException({

          message: `No se encontraron tiposparedes`,
        });
      }
      tiposparedes.forEach((tipopared) => delete tipopared.valor);
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
      const tipopared = await this.tipoparedRepository.findOneBy({ id });
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
      updateTipoparedDto.tipopared = capitalizeTextos(updateTipoparedDto.tipopared);
      const actualizarTipopared = this.tipoparedRepository.merge(existeTipopared, updateTipoparedDto);
      return await this.tipoparedRepository.save(actualizarTipopared);

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
      await this.tipoparedRepository.delete(id);
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
