import currenceToNumber from './currenceToNumber.js';
import stringToDate from './stringToDate.js';
export default function normalizeTransaction(transacao) {
    return {
        nome: transacao.Nome,
        id: transacao.ID,
        data: stringToDate(transacao.Data),
        status: transacao.Status,
        email: transacao.Email,
        moeda: transacao['Valor (R$)'],
        valor: currenceToNumber(transacao['Valor (R$)']),
        pagamento: transacao['Forma de Pagamento'],
        novo: Boolean(transacao['Cliente Novo']),
    };
}
//# sourceMappingURL=normalizeTransaction.js.map