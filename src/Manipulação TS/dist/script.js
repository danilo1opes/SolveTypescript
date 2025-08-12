import fetchData from './fetchData.js';
import normalizeTransaction from './normalizeTransaction.js';
import Statistic from './Statistic.js';
async function handleData() {
    const data = await fetchData('https://api.origamid.dev/json/transacoes.json?');
    if (!data)
        return;
    const transacoes = data.map(normalizeTransaction);
    fillTable(transacoes);
    fillStatistic(transacoes);
}
function fillList(lista, containerId) {
    const containerElement = document.getElementById(containerId);
    if (containerElement) {
        Object.keys(lista).forEach((key) => {
            containerElement.innerHTML += `<p>${key}: ${lista[key]}</p>`;
        });
    }
}
function fillTable(transacoes) {
    const tabela = document.querySelector('#transacoes tbody');
    if (!tabela)
        return;
    transacoes.forEach((transacao) => {
        tabela.innerHTML += `
    <tr>
      <td>${transacao.nome}</td>
      <td>${transacao.email}</td>
      <td>R$ ${transacao.moeda}</td>
      <td>${transacao.pagamento}</td>
      <td>${transacao.status}</td>
    </tr>
    `;
    });
}
function fillStatistic(transacoes) {
    const data = new Statistic(transacoes);
    const totalElement = document.querySelector('#total span');
    if (totalElement) {
        totalElement.innerText = data.total.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRl',
        });
    }
    const diaElement = document.querySelector('#dia span');
    if (diaElement) {
        diaElement.innerText = data.melhorDia[0];
    }
    fillList(data.pagamento, 'pagamento');
    fillList(data.status, 'status');
}
handleData();
//# sourceMappingURL=script.js.map