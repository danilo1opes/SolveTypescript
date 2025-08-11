"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = normalizeTransaction;
var currenceToNumber_js_1 = require("./currenceToNumber.js");
var stringToDate_js_1 = require("./stringToDate.js");
function normalizeTransaction(transacao) {
    return {
        nome: transacao.Nome,
        id: transacao.ID,
        data: (0, stringToDate_js_1.default)(transacao.Data),
        status: transacao.Status,
        email: transacao.Email,
        moeda: transacao['Valor (R$)'],
        valor: (0, currenceToNumber_js_1.default)(transacao['Valor (R$)']),
        pagamento: transacao['Forma de Pagamento'],
        novo: Boolean(transacao['Cliente Novo']),
    };
}
