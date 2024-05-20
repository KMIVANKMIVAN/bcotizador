"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDireccioneDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_direccione_dto_1 = require("./create-direccione.dto");
class UpdateDireccioneDto extends (0, mapped_types_1.PartialType)(create_direccione_dto_1.CreateDireccioneDto) {
}
exports.UpdateDireccioneDto = UpdateDireccioneDto;
//# sourceMappingURL=update-direccione.dto.js.map