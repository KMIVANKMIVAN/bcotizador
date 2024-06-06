import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCiudadDto } from './dto/create-ciudad.dto';
import { UpdateCiudadDto } from './dto/update-ciudad.dto';
import { Ciudad } from './entities/ciudad.entity';

@Injectable()
export class CiudadesService {
  constructor(
    @InjectRepository(Ciudad)
    private readonly ciudadRepository: Repository<Ciudad>,
  ) { }

  async createSemilla(createCiudadDto: CreateCiudadDto): Promise<Ciudad> {
    try {
      // console.log("createCiudadDto", createCiudadDto);

      const nuevaCiudad = this.ciudadRepository.create(createCiudadDto);
      return await this.ciudadRepository.save(nuevaCiudad);
    } catch (error) {

      throw new InternalServerErrorException({

        mensaje: `Error del Servidor. Revisar el metodo (create) de la ruta "ciudades"`,
        error: `${error}`,
      });
    }
  }
  async create(createCiudadDto: CreateCiudadDto): Promise<Ciudad> {
    try {
      console.log("createCiudadDto", createCiudadDto);

      // Convierte el valor a número y realiza el cálculo
      createCiudadDto.valor = Number(createCiudadDto.valor) * 1 / 100;

      console.log("createCiudadDto.valor", createCiudadDto.valor);

      // Crea la entidad Ciudad
      const nuevaCiudad = this.ciudadRepository.create(createCiudadDto);

      // Guarda la nueva entidad en la base de datos
      return await this.ciudadRepository.save(nuevaCiudad);
    } catch (error) {

      throw new InternalServerErrorException({

        mensaje: `Error del Servidor. Revisar el metodo (create) de la ruta "ciudades"`,
        error: `${error}`,
      });
    }
  }

  async findAll(): Promise<Ciudad[]> {
    try {
      const ciudades = await this.ciudadRepository.find();
      if (!ciudades || ciudades.length === 0) {
        throw new NotFoundException({

          message: `No se encontraron ciudades`,
        });
      }
      return ciudades;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "ciudades"`,
          error: `${error}`,
        });
      }
    }
  }

  async findOne(id: number): Promise<Ciudad> {
    try {
      const ciudad = await this.ciudadRepository.findOneBy({ id });
      if (!ciudad) {
        throw new NotFoundException({

          message: `Ciudad con ID: ${id} no fue encontrada`,
        });
      }
      return ciudad;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (findOne) de la ruta "ciudades"`,
          error: `${error}`,
        });
      }
    }
  }

  async update(id: number, updateCiudadDto: UpdateCiudadDto): Promise<Ciudad> {
    try {
      const existeCiudad = await this.findOne(id);

      return await this.ciudadRepository.save(updateCiudadDto);

    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (update) de la ruta "ciudades"`,
          error: `${error}`,
        });
      }
    }
  }

  async remove(id: number): Promise<any> {
    try {
      const ciudad = await this.findOne(id);
      await this.ciudadRepository.delete(id);
      return {
        success: true,
        message: `Se eliminó el Ciudad con ID: ${id}`,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (remove) de la ruta "ciudades"`,
          error: `${error}`,
        });
      }
    }
  }
}
