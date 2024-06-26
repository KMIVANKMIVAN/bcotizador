import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';

import { Usuario } from '../usuarios/entities/usuario.entity';
import { Sucursal } from '../sucursales/entities/sucursal.entity';
import { Rol } from '../roles/entities/rol.entity';
import { Ciudad } from 'src/ciudades/entities/ciudad.entity';

import { Cargo } from 'src/empresa/cargos/entities/cargo.entity';
import { Unidad } from 'src/empresa/unidades/entities/unidade.entity';
import { Direccion } from 'src/empresa/direcciones/entities/direccion.entity';
import { Empresa } from 'src/empresa/empresas/entities/empresa.entity';

import {
  SEMILLA_CIUDADES,
  SEMILLA_ROLES,
  SEMILLA_SUCURSAL,
  SEMILLA_USUARIOS,
  SEMILLA_CARGO,
  SEMILLA_UNIDAD,
  SEMILLA_DIRECCION,
  SEMILLA_EMPRESA
} from './datos/semilla-datos';

import { UsuariosService } from '../usuarios/usuarios.service';
import { SucursalesService } from '../sucursales/sucursales.service';
import { RolesService } from '../roles/roles.service';
import { CiudadesService } from 'src/ciudades/ciudades.service';

import { CargosService } from 'src/empresa/cargos/cargos.service';
import { UnidadesService } from 'src/empresa/unidades/unidades.service';
import { DireccionesService } from 'src/empresa/direcciones/direcciones.service';
import { EmpresasService } from 'src/empresa/empresas/empresas.service';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SemillasService {
  private isProd: boolean;

  constructor(
    private readonly configService: ConfigService,

    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
    @InjectRepository(Sucursal)
    private readonly sucursaleRepository: Repository<Sucursal>,
    @InjectRepository(Ciudad)
    private readonly ciudadRepository: Repository<Ciudad>,
    @InjectRepository(Rol)
    private readonly roleRepository: Repository<Rol>,

    private readonly sucursalesService: SucursalesService,
    private readonly ciudadesService: CiudadesService,
    private readonly rolesService: RolesService,
    private readonly usuarioService: UsuariosService,

    private readonly cargosService: CargosService,
    private readonly unidadesService: UnidadesService,
    private readonly direccionesService: DireccionesService,
    private readonly empresasService: EmpresasService,

  ) {
    this.isProd = configService.get('STATE') === 'prod';
  }

  async ejecutarSemilla() {
    try {
      if (this.isProd) {
        throw new BadRequestException({
          error: `Error al ejecutar la semilla`,
          message: `Problemas en la ejecucion de la semilla`,
        });
      }

      // Limpiar la base de datos BORRAR TODO
      await this.eliminarDatabase();

      //?EJECUTAR POR ORDEN
      await this.crearCiudades();
      await this.crearRoles();
      await this.crearEmpresas();

      await this.crearDirecciones();
      await this.crearUnidades();
      await this.crearCargos();
      await this.crearSucursales();
      await this.crearUsuarios();

      return true;
    } catch (error) {
      // Manejo de excepciones
      throw new InternalServerErrorException({
        message: `Error del Servidor. Revisar el metodo (ejecutarSemilla) de la ruta "semillas"`,
        error: error,
      });
    }
  }

  async eliminarDatabase() {
    await this.usuarioRepository
      .createQueryBuilder()
      .delete()
      .where({})
      .execute();

    await this.sucursaleRepository
      .createQueryBuilder()
      .delete()
      .where({})
      .execute();

    await this.ciudadRepository
      .createQueryBuilder()
      .delete()
      .where({})
      .execute();

    await this.roleRepository.createQueryBuilder().delete().where({}).execute();
  }

  //!CREAR PRIMARIOS LOS QUE NO DEPENDEN DE NADIE
  async crearCiudades(): Promise<Ciudad> {
    const ciudades = [];
    for (const ciudad of SEMILLA_CIUDADES) {
      ciudades.push(await this.ciudadesService.createSemilla(ciudad));
    }
    return ciudades[0];
  }
  async crearRoles(): Promise<Rol> {
    const roles = [];
    for (const rol of SEMILLA_ROLES) {
      roles.push(await this.rolesService.create(rol));
    }
    return roles[0];
  }
  async crearEmpresas(): Promise<Empresa> {
    const empresas = [];
    for (const empresa of SEMILLA_EMPRESA) {
      empresas.push(await this.empresasService.create(empresa));
    }
    return empresas[0];
  }

  //!CREAR DEPENDIENTES EN ORDEN
  async crearDirecciones(): Promise<Direccion> {
    const direcciones = [];
    for (const direccion of SEMILLA_DIRECCION) {
      direcciones.push(await this.direccionesService.create(direccion));
    }
    return direcciones[0];
  }
  async crearUnidades(): Promise<Unidad> {
    const unidades = [];
    for (const unidad of SEMILLA_UNIDAD) {
      unidades.push(await this.unidadesService.create(unidad));
    }
    return unidades[0];
  }
  async crearCargos(): Promise<Cargo> {
    const cargos = [];
    for (const cargo of SEMILLA_CARGO) {
      cargos.push(await this.cargosService.create(cargo));
    }
    return cargos[0];
  }
  async crearSucursales(): Promise<Sucursal> {
    const sucursales = [];
    for (const sucursal of SEMILLA_SUCURSAL) {
      sucursales.push(await this.sucursalesService.create(sucursal));
    }
    return sucursales[0];
  }
  async crearUsuarios(): Promise<Usuario> {
    const usuarios = [];
    for (const usuario of SEMILLA_USUARIOS) {
      usuarios.push(await this.usuarioService.createSemilla(usuario));
    }
    return usuarios[0];
  }
}
