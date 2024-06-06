"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRoleDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_rol_dto_1 = require("./create-rol.dto");
class UpdateRoleDto extends (0, mapped_types_1.PartialType)(create_rol_dto_1.CreateRoleDto) {
}
exports.UpdateRoleDto = UpdateRoleDto;
//# sourceMappingURL=update-rol.dto.js.map