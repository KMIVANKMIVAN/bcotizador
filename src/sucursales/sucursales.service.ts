import {
  NotFoundException,
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
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({
         
          message: `Error del Servidor. Revisar el metodo (create) de la ruta "sucursales"`,
          error: `${error}`,
        });
      }
    }
  }

  async findAll(): Promise<Sucursal[]> {
    try {
      const sucursales = await this.sucursaleRepository.find({ relations: ['departamento'] });
      if (!sucursales || sucursales.length === 0) {
        throw new NotFoundException({
          
          message: `No se encontraron Sucursales`,
        });
      }
      return sucursales;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({
         
          message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "sucursales"`,
          error: `${error}`,
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
        throw new NotFoundException({
          
          message: `Sucursal con ID ${id} no fue encontrada`,
        });
      }
      return sucursale;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({
         
          message: `Error del Servidor. Revisar el metodo (findOne) de la ruta "sucursales"`,
          error: `${error}`,
        });
      }
    }
  }

  async update(id: number, updateSucursaleDto: UpdateSucursaleDto): Promise<Sucursal> {
    try {
      const existeSucursal = await this.findOne(id);

      const buscarDepartamento = await this.departamentosService.findOne(updateSucursaleDto.departamento_id)

      const actualizarSucursal = await this.sucursaleRepository.preload({
        id,
        ...updateSucursaleDto
      })

      actualizarSucursal.departamento = buscarDepartamento

      return await this.sucursaleRepository.save(actualizarSucursal);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({
         
          message: `Error del Servidor. Revisar el metodo (update) de la ruta "sucursales"`,
          error: `${error}`,
        });
      }
    }
  }

  async remove(id: number): Promise<any> {
    try {
      const sucursal = await this.findOne(id);

      await this.sucursaleRepository.delete(id);
      return { success: true, message: `Se eliminó la Sucursal con ID: ${id}` };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({
         
          message: `Error del Servidor. Revisar el metodo (remove) de la ruta "sucursales"`,
          error: `${error}`,
        });
      }
    }
  }
}
