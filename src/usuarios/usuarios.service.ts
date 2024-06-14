import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeepPartial } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

import { SucursalesService } from 'src/sucursales/sucursales.service';
import { RolesService } from 'src/roles/roles.service';
import { CargosService } from 'src/empresa/cargos/cargos.service';

import { capitalizeTextos } from 'src/utils/capitalizeTextos';
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
      const existeRoles = await this.rolesService.findByIds(createUsuarioDto.roles);

      const existeSucursal = await this.sucursalesService.findOne(createUsuarioDto.sucursal_id);

      const existeCargo = await this.cargosService.findOne(createUsuarioDto.cargo_id);

      createUsuarioDto.apellidos = capitalizeTextos(createUsuarioDto.apellidos);
      if (createUsuarioDto.complemento) {
        createUsuarioDto.complemento = createUsuarioDto.complemento.toUpperCase();
      }
      createUsuarioDto.nombres = capitalizeTextos(createUsuarioDto.nombres);
      createUsuarioDto.ci = createUsuarioDto.ci.toString().toUpperCase();
      createUsuarioDto.correo = createUsuarioDto.correo.toLowerCase();

      const hashedPassword = await bcrypt.hash(createUsuarioDto.contrasenia, 10);

      const usuario = this.usuarioRepository.create({
        ...createUsuarioDto,
        contrasenia: hashedPassword,
        roles: existeRoles,
        sucursal: existeSucursal,
        cargo: existeCargo
      });

      return this.usuarioRepository.save(usuario);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (createSemilla) de la ruta "usuarios"`,
          error: `${error}`,
        });
      }
    }
  }

  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    try {
      createUsuarioDto.apellidos = capitalizeTextos(createUsuarioDto.apellidos);
      if (createUsuarioDto.complemento) {
        createUsuarioDto.complemento = createUsuarioDto.complemento.toUpperCase();
      }
      createUsuarioDto.nombres = capitalizeTextos(createUsuarioDto.nombres);
      createUsuarioDto.ci = createUsuarioDto.ci.toString().toUpperCase();
      createUsuarioDto.correo = createUsuarioDto.correo.toLowerCase();
      // Verificar si el CI ya existe
      const existeCi = await this.usuarioRepository.findOne({ where: { ci: createUsuarioDto.ci } });
      if (existeCi) {
        throw new BadRequestException({
          message: 'El CI ya fue registrado.',
        });
      }
      // Verificar si el correo ya existe
      const existeCorreo = await this.usuarioRepository.findOne({ where: { correo: createUsuarioDto.correo } });
      if (existeCorreo) {
        throw new BadRequestException({
          message: 'El correo ya fue registrado.',
        });
      }
      const existeRoles = await this.rolesService.findByIds(createUsuarioDto.roles);

      const existeSucursal = await this.sucursalesService.findOne(createUsuarioDto.sucursal_id);

      const existeCargo = await this.cargosService.findOne(createUsuarioDto.cargo_id);

      const hashedPassword = await bcrypt.hash(createUsuarioDto.ci, 10);

      const usuario = this.usuarioRepository.create({
        ...createUsuarioDto,
        contrasenia: hashedPassword,
        roles: existeRoles,
        sucursal: existeSucursal,
        cargo: existeCargo
      });

      return this.usuarioRepository.save(usuario);
    } catch (error) {
      if (error instanceof NotFoundException || error instanceof BadRequestException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (create) de la ruta "usuarios"`,
          // error: error,
          error: `${error}`,
        });
      }
    }
  }
  async findAllPorNombCi(nomci: string): Promise<Usuario[]> {
    try {
      const usuarios = await this.usuarioRepository.createQueryBuilder('usuario')
        .leftJoinAndSelect('usuario.roles', 'roles')
        .leftJoinAndSelect('usuario.sucursal', 'sucursal')
        .leftJoinAndSelect('usuario.cargo', 'cargo')
        .where('LOWER(usuario.nombres) LIKE LOWER(:nomci)', { nomci: `%${nomci.toLowerCase()}%` })
        .orWhere('LOWER(usuario.ci) LIKE LOWER(:nomci)', { nomci: `%${nomci.toLowerCase()}%` })
        .limit(5)
        .getMany();

      if (!usuarios || usuarios.length === 0) {
        throw new NotFoundException({
          message: `No se encontraron usuarios con nombre o CI: ${nomci}`,
        });
      }
      return usuarios;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({
          message: `Error del Servidor. Revisar el metodo (findAllPorNombCi) de la ruta "usuarios"`,
          error: `${error}`,
        });
      }
    }
  }


  async findAll(): Promise<Usuario[]> {
    try {
      const usuarios = await this.usuarioRepository.find({ relations: ['roles', 'sucursal', 'cargo'] });
      if (!usuarios || usuarios.length === 0) {
        throw new NotFoundException({
          message: `No se encontraron Usuarios`,
        });
      }
      usuarios.forEach((user) => delete user.contrasenia);
      return usuarios;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "usuarios"`,
          error: `${error}`,
        });
      }
    }
  }

  async findOne(id: number): Promise<Usuario> {
    try {
      const usuario = await this.usuarioRepository.findOne({
        where: { id },
        relations: ['roles', 'sucursal', 'cargo'],
      });
      if (!usuario) {
        throw new NotFoundException({

          message: `Usuario con ID: ${id} no fue encontrado`,
        });
      }
      delete usuario.contrasenia; // Eliminar el campo de contraseña del usuario
      return usuario;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (findOne) de la ruta "usuarios"`,
          error: `${error}`,
        });
      }
    }
  }
  async findOneUsuarioPW(id: number): Promise<Usuario> {
    try {
      const usuario = await this.usuarioRepository.findOneBy({ id });
      if (!usuario) {
        throw new NotFoundException({

          message: `Usuario con ID: ${id} no fue encontrado`,
        });
      }
      return usuario;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (findOne) de la ruta "usuarios"`,
          error: `${error}`,
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
        throw new NotFoundException({

          message: `Usuarios con CI: ${ci} no fue encontrado`,
        });
      }
      usuarios.forEach((user) => delete user.contrasenia);
      return usuarios;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (findOneCi) de la ruta "usuarios"`,
          error: `${error}`,
        });
      }
    }
  }

  async findOneByUserCi(ci: string): Promise<Usuario> {
    try {
      const usuario = await this.usuarioRepository.findOne({
        where: { ci },
        relations: ['roles']
      });
      if (!usuario) {
        throw new NotFoundException({
          // 
          message: `Usuario con CI: ${ci} no fue encontrado`,
        });
      }
      return usuario;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (findOneByUserCi) de la ruta "usuarios"`,
          error: `${error}`,
        });
      }
    }
  }
  async update(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<Usuario> {
    try {
      updateUsuarioDto.apellidos = capitalizeTextos(updateUsuarioDto.apellidos);
      if (updateUsuarioDto.complemento) {
        updateUsuarioDto.complemento = updateUsuarioDto.complemento.toUpperCase();
      }
      updateUsuarioDto.nombres = capitalizeTextos(updateUsuarioDto.nombres);
      updateUsuarioDto.ci = updateUsuarioDto.ci.toString().toUpperCase();
      updateUsuarioDto.correo = updateUsuarioDto.correo.toLowerCase();
      const existeUsuario = await this.findOne(id);
      const existeRoles = updateUsuarioDto.roles
        ? await this.rolesService.findByIds(updateUsuarioDto.roles)
        : existeUsuario.roles;
      const existeSucursal = updateUsuarioDto.sucursal_id
        ? await this.sucursalesService.findOne(updateUsuarioDto.sucursal_id)
        : existeUsuario.sucursal;
      const existeCargo = updateUsuarioDto.cargo_id
        ? await this.cargosService.findOne(updateUsuarioDto.cargo_id)
        : existeUsuario.cargo;
      const usuarioToUpdate = {
        ...existeUsuario,
        ...updateUsuarioDto,
        roles: existeRoles,
        sucursal: existeSucursal,
        cargo: existeCargo,
      };
      return this.usuarioRepository.save(usuarioToUpdate);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({
          message: `Error del Servidor. Revisar el metodo (update) de la ruta "usuarios"`,
          error: `${error}`,
        });
      }
    }
  }
  async updateEstado(id: number, estado: { es_activo: boolean }): Promise<Usuario> {
    try {
      const existeUsuario = await this.findOneUsuarioPW(id);

      existeUsuario.es_activo = estado.es_activo;
      delete existeUsuario.contrasenia;
      delete existeUsuario.ci;
      delete existeUsuario.apellidos;
      delete existeUsuario.correo;
      delete existeUsuario.se_cambiado_cntr;
      return this.usuarioRepository.save(existeUsuario);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({
          message: `Error del Servidor. Revisar el metodo (updateEstado) de la ruta "usuarios"`,
          error: `${error}`,
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
      const existeUsuario = await this.findOneUsuarioPW(id);

      const contraseniaCorrecta = await bcrypt.compare(
        contraseniaAntigua,
        existeUsuario.contrasenia,
      );

      if (!contraseniaCorrecta) {
        throw new NotFoundException({
          statusCode: 400,
          message: 'La contraseña anterior no es correcta',
        });
      }

      // Verificar si la nueva contraseña está presente
      if (!updateUsuarioDto.contrasenia) {
        throw new NotFoundException({
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
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (updateContrasenia) de la ruta "usuarios"`,
          error: `${error}`,
        });
      }
    }
  }
  async resetearContrasenia(
    id: number,

  ): Promise<Partial<Usuario>> {
    try {
      const existeUsuario = await this.findOneUsuarioPW(id);

      // Hashea la nueva contraseña antes de actualizarla
      const hashedPassword = await bcrypt.hash(
        existeUsuario.ci,
        10,
      );
      // Actualiza la contraseña del usuario en la base de datos
      existeUsuario.contrasenia = hashedPassword;
      existeUsuario.se_cambiado_cntr = false;

      // Guarda los cambios
      const actualizarUsuario = await this.usuarioRepository.save(existeUsuario);

      // Elimina el campo de contraseña del objeto updatedUser
      delete actualizarUsuario.contrasenia;

      return actualizarUsuario; // Devuelve todos los datos excepto la contraseña
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (updateContrasenia) de la ruta "usuarios"`,
          error: `${error}`,
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
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (remove) de la ruta "usuarios"`,
          error: `${error}`,
        });
      }
    }
  }
}
