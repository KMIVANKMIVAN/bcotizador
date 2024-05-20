import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDireccioneDto } from './dto/create-direccione.dto';
import { UpdateDireccioneDto } from './dto/update-direccione.dto';
import { Direccion } from './entities/direccione.entity';
import { Empresa } from '../empresas/entities/empresa.entity';

import { EmpresasService } from '../empresas/empresas.service';

@Injectable()
export class DireccionesService {
  constructor(
    @InjectRepository(Direccion)
    private readonly direccioneRepository: Repository<Direccion>,
    @InjectRepository(Empresa)
    private readonly empresaRepository: Repository<Empresa>,

    private readonly empresasService: EmpresasService, // Inyectar EmpresasService
  ) { }

  async create(createDireccioneDto: CreateDireccioneDto): Promise<Direccion> {
    try {
      // Verificar si la empresa asociada existe
      /* const buscarEmpresa = await this.empresaRepository.findOneBy({ id: createDireccioneDto.empresa_id });
      if (!buscarEmpresa) {
        throw new BadRequestException({
          statusCode: 404,
          message: `Empresa con ID: ${createDireccioneDto.empresa_id} no fue encontrada`,
        });
      } */
      const buscarEmpresa = await this.empresasService.findOne(createDireccioneDto.empresa_id)

      const { empresa_id, ...direccionDatos } = createDireccioneDto; // propagar los datos de direccion

      const nuevaDieccion = this.direccioneRepository.create({
        ...direccionDatos,
        empresa: buscarEmpresa, // Asigna empresa a la direccion
      });

      return await this.direccioneRepository.save(nuevaDieccion);
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      } else {
        throw new InternalServerErrorException({
          statusCode: 500,
          message: `Error del Servidor. Revisar el metodo (create) de la ruta "direcciones"`,
          error: error,
        });
      }
    }
  }

  async findAll(): Promise<Direccion[]> {
    try {
      const direcciones = await this.direccioneRepository.find({ relations: ['empresa'] });
      if (!direcciones || direcciones.length === 0) {
        throw new BadRequestException({
          statusCode: 404,
          message: `No se encontraron Direcciones`,
        });
      }
      return direcciones;
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      } else {
        throw new InternalServerErrorException({
          statusCode: 500,
          message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "direcciones"`,
          error: error,
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
        throw new BadRequestException({
          statusCode: 404,
          message: `Direccion con ID: ${id} no fue encontrada`,
        });
      }
      return direccion;
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      } else {
        throw new InternalServerErrorException({
          statusCode: 500,
          message: `Error del Servidor. Revisar el metodo (findOne) de la ruta "direcciones"`,
          error: error,
        });
      }
    }
  }

  async update(id: number, updateDireccioneDto: UpdateDireccioneDto)
    : Promise<Direccion> {
    try {
      const existeDireccion = await this.findOne(id);

      /* const buscarEmpresa = await this.empresaRepository.findOneBy({ id: updateDireccioneDto.empresa_id });
      if (!buscarEmpresa) {
        throw new BadRequestException({
          statusCode: 404,
          message: `Empresa con ID: ${updateDireccioneDto.empresa_id} no fue encontrada`,
        });
      } */
      const buscarEmpresa = await this.empresasService.findOne(updateDireccioneDto.empresa_id);

      const actualizarDireccion = await this.direccioneRepository.preload({
        id,
        ...updateDireccioneDto,
      });
      actualizarDireccion.empresa = buscarEmpresa

      return await this.direccioneRepository.save(actualizarDireccion);
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      } else {
        throw new InternalServerErrorException({
          statusCode: 500,
          message: `Error del Servidor. Revisar el metodo (update) de la ruta "direcciones"`,
          error: error,
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
      if (error instanceof BadRequestException) {
        throw error;
      } else {
        throw new InternalServerErrorException({
          statusCode: 500,
          message: `Error del Servidor. Revisar el metodo (remove) de la ruta "direcciones"`,
          error: error,
        });
      }
    }
  }
}