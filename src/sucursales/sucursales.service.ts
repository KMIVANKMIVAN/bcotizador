import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSucursaleDto } from './dto/create-sucursale.dto';
import { UpdateSucursaleDto } from './dto/update-sucursale.dto';

import { Sucursal } from './entities/sucursale.entity';

import { DepartamentosService } from 'src/departamentos/departamentos.service';

@Injectable()
export class SucursalesService {
  constructor(
    @InjectRepository(Sucursal)
    private readonly sucursaleRepository: Repository<Sucursal>,

    private readonly departamentosService: DepartamentosService,

  ) { }

  async create(createSucursaleDto: CreateSucursaleDto): Promise<Sucursal> {
    try {
      const buscarDepartamento = await this.departamentosService.findOne(createSucursaleDto.departamento_id)

      const { departamento_id, ...sucursalDatos } = createSucursaleDto;

      const nuevaUnidad = this.sucursaleRepository.create({
        ...sucursalDatos,
        departamento: buscarDepartamento,
      });

      return await this.sucursaleRepository.save(nuevaUnidad);
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      } else {
        throw new InternalServerErrorException({
          statusCode: 500,
          message: `Error del Servidor. Revisar el metodo (create) de la ruta "sucursales"`,
          error: error,
        });
      }
    }
  }

  async findAll(): Promise<Sucursal[]> {
    try {
      const sucursales = await this.sucursaleRepository.find({ relations: ['departamento'] });
      if (!sucursales || sucursales.length === 0) {
        throw new BadRequestException({
          statusCode: 404,
          message: `No se encontraron Sucursales`,
        });
      }
      return sucursales;
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      } else {
        throw new InternalServerErrorException({
          statusCode: 500,
          message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "sucursales"`,
          error: error,
        });
      }
    }
  }


  async findOne(id: number): Promise<Sucursal> {
    try {
      const sucursale = await this.sucursaleRepository.findOne({
        where: { id },
      });
      if (!sucursale) {
        throw new BadRequestException({
          statusCode: 400,
          error: `La sucursal con ID ${id} NO Existe`,
          message: `Sucursal con ID ${id} no fue encontrada`,
        });
      }
      return sucursale;
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      } else {
        throw new InternalServerErrorException({
          statusCode: 500,
          error: `Error del Servidor en (findOne): ${error}`,
          message: `Error del Servidor en (findOne): ${error}`,
        });
      }
    }
  }

  async update(id: number, updateSucursaleDto: UpdateSucursaleDto): Promise<Sucursal> {
    try {
      const existingSucursale = await this.findOne(id);

      // Transforma el DTO en una instancia de Sucursale
      if (!existingSucursale) {
        throw new BadRequestException({
          statusCode: 400,
          error: `Sucursal con ID ${id} NO Existe`,
          message: `Sucursal con ID ${id} no fue encontrada`,
        });
      }
      const updatedSucursale = Object.assign(
        existingSucursale,
        updateSucursaleDto,
      );

      return await this.sucursaleRepository.save(updatedSucursale);
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      } else {
        throw new InternalServerErrorException({
          statusCode: 500,
          error: `Error del Servidor en (update): ${error}`,
          message: `Error del Servidor en (update): ${error}`,
        });
      }
    }
  }

  async remove(id: number): Promise<any> {
    try {
      const sucursale = await this.findOne(id);
      if (!sucursale) {
        throw new BadRequestException({
          statusCode: 400,
          error: `Sucursal con ID ${id} NO Existe`,
          message: `Sucursal con ID ${id} no fue encontrada`,
        });
      }
      await this.sucursaleRepository.delete(id);
      return { success: true, message: `Se eliminó la Sucursal con ID: ${id}` };
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      } else {
        throw new InternalServerErrorException({
          statusCode: 500,
          error: `Error del Servidor en (remove): ${error}`,
          message: `Error del Servidor en (remove): ${error}`,
        });
      }
    }
  }
}
