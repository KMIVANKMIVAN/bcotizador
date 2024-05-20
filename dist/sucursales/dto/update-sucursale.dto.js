"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSucursaleDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_sucursale_dto_1 = require("./create-sucursale.dto");
class UpdateSucursaleDto extends (0, mapped_types_1.PartialType)(create_sucursale_dto_1.CreateSucursaleDto) {
}
exports.UpdateSucursaleDto = UpdateSucursaleDto;
//# sourceMappingURL=update-sucursale.dto.js.map