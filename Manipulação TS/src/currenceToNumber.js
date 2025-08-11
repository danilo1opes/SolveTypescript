"use strict";
/**
 * Recebe string '1.200,50' retorna number: 1200.50
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = currenceToNumber;
function currenceToNumber(moeda) {
    var numero = Number(moeda.replaceAll('.', '').replace(',', '.'));
    return isNaN(numero) ? null : numero;
}
