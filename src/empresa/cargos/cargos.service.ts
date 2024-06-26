import {
  NotFoundException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCargoDto } from './dto/create-cargo.dto';
import { UpdateCargoDto } from './dto/update-cargo.dto';

import { Cargo } from './entities/cargo.entity';
import { UnidadesService } from '../unidades/unidades.service';
import { capitalizeTextos } from 'src/utils/capitalizeTextos';
@Injectable()
export class CargosService {
  constructor(
    @InjectRepository(Cargo)
    private readonly cargoRepository: Repository<Cargo>,

    private readonly unidadesService: UnidadesService,
  ) { }

  async create(createCargoDto: CreateCargoDto): Promise<Cargo> {
    try {
      const buscarUnidades = await this.unidadesService.findOne(createCargoDto.unidad_id)
      createCargoDto.cargo = capitalizeTextos(createCargoDto.cargo);
      createCargoDto.descripcion = capitalizeTextos(createCargoDto.descripcion);
      const { unidad_id, ...cargoDatos } = createCargoDto;

      const nuevoCargo = this.cargoRepository.create({
        ...cargoDatos,
        unidad: buscarUnidades,
      });

      return await this.cargoRepository.save(nuevoCargo);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({
          statusCode: 500,
          message: `Error del Servidor. Revisar el metodo (create) de la ruta "cargos"`,
          error: `${error}`,
        });
      }
    }
  }
  async findAllPorNombCargo(cargo: string): Promise<Cargo[]> {
    try {
      const cargos = await this.cargoRepository.createQueryBuilder('cargo')
        .where('LOWER(cargo.cargo) LIKE LOWER(:cargo)', { cargo: `%${cargo.toLowerCase()}%` })
        .limit(5)
        .getMany();

      if (!cargos || cargos.length === 0) {
        throw new NotFoundException({
          message: `No se encontraron cargos: ${cargo}`,
        });
      }
      return cargos;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({
          message: `Error del Servidor. Revisar el metodo (findAllPorNombCargo) de la ruta "cargos"`,
          error: `${error}`,
        });
      }
    }
  }
  async findAll(): Promise<Cargo[]> {
    try {
      const cargos = await this.cargoRepository.find({ relations: ['unidad'] });
      if (!cargos || cargos.length === 0) {
        throw new NotFoundException({

          message: `No se encontraron Cargos`,
        });
      }
      return cargos;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({
          statusCode: 500,
          message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "cargos"`,
          error: `${error}`,
        });
      }
    }
  }

  async findOne(id: number): Promise<Cargo> {
    try {
      const cargo = await this.cargoRepository.findOne({
        where: { id },
        relations: ['unidad'],
      });
      if (!cargo) {
        throw new NotFoundException({

          message: `Cargo con ID: ${id} no fue encontrada`,
        });
      }
      return cargo;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({
          statusCode: 500,
          message: `Error del Servidor. Revisar el metodo (findOne) de la ruta "cargos"`,
          error: `${error}`,
        });
      }
    }
  }

  async update(id: number, updateCargoDto: UpdateCargoDto)
    : Promise<Cargo> {
    try {
      const existeCargo = await this.findOne(id);
      updateCargoDto.cargo = capitalizeTextos(updateCargoDto.cargo);
      updateCargoDto.descripcion = capitalizeTextos(updateCargoDto.descripcion);
      const buscarUnidad = await this.unidadesService.findOne(updateCargoDto.unidad_id);

      const actualizarCargo = await this.cargoRepository.preload({
        id,
        ...updateCargoDto,
      });
      actualizarCargo.unidad = buscarUnidad

      return await this.cargoRepository.save(actualizarCargo);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({
          statusCode: 500,
          message: `Error del Servidor. Revisar el metodo (update) de la ruta "cargos"`,
          error: `${error}`,
        });
      }
    }
  }

  async remove(id: number): Promise<any> {
    try {
      const unidad = await this.findOne(id);
      await this.cargoRepository.delete(id);
      return {
        success: true,
        message: `Se eliminó el Cargo con ID: ${id}`,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({
          statusCode: 500,
          message: `Error del Servidor. Revisar el metodo (remove) de la ruta "cargos"`,
          error: `${error}`,
        });
      }
    }
  }
}
