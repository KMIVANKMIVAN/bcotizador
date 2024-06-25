"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalizeTextos = void 0;
function capitalizeTextos(text) {
    if (!text)
        return text;
    return text
        .split(' ')
        .map(word => {
        if (word.length === 2 && word !== word.toLowerCase()) {
            return word;
        }
        else if (word.length === 2) {
            return word.toLowerCase();
        }
        else if (word === word.toUpperCase()) {
            return word;
        }
        else {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
    })
        .join(' ');
}
exports.capitalizeTextos = capitalizeTextos;
//# sourceMappingURL=capitalizeTextos.js.map