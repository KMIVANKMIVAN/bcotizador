import {
  NotFoundException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-rol.dto';
import { UpdateRoleDto } from './dto/update-rol.dto';
import { Rol } from './entities/rol.entity';
import { capitalizeTextos } from 'src/utils/capitalizeTextos';
@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Rol)
    private readonly rolRepository: Repository<Rol>,
  ) { }

  async create(createRoleDto: CreateRoleDto): Promise<Rol> {
    try {
      createRoleDto.rol = capitalizeTextos(createRoleDto.rol);
      const nuevoRol = this.rolRepository.create(createRoleDto);
      return await this.rolRepository.save(nuevoRol);
    } catch (error) {

      throw new InternalServerErrorException({

        mensaje: `Error del Servidor. Revisar el metodo (create) de la ruta "roles"`,
        error: `${error}`,
      });

    }
  }

  async findAll(): Promise<Rol[]> {
    try {
      const roles = await this.rolRepository.find();
      if (!roles || roles.length === 0) {
        throw new NotFoundException({

          message: `No se encontraron Empresas`,
        });
      }
      return roles;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "roles"`,
          error: `${error}`,
        });
      }
    }
  }

  async findOne(id: number): Promise<Rol> {
    try {
      const rol = await this.rolRepository.findOneBy({ id });
      if (!rol) {
        throw new NotFoundException({

          message: `Rol con ID: ${id} no fue encontrada`,
        });
      }
      return rol;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (findOne) de la ruta "roles"`,
          error: `${error}`,
        });
      }
    }
  }
  async findByIds(ids: number[]): Promise<Rol[]> {
    try {
      const roles = await this.rolRepository.findByIds(ids);
      if (!roles) {
        throw new NotFoundException({

          message: `Roles con IDs ${ids} no fueron encontrados`
        });
      }
      if (roles.length === 0) {
        throw new NotFoundException({
          message: `Roles con IDs ${ids} no fueron encontrados`
        });
      }
      return roles;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (findByIds) de la ruta "roles"`,
          error: `${error}`,
        });
      }
    }
  }

  async update(id: number, updateRoleDto: UpdateRoleDto): Promise<Rol> {
    try {
      const existeRol = await this.findOne(id);
      updateRoleDto.rol = capitalizeTextos(updateRoleDto.rol);
      const actualizarRol = this.rolRepository.merge(existeRol, updateRoleDto);
      return await this.rolRepository.save(actualizarRol);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (update) de la ruta "roles"`,
          error: `${error}`,
        });
      }
    }
  }

  async remove(id: number): Promise<any> {
    try {
      const rol = await this.findOne(id);
      await this.rolRepository.delete(id);
      return {
        success: true,
        message: `Se eliminó el Rol con ID: ${id}`,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (remove) de la ruta "roles"`,
          error: `${error}`,
        });
      }
    }
  }
}
