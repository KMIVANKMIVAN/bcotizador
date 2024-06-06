"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOrientacionDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_orientacion_dto_1 = require("./create-orientacion.dto");
class UpdateOrientacionDto extends (0, mapped_types_1.PartialType)(create_orientacion_dto_1.CreateOrientacionDto) {
}
exports.UpdateOrientacionDto = UpdateOrientacionDto;
//# sourceMappingURL=update-orientacion.dto.js.map