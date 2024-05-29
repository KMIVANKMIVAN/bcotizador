import {

  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UsuariosService } from '../usuarios/usuarios.service';
import * as bcrypt from 'bcrypt';

import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usuariosService: UsuariosService,
    private jwtService: JwtService,
  ) { }

  async signIn(ci: string, contrasenia: string): Promise<any> {
    try {
      const user = await this.usuariosService.findOneByUserCi(ci);

      const isMatch = await bcrypt.compare(contrasenia, user.contrasenia);
      if (isMatch) {
        const roles = user.roles.map(role => role.id);
        const payload = {
          id: user.id,
          ci: user.ci,
          camb_contra: user.se_cambiado_cntr,
          es_activo: user.es_activo,
          roles: roles,
        };
        return {
          tk: await this.jwtService.signAsync(payload),
        };
      } else {
        throw new UnauthorizedException({
          statusCode: 401,
          message: `Se introdujo una contrasena incorecta vuelva a intentarlo`,
        });
      }
    } catch (error) {
      if (error instanceof UnauthorizedException || error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException({

          message: `Error del Servidor en (signIn)`,
          error: `${error}`,
        });
      }
    }
  }
}
