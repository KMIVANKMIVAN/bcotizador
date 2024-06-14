import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';

import { Empresa } from './entities/empresa.entity';

import { capitalizeTextos } from 'src/utils/capitalizeTextos';
@Injectable()
export class EmpresasService {
  constructor(
    @InjectRepository(Empresa)
    private readonly empresaRepository: Repository<Empresa>,
  ) { }

  async create(createEmpresaDto: CreateEmpresaDto): Promise<Empresa> {
    try {
      createEmpresaDto.razon_social = capitalizeTextos(createEmpresaDto.razon_social);
      createEmpresaDto.ubicacion = capitalizeTextos(createEmpresaDto.ubicacion);
      createEmpresaDto.correo = createEmpresaDto.correo.toLowerCase();
      createEmpresaDto.nit = createEmpresaDto.nit.toString().toUpperCase();

      const nuevaEmpresa = this.empresaRepository.create(
        createEmpresaDto,
      );
      return await this.empresaRepository.save(nuevaEmpresa);
    } catch (error) {

      throw new InternalServerErrorException({

        mensaje: `Error del Servidor. Revisar el metodo (create) de la ruta "empresas"`,
        error: `${error}`,
      });
    }
  }
  async findAllPorNombEmpresa(empresa: string): Promise<Empresa[]> {
    try {
      const empresas = await this.empresaRepository.createQueryBuilder('empresa')
        .where('LOWER(empresa.razon_social) LIKE LOWER(:razon_social)', { razon_social: `%${empresa.toLowerCase()}%` })
        .limit(5)
        .getMany();

      if (!empresas || empresas.length === 0) {
        throw new NotFoundException({
          message: `No se encontraron empresas: ${empresa}`,
        });
      }
      return empresas;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({
          message: `Error del Servidor. Revisar el metodo (findAllPorNombEmpresa) de la ruta "empresas"`,
          error: `${error}`,
        });
      }
    }
  }
  async findAll(): Promise<Empresa[]> {
    try {
      const empresas = await this.empresaRepository.find();
      if (!empresas || empresas.length === 0) {
        throw new NotFoundException({

          message: `No se encontraron Empresas`,
        });
      }
      return empresas;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "empresas"`,
          error: `${error}`,
        });
      }
    }
  }

  async findOne(id: number): Promise<Empresa> {
    try {
      const empresa = await this.empresaRepository.findOneBy({ id });
      if (!empresa) {
        throw new NotFoundException({

          message: `Empresa con ID: ${id} no fue encontrada`,
        });
      }
      return empresa;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (findOne) de la ruta "empresas"`,
          error: `${error}`,
        });
      }
    }
  }

  async update(id: number, updateEmpresaDto: UpdateEmpresaDto): Promise<Empresa> {
    try {
      const existeEmpresa = await this.findOne(id);
      updateEmpresaDto.razon_social = capitalizeTextos(updateEmpresaDto.razon_social);
      updateEmpresaDto.ubicacion = capitalizeTextos(updateEmpresaDto.ubicacion);
      updateEmpresaDto.correo = updateEmpresaDto.correo.toLowerCase();
      updateEmpresaDto.nit = updateEmpresaDto.nit.toString().toUpperCase();
      // Fusionar los cambios del DTO de actualización con el objeto existente
      const actualizarEmpresa = this.empresaRepository.merge(existeEmpresa, updateEmpresaDto);
      // Guardar la empresa actualizada en la base de datos
      return await this.empresaRepository.save(actualizarEmpresa);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (update) de la ruta "empresas"`,
          error: `${error}`,
        });
      }
    }
  }

  async remove(id: number): Promise<any> {
    try {
      const empresa = await this.findOne(id);
      await this.empresaRepository.delete(id);
      return {
        success: true,
        message: `Se eliminó la Empresa con ID: ${id}`,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (remove) de la ruta "empresas"`,
          error: `${error}`,
        });
      }
    }
  }
}
