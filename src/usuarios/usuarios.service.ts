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
import { validate } from 'class-validator';
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
      if (error instanceof NotFoundException || error instanceof BadRequestException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor. Revisar el metodo (create) de la ruta "usuarios"`,
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
      console.log("updateUsuarioDto", updateUsuarioDto);

      const existeUsuario = await this.usuarioRepository.findOne({ where: { id } });
      if (!existeUsuario) {
        throw new NotFoundException(`Usuario with ID ${id} not found`);
      }

      const existeRoles = updateUsuarioDto.roles
        ? await this.rolesService.findByIds(updateUsuarioDto.roles)
        : existeUsuario.roles;
      console.log("existeRoles", existeRoles);

      const existeSucursal = updateUsuarioDto.sucursal_id
        ? await this.sucursalesService.findOne(updateUsuarioDto.sucursal_id)
        : existeUsuario.sucursal;
      console.log("existeSucursal", existeSucursal);

      const existeCargo = updateUsuarioDto.cargo_id
        ? await this.cargosService.findOne(updateUsuarioDto.cargo_id)
        : existeUsuario.cargo;
      console.log("existeCargo", existeCargo);

      const usuarioToUpdate = {
        ...existeUsuario,
        ...updateUsuarioDto,
        roles: existeRoles,
        sucursal: existeSucursal,
        cargo: existeCargo,
      };
      console.log("usuarioToUpdate", usuarioToUpdate);

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

  /* async update(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<Usuario> {
    try {
      console.log("updateUsuarioDto", updateUsuarioDto);
      const existeUsuario = await this.findOne(id)

      const existeRoles = await this.rolesService.findByIds(updateUsuarioDto.roles);
      console.log("existeRoles", existeRoles);

      const existeSucursal = await this.sucursalesService.findOne(updateUsuarioDto.sucursal_id);
      console.log("existeSucursal", existeSucursal);

      const existeCargo = await this.cargosService.findOne(updateUsuarioDto.cargo_id);
      console.log("existeCargo", existeCargo);

      const usuario = await this.usuarioRepository.preload({
        id,
        ...updateUsuarioDto,
        roles: existeRoles,
        sucursal: existeSucursal,
        cargo: existeCargo
      });
      console.log("usuario", usuario);

      return this.usuarioRepository.save(usuario);
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
  } */
  /* async update(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<Usuario> {
    try {
      console.log("updateUsuarioDto", updateUsuarioDto);

      const existeRoles = await this.rolesService.findByIds(updateUsuarioDto.roles);
      console.log("existeRoles", existeRoles);

      const existeSucursal = await this.sucursalesService.findOne(updateUsuarioDto.sucursal_id);
      console.log("existeSucursal", existeSucursal);

      const existeCargo = await this.cargosService.findOne(updateUsuarioDto.cargo_id);
      console.log("existeCargo", existeCargo);

      const usuario = await this.usuarioRepository.preload({
        id,
        ...updateUsuarioDto,
        roles: existeRoles,
        sucursal: existeSucursal,
        cargo: existeCargo
      });
      console.log("usuario", usuario);

      return this.usuarioRepository.save(usuario);
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
  } */
  /* async update(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<Usuario> {
    console.log("updateUsuarioDto", updateUsuarioDto);
    try {
      const usuario = await this.findOne(id);

      if (updateUsuarioDto.roles) {
        const roles = await this.rolesService.findByIds(updateUsuarioDto.roles);
        console.log("roles", roles);
        usuario.roles = roles;

      }

      if (updateUsuarioDto.sucursal_id) {
        const sucursal = await this.sucursalesService.findOne(updateUsuarioDto.sucursal_id);
        if (sucursal) {
          usuario.sucursal = sucursal;
        }
      }

      if (updateUsuarioDto.cargo_id) {
        const cargo = await this.cargosService.findOne(updateUsuarioDto.cargo_id);
        if (cargo) {
          usuario.cargo = cargo;
        }
      }
      console.log("usuario", usuario);

      Object.assign(usuario, updateUsuarioDto);
      return this.usuarioRepository.save(usuario);
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
  } */

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
      console.log("contraseniaCorrecta", contraseniaCorrecta);
      // console.log("",);


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
