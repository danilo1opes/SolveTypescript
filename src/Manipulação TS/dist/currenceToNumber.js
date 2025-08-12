export default function currenceToNumber(moeda) {
    const numero = Number(moeda.replaceAll('.', '').replace(',', '.'));
    return isNaN(numero) ? null : numero;
}
//# sourceMappingURL=currenceToNumber.js.map