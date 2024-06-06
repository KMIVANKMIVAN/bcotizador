"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalizeTextos = void 0;
function capitalizeTextos(text) {
    if (!text)
        return text;
    return text
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}
exports.capitalizeTextos = capitalizeTextos;
//# sourceMappingURL=capitalizeTextos.js.map