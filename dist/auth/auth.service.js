"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const usuarios_service_1 = require("../usuarios/usuarios.service");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(usuariosService, jwtService) {
        this.usuariosService = usuariosService;
        this.jwtService = jwtService;
    }
    async signIn(ci, contrasenia) {
        try {
            const user = await this.usuariosService.findOneByUserCi(ci);
            const isMatch = await bcrypt.compare(contrasenia, user.contrasenia);
            if (isMatch) {
                const payload = {
                    sub: user.id,
                    username: user.ci,
                    camb_contra: user.se_cambiado_cntr,
                };
                return {
                    tk: await this.jwtService.signAsync(payload),
                };
            }
            else {
                throw new common_1.UnauthorizedException({
                    statusCode: 401,
                    error: `Se introdujo una contrasena Incorecta`,
                    message: `Se introdujo una contrasena incorecta vuelva a intentarlo`,
                });
            }
        }
        catch (error) {
            if (error instanceof common_1.UnauthorizedException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    statusCode: 500,
                    error: `Error del Servidor en (signIn): ${error}`,
                    message: `Error del Servidor en (signIn): ${error}`,
                });
            }
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [usuarios_service_1.UsuariosService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map