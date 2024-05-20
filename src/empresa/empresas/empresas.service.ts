import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';

import { Empresa } from './entities/empresa.entity';

@Injectable()
export class EmpresasService {
  constructor(
    @InjectRepository(Empresa)
    private readonly empresaRepository: Repository<Empresa>,
  ) { }

  async create(createEmpresaDto: CreateEmpresaDto) {
    try {
      const nuevaEmpresa = this.empresaRepository.create(
        createEmpresaDto,
      );
      return await this.empresaRepository.save(nuevaEmpresa);
    } catch (error) {

      throw new InternalServerErrorException({
        statusCode: 500,
        mensaje: `Error del Servidor. Revisar el metodo (create) de la ruta "empresas"`,
        error: error,
      });
    }
  }

  async findAll() {
    try {
      const empresas = await this.empresaRepository.find();
      if (!empresas || empresas.length === 0) {
        throw new BadRequestException({
          statusCode: 404,
          message: `No se encontraron Empresas`,
        });
      }
      return empresas;
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      } else {
        throw new InternalServerErrorException({
          statusCode: 500,
          message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "empresas"`,
          error: error,
        });
      }
    }
  }

  async findOne(id: number) {
    try {
      const empresa = await this.empresaRepository.findOneBy({ id });
      if (!empresa) {
        throw new BadRequestException({
          statusCode: 404,
          message: `Empresa con ID: ${id} no fue encontrada`,
        });
      }
      return empresa;
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      } else {
        throw new InternalServerErrorException({
          statusCode: 500,
          message: `Error del Servidor. Revisar el metodo (findOne) de la ruta "empresas"`,
          error: error,
        });
      }
    }
  }

  async update(id: number, updateEmpresaDto: UpdateEmpresaDto) {
    try {
      const existeEmpresa = await this.findOne(id);

      return await this.empresaRepository.save(updateEmpresaDto);
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      } else {
        throw new InternalServerErrorException({
          statusCode: 500,
          message: `Error del Servidor. Revisar el metodo (update) de la ruta "empresas"`,
          error: error,
        });
      }
    }
  }

  async remove(id: number) {
    try {
      const empresa = await this.findOne(id);
      await this.empresaRepository.delete(id);
      return {
        success: true,
        message: `Se eliminó la Empresa con ID: ${id}`,
      };
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      } else {
        throw new InternalServerErrorException({
          statusCode: 500,
          message: `Error del Servidor. Revisar el metodo (remove) de la ruta "empresas"`,
          error: error,
        });
      }
    }
  }
}
