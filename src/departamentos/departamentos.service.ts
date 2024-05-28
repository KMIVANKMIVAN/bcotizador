import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDepartamentoDto } from './dto/create-departamento.dto';
import { UpdateDepartamentoDto } from './dto/update-departamento.dto';
import { Departamento } from './entities/departamento.entity';

@Injectable()
export class DepartamentosService {
  constructor(
    @InjectRepository(Departamento)
    private readonly departamentoRepository: Repository<Departamento>,
  ) { }

  async create(createDepartamentoDto: CreateDepartamentoDto) {
    try {
      const nuevoDepartamento = this.departamentoRepository.create(
        createDepartamentoDto,
      );
      return await this.departamentoRepository.save(nuevoDepartamento);
    } catch (error) {

      throw new InternalServerErrorException({

        mensaje: `Error del Servidor. Revisar el metodo (create) de la ruta "departamentos"`,
        error: `${error}`,
      });
    }
  }

  async findAll() {
    try {
      const departamentos = await this.departamentoRepository.find();
      if (!departamentos || departamentos.length === 0) {
        throw new NotFoundException({

          message: `No se encontraron Departamentos`,
        });
      }
      return departamentos;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "departamentos"`,
          error: `${error}`,
        });
      }
    }
  }

  async findOne(id: number) {
    try {
      const departamento = await this.departamentoRepository.findOneBy({ id });
      if (!departamento) {
        throw new NotFoundException({

          message: `Departamento con ID: ${id} no fue encontrada`,
        });
      }
      return departamento;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (findOne) de la ruta "departamentos"`,
          error: `${error}`,
        });
      }
    }
  }

  async update(id: number, updateDepartamentoDto: UpdateDepartamentoDto) {
    try {
      const existeDepartamento = await this.findOne(id);

      return await this.departamentoRepository.save(updateDepartamentoDto);

    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (update) de la ruta "departamentos"`,
          error: `${error}`,
        });
      }
    }
  }

  async remove(id: number) {
    try {
      const departamento = await this.findOne(id);
      await this.departamentoRepository.delete(id);
      return {
        success: true,
        message: `Se eliminó el Departamento con ID: ${id}`,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (remove) de la ruta "departamentos"`,
          error: `${error}`,
        });
      }
    }
  }
}
