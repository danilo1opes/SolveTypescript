"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var countBy_js_1 = require("./countBy.js");
function filterValue(transacao) {
    return transacao.valor !== null;
}
var Statistic = /** @class */ (function () {
    function Statistic(transacoes) {
        this.transacoes = transacoes;
        this.total = this.setTotal();
        this.pagamento = this.setPagamento();
        this.status = this.setStatus();
        this.semana = this.setSemana();
        this.melhorDia = this.setMelhorDia();
    }
    Statistic.prototype.setTotal = function () {
        return this.transacoes.filter(filterValue).reduce(function (acc, item) {
            return acc + item.valor;
        }, 0);
    };
    Statistic.prototype.setPagamento = function () {
        return (0, countBy_js_1.default)(this.transacoes.map(function (_a) {
            var pagamento = _a.pagamento;
            return pagamento;
        }));
    };
    Statistic.prototype.setStatus = function () {
        return (0, countBy_js_1.default)(this.transacoes.map(function (_a) {
            var status = _a.status;
            return status;
        }));
    };
    Statistic.prototype.setSemana = function () {
        var _a;
        var semana = (_a = {},
            _a['Domingo'] = 0,
            _a['Segunda'] = 0,
            _a['Terça'] = 0,
            _a['Quarta'] = 0,
            _a['Quinta'] = 0,
            _a['Sexta'] = 0,
            _a['Sábado'] = 0,
            _a);
        for (var i = 0; i < this.transacoes.length; i++) {
            var day = this.transacoes[i].data.getDay();
            if (day === 0)
                semana['Domingo'] += 1;
            if (day === 1)
                semana['Segunda'] += 1;
            if (day === 2)
                semana['Terça'] += 1;
            if (day === 3)
                semana['Quarta'] += 1;
            if (day === 4)
                semana['Quinta'] += 1;
            if (day === 5)
                semana['Sexta'] += 1;
            if (day === 5)
                semana['Sábado'] += 1;
        }
        return semana;
    };
    Statistic.prototype.setMelhorDia = function () {
        return Object.entries(this.semana).sort(function (a, b) {
            return b[1] - a[1];
        })[0];
    };
    return Statistic;
}());
exports.default = Statistic;
