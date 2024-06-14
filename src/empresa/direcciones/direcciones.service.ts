import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDireccioneDto } from './dto/create-direccion.dto';
import { UpdateDireccioneDto } from './dto/update-direccion.dto';
import { Direccion } from './entities/direccion.entity';

import { EmpresasService } from '../empresas/empresas.service';
import { capitalizeTextos } from 'src/utils/capitalizeTextos';
@Injectable()
export class DireccionesService {
  constructor(
    @InjectRepository(Direccion)
    private readonly direccioneRepository: Repository<Direccion>,

    private readonly empresasService: EmpresasService, // Inyectar EmpresasService
  ) { }

  async create(createDireccioneDto: CreateDireccioneDto): Promise<Direccion> {
    try {
      const buscarEmpresa = await this.empresasService.findOne(createDireccioneDto.empresa_id)
      createDireccioneDto.direccion = capitalizeTextos(createDireccioneDto.direccion);
      createDireccioneDto.descripcion = capitalizeTextos(createDireccioneDto.descripcion);
      const { empresa_id, ...direccionDatos } = createDireccioneDto; // propagar los datos de direccion

      const nuevaDieccion = this.direccioneRepository.create({
        ...direccionDatos,
        empresa: buscarEmpresa, // Asigna empresa a la direccion
      });

      return await this.direccioneRepository.save(nuevaDieccion);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (create) de la ruta "direcciones"`,
          error: `${error}`,
        });
      }
    }
  }
  async findAllPorNombDireccion(direccion: string): Promise<Direccion[]> {
    try {
      const direcciones = await this.direccioneRepository.createQueryBuilder('direccion')
        .where('LOWER(direccion.direccion) LIKE LOWER(:direccion)', { direccion: `%${direccion.toLowerCase()}%` })
        .limit(5)
        .getMany();

      if (!direcciones || direcciones.length === 0) {
        throw new NotFoundException({
          message: `No se encontraron direcciones: ${direccion}`,
        });
      }
      return direcciones;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({
          message: `Error del Servidor. Revisar el metodo (findAllPorNombDireccion) de la ruta "direcciones"`,
          error: `${error}`,
        });
      }
    }
  }
  async findAll(): Promise<Direccion[]> {
    try {
      const direcciones = await this.direccioneRepository.find({ relations: ['empresa'] });
      if (!direcciones || direcciones.length === 0) {
        throw new NotFoundException({

          message: `No se encontraron Direcciones`,
        });
      }
      return direcciones;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "direcciones"`,
          error: `${error}`,
        });
      }
    }
  }

  async findOne(id: number): Promise<Direccion> {
    try {
      const direccion = await this.direccioneRepository.findOne({
        where: { id },
        relations: ['empresa'],
      });
      if (!direccion) {
        throw new NotFoundException({

          message: `Direccion con ID: ${id} no fue encontrada`,
        });
      }
      return direccion;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (findOne) de la ruta "direcciones"`,
          error: `${error}`,
        });
      }
    }
  }

  async update(id: number, updateDireccioneDto: UpdateDireccioneDto)
    : Promise<Direccion> {
    try {
      const existeDireccion = await this.findOne(id);
      updateDireccioneDto.direccion = capitalizeTextos(updateDireccioneDto.direccion);
      updateDireccioneDto.descripcion = capitalizeTextos(updateDireccioneDto.descripcion);
      const buscarEmpresa = await this.empresasService.findOne(updateDireccioneDto.empresa_id);

      const actualizarDireccion = await this.direccioneRepository.preload({
        id,
        ...updateDireccioneDto,
      });
      actualizarDireccion.empresa = buscarEmpresa

      return await this.direccioneRepository.save(actualizarDireccion);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (update) de la ruta "direcciones"`,
          error: `${error}`,
        });
      }
    }
  }

  async remove(id: number): Promise<any> {
    try {
      const direccion = await this.findOne(id);
      await this.direccioneRepository.delete(id);
      return {
        success: true,
        message: `Se eliminó el Direccion con ID: ${id}`,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (remove) de la ruta "direcciones"`,
          error: `${error}`,
        });
      }
    }
  }
}