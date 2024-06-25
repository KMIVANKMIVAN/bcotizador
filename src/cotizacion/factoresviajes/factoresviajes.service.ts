import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFactorviajeDto } from './dto/create-factorviaje.dto';
import { UpdateFactorviajeDto } from './dto/update-factorviaje.dto';
import { Factorviaje } from './entities/factorviaje.entity';
import { capitalizeTextos } from 'src/utils/capitalizeTextos';

@Injectable()
export class FactoresviajesService {
  constructor(
    @InjectRepository(Factorviaje)
    private readonly nivelpisoRepository: Repository<Factorviaje>,
  ) { }

  async createSemilla(createFactorviajeDto: CreateFactorviajeDto): Promise<Factorviaje> {
    try {
      console.log("createFactorviajeDto",createFactorviajeDto);
      
      createFactorviajeDto.ciudad = capitalizeTextos(createFactorviajeDto.ciudad);
      const nuevoCiudad = this.nivelpisoRepository.create(
        createFactorviajeDto,
      );
      return await this.nivelpisoRepository.save(nuevoCiudad);
    } catch (error) {

      throw new InternalServerErrorException({

        mensaje: `Error del Servidor. Revisar el metodo (createSemilla) de la ruta "factoresviajes"`,
        error: `${error}`,
      });
    }
  }
  async create(createFactorviajeDto: CreateFactorviajeDto): Promise<Factorviaje> {
    try {
      createFactorviajeDto.valor = Number(createFactorviajeDto.valor) * 1 / 100;
      createFactorviajeDto.ciudad = capitalizeTextos(createFactorviajeDto.ciudad);
      const nuevoCiudad = this.nivelpisoRepository.create(
        createFactorviajeDto,
      );
      return await this.nivelpisoRepository.save(nuevoCiudad);
    } catch (error) {

      throw new InternalServerErrorException({

        mensaje: `Error del Servidor. Revisar el metodo (create) de la ruta "factoresviajes"`,
        error: `${error}`,
      });
    }
  }

  async findAll(): Promise<Factorviaje[]> {
    try {
      const factoresviajes = await this.nivelpisoRepository.find();
      if (!factoresviajes || factoresviajes.length === 0) {
        throw new NotFoundException({

          message: `No se encontraron factoresviajes`,
        });
      }
      return factoresviajes;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "factoresviajes"`,
          error: `${error}`,
        });
      }
    }
  }
  async findAllPorNombCiudad(ciudad: string): Promise<Factorviaje[]> {
    try {
      const factoresviajes = await this.nivelpisoRepository.createQueryBuilder('ciudad')
        .where('LOWER(ciudad.ciudad) LIKE LOWER(:ciudad)', { ciudad: `%${ciudad.toLowerCase()}%` })
        .limit(5)
        .getMany();

      if (!factoresviajes || factoresviajes.length === 0) {
        throw new NotFoundException({
          message: `No se encontraron nivel pisos: ${ciudad}`,
        });
      }
      return factoresviajes;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({
          message: `Error del Servidor. Revisar el metodo (findAllPorNombNivelPiso) de la ruta "factoresviajes"`,
          error: `${error}`,
        });
      }
    }
  }
  async findAllClear(): Promise<Factorviaje[]> {
    try {
      const factoresviajes = await this.nivelpisoRepository.find();
      if (!factoresviajes || factoresviajes.length === 0) {
        throw new NotFoundException({
          message: `No se encontraron factoresviajes`,
        });
      }
      factoresviajes.forEach((ciudad) => delete ciudad.valor);
      return factoresviajes;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "factoresviajes"`,
          error: `${error}`,
        });
      }
    }
  }

  async findOne(id: number): Promise<Factorviaje> {
    try {
      const factoresviaje = await this.nivelpisoRepository.findOneBy({ id });
      if (!factoresviaje) {
        throw new NotFoundException({

          message: `Factorviaje con ID: ${id} no fue encontrada`,
        });
      }
      return factoresviaje;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (findOne) de la ruta "factoresviajes"`,
          error: `${error}`,
        });
      }
    }
  }

  async update(id: number, updateFactorviajeDto: UpdateFactorviajeDto): Promise<Factorviaje> {
    try {
      const existeFactoresviaje = await this.findOne(id);
      updateFactorviajeDto.ciudad = capitalizeTextos(updateFactorviajeDto.ciudad);
      const actualizarCiudad = this.nivelpisoRepository.merge(existeFactoresviaje, updateFactorviajeDto);
      return await this.nivelpisoRepository.save(actualizarCiudad);

    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (update) de la ruta "factoresviajes"`,
          error: `${error}`,
        });
      }
    }
  }

  async remove(id: number): Promise<any> {
    try {
      const factoresviaje = await this.findOne(id);
      await this.nivelpisoRepository.delete(id);
      return {
        success: true,
        message: `Se eliminó el Factorviaje con ID: ${id}`,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (remove) de la ruta "factoresviajes"`,
          error: `${error}`,
        });
      }
    }
  }
}
