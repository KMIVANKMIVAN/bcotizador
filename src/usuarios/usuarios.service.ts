import {
  Injectable,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

import { SucursalesService } from 'src/sucursales/sucursales.service';
import { RolesService } from 'src/roles/roles.service';
import { CargosService } from 'src/empresa/cargos/cargos.service';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,

    private readonly rolesService: RolesService,
    private readonly sucursalesService: SucursalesService,
    private readonly cargosService: CargosService,
  ) { }

  async createSemilla(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    try {
      const { roles, sucursal_id, ...userData } = createUsuarioDto;

      const existeRoles = await this.rolesService.findByIds(createUsuarioDto.roles);

      const existeSucursal = await this.sucursalesService.findOne(createUsuarioDto.sucursal_id);

      const existeCargo = await this.cargosService.findOne(createUsuarioDto.cargo_id);

      const hashedPassword = await bcrypt.hash(userData.contrasenia, 10);

      const usuario = this.usuarioRepository.create({
        ...userData,
        contrasenia: hashedPassword,
        roles: existeRoles,
        sucursal: existeSucursal,
        cargo: existeCargo
      });

      return this.usuarioRepository.save(usuario);
    } catch (error) {

      throw new InternalServerErrorException({
        statusCode: 500,
        message: `Error del Servidor. Revisar el metodo (createSemilla) de la ruta "usuarios"`,
        error: error,
      });

    }
  }

  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    try {
      const { roles, sucursal_id, ...userData } = createUsuarioDto;

      const existeRoles = await this.rolesService.findByIds(createUsuarioDto.roles);
      const existeSucursal = await this.sucursalesService.findOne(createUsuarioDto.sucursal_id);
      const existeCargo = await this.cargosService.findOne(createUsuarioDto.cargo_id);

      const hashedPassword = await bcrypt.hash(userData.contrasenia, 10);

      const nuevoUsuario = this.usuarioRepository.create({
        ...userData,
        contrasenia: hashedPassword,
        roles: existeRoles,
        sucursal: existeSucursal,
        cargo: existeCargo
      });

      delete nuevoUsuario.contrasenia; // Eliminar el campo de contraseña del usuario

      return this.usuarioRepository.save(nuevoUsuario);
    } catch (error) {

      throw new InternalServerErrorException({
        statusCode: 500,
        message: `Error del Servidor. Revisar el metodo (create) de la ruta "usuarios"`,
        error: error,
      });

    }
  }

  async findAll(): Promise<Usuario[]> {
    try {
      const usuarios = await this.usuarioRepository.find({ relations: ['role', 'sucursal', 'cargo'] });
      if (!usuarios || usuarios.length === 0) {
        throw new BadRequestException({
          statusCode: 404,
          message: `No se encontraron Usuarios`,
        });
      }
      usuarios.forEach((user) => delete user.contrasenia);
      return usuarios;
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      } else {
        throw new InternalServerErrorException({
          statusCode: 500,
          message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "usuarios"`,
          error: error,
        });
      }
    }
  }

  async findOne(id: number): Promise<Usuario> {
    try {
      const usuario = await this.usuarioRepository.findOne({
        where: { id },
        relations: ['role', 'sucursal', 'cargo'],
      });
      if (!usuario) {
        throw new BadRequestException({
          statusCode: 404,
          message: `Usuario con ID: ${id} no fue encontrado`,
        });
      }
      delete usuario.contrasenia; // Eliminar el campo de contraseña del usuario
      return usuario;
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      } else {
        throw new InternalServerErrorException({
          statusCode: 500,
          message: `Error del Servidor. Revisar el metodo (findOne) de la ruta "usuarios"`,
          error: error,
        });
      }
    }
  }

  async findOneCi(ci: string): Promise<Usuario[]> {
    try {
      const usuarios = await this.usuarioRepository
        .createQueryBuilder('usuarios')
        .where('usuarios.ci ILIKE :ci', { ci: `%${ci}%` })
        .take(5)
        .getMany();
      if (!usuarios || usuarios.length === 0) {
        throw new BadRequestException({
          statusCode: 404,
          message: `Usuarios con CI: ${ci} no fue encontrado`,
        });
      }
      usuarios.forEach((user) => delete user.contrasenia);
      return usuarios;
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      } else {
        throw new InternalServerErrorException({
          statusCode: 500,
          message: `Error del Servidor. Revisar el metodo (findOneCi) de la ruta "usuarios"`,
          error: error,
        });
      }
    }
  }

  async findOneByUserCi(ci: string): Promise<Usuario> {
    try {
      const usuario = await this.usuarioRepository.findOne({
        where: { ci },
        // relations: ['role']
      });
      if (!usuario) {
        throw new BadRequestException({
          statusCode: 404,
          message: `Usuario con CI: ${ci} no fue encontrado`,
        });
      }
      return usuario;
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      } else {
        throw new InternalServerErrorException({
          statusCode: 500,
          message: `Error del Servidor. Revisar el metodo (findOneByUserCi) de la ruta "usuarios"`,
          error: error,
        });
      }
    }
  }

  async update(
    id: number,
    updateUsuarioDto: UpdateUsuarioDto,
  ): Promise<Usuario> {
    try {
      const existeUsuario = await this.findOne(id);

      const buscarRoles = await this.rolesService.findByIds(updateUsuarioDto.roles);

      const buscarSucursal = await this.sucursalesService.findOne(updateUsuarioDto.sucursal_id);

      const buscarCargo = await this.cargosService.findOne(updateUsuarioDto.cargo_id);

      // Construir el objeto actualizado del usuario
      const { roles: rolesIds, sucursal_id, ...usuariosDatos } = updateUsuarioDto;

      const actualizarUsuario = {
        ...usuariosDatos,
        id,
        buscarRoles,
        buscarSucursal,
        buscarCargo
      };

      const usuarioPreloaded = await this.usuarioRepository.preload(actualizarUsuario);

      delete existeUsuario.contrasenia;

      return await this.usuarioRepository.save(usuarioPreloaded);
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

  async updateContrasenia(
    id: number,
    contraseniaAntigua: string,
    updateUsuarioDto: UpdateUsuarioDto,
  ): Promise<Partial<Usuario>> {
    try {
      const existeUsuario = await this.findOne(id);

      // Verificar si la contraseña anterior coincide
      const contraseniaCorrecta = await bcrypt.compare(
        contraseniaAntigua,
        existeUsuario.contrasenia,
      );

      if (!contraseniaCorrecta) {
        throw new BadRequestException({
          statusCode: 400,
          message: 'La contraseña anterior no es correcta',
        });
      }

      // Verificar si la nueva contraseña está presente
      if (!updateUsuarioDto.contrasenia) {
        throw new BadRequestException({
          statusCode: 400,
          message: 'La nueva contraseña no puede estar vacía',
        });
      }

      // Hashea la nueva contraseña antes de actualizarla
      const hashedPassword = await bcrypt.hash(
        updateUsuarioDto.contrasenia,
        10,
      );
      // Actualiza la contraseña del usuario en la base de datos
      existeUsuario.contrasenia = hashedPassword;
      existeUsuario.se_cambiado_cntr = true;

      // Guarda los cambios
      const actualizarUsuario = await this.usuarioRepository.save(existeUsuario);

      // Elimina el campo de contraseña del objeto updatedUser
      delete actualizarUsuario.contrasenia;

      return actualizarUsuario; // Devuelve todos los datos excepto la contraseña
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      } else {
        throw new InternalServerErrorException({
          statusCode: 500,
          message: `Error del Servidor. Revisar el metodo (updateContrasenia) de la ruta "usuarios"`,
          error: error,
        });
      }
    }
  }

  async remove(id: number): Promise<any> {
    try {
      const usuario = await this.findOne(id);
      await this.usuarioRepository.delete(id);
      return { success: true, message: `Se eliminó el usuario con ID: ${id}` };
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      } else {
        throw new InternalServerErrorException({
          statusCode: 500,
          message: `Error del Servidor. Revisar el metodo (remove) de la ruta "usuarios"`,
          error: error,
        });
      }
    }
  }
}
