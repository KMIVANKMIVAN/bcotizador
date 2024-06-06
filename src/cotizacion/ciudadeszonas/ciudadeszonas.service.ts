import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCiudadzonaDto } from './dto/create-ciudadzona.dto';
import { UpdateCiudadzonaDto } from './dto/update-ciudadzona.dto';
import { Ciudadzona } from './entities/ciudadzona.entity';
import { CiudadesService } from 'src/ciudades/ciudades.service';
import { capitalizeTextos } from 'src/utils/capitalizeTextos';
@Injectable()
export class CiudadeszonasService {
  constructor(
    @InjectRepository(Ciudadzona)
    private readonly ciudadzonaRepository: Repository<Ciudadzona>,
    private readonly ciudadesService: CiudadesService,

  ) { }

  async createSemilla(createCiudadzonaDto: CreateCiudadzonaDto): Promise<Ciudadzona> {
    try {
      const buscarCiudad = await this.ciudadesService.findOne(createCiudadzonaDto.ciudad_id)
      createCiudadzonaDto.ciudadzona = capitalizeTextos(createCiudadzonaDto.ciudadzona);
      const { ciudad_id, ...ciudadzonaDatos } = createCiudadzonaDto;
      const nuevaCiudadzona = this.ciudadzonaRepository.create(
        {
          ...ciudadzonaDatos,
          ciudad: buscarCiudad,
        }
      );
      return await this.ciudadzonaRepository.save(nuevaCiudadzona);
    } catch (error) {

      throw new InternalServerErrorException({

        mensaje: `Error del Servidor. Revisar el metodo (create) de la ruta "ciudadeszonas"`,
        error: `${error}`,
      });
    }
  }
  async create(createCiudadzonaDto: CreateCiudadzonaDto): Promise<Ciudadzona> {
    try {
      const buscarCiudad = await this.ciudadesService.findOne(createCiudadzonaDto.ciudad_id)
      createCiudadzonaDto.valor = Number(createCiudadzonaDto.valor) * 1 / 100;
      createCiudadzonaDto.ciudadzona = capitalizeTextos(createCiudadzonaDto.ciudadzona);
      const { ciudad_id, ...ciudadzonaDatos } = createCiudadzonaDto;
      const nuevaCiudadzona = this.ciudadzonaRepository.create(
        {
          ...ciudadzonaDatos,
          ciudad: buscarCiudad,
        }
      );
      return await this.ciudadzonaRepository.save(nuevaCiudadzona);
    } catch (error) {
      throw new InternalServerErrorException({
        mensaje: `Error del Servidor. Revisar el metodo (create) de la ruta "ciudadeszonas"`,
        error: `${error}`,
      });
    }
  }

  async findAll(): Promise<Ciudadzona[]> {
    try {
      const ciudadeszonas = await this.ciudadzonaRepository.find({ relations: ['ciudad'] });
      if (!ciudadeszonas || ciudadeszonas.length === 0) {
        throw new NotFoundException({

          message: `No se encontraron ciudadeszonas`,
        });
      }
      return ciudadeszonas;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({
          message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "ciudadeszonas"`,
          error: `${error}`,
        });
      }
    }
  }

  async findAllClear(): Promise<Ciudadzona[]> {
    try {
      const ciudadeszonas = await this.ciudadzonaRepository.find();
      if (!ciudadeszonas || ciudadeszonas.length === 0) {
        throw new NotFoundException({
          message: `No se encontraron ciudadeszonas`,
        });
      }
      ciudadeszonas.forEach((coiudadzona) => delete coiudadzona.valor);
      return ciudadeszonas;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({
          message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "ciudadeszonas"`,
          error: `${error}`,
        });
      }
    }
  }

  async findOne(id: number): Promise<Ciudadzona> {
    try {
      const ciudad = await this.ciudadzonaRepository.findOneBy({ id });
      if (!ciudad) {
        throw new NotFoundException({

          message: `Ciudadzona con ID: ${id} no fue encontrada`,
        });
      }
      return ciudad;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (findOne) de la ruta "ciudadeszonas"`,
          error: `${error}`,
        });
      }
    }
  }

  async update(id: number, updateCiudadzonaDto: UpdateCiudadzonaDto): Promise<Ciudadzona> {
    try {
      const existeCiudadzona = await this.findOne(id);

      const buscarCiudad = await this.ciudadesService.findOne(updateCiudadzonaDto.ciudad_id);

      // Aplica la función capitalizeTextos antes de hacer el preload
      updateCiudadzonaDto.ciudadzona = capitalizeTextos(updateCiudadzonaDto.ciudadzona);

      const actualizarCiudadzona = await this.ciudadzonaRepository.preload({
        id,
        ...updateCiudadzonaDto,
      });

      actualizarCiudadzona.ciudad = buscarCiudad;

      return await this.ciudadzonaRepository.save(actualizarCiudadzona);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({
          message: `Error del Servidor. Revisar el metodo (update) de la ruta "ciudadeszonas"`,
          error: `${error}`,
        });
      }
    }
  }


  async remove(id: number): Promise<any> {
    try {
      const ciudadzona = await this.findOne(id);
      await this.ciudadzonaRepository.delete(id);
      return {
        success: true,
        message: `Se eliminó el Ciudadzona con ID: ${id}`,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (remove) de la ruta "ciudadeszonas"`,
          error: `${error}`,
        });
      }
    }
  }
}
