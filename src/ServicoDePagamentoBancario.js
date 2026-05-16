export default class ServicoDePagamentoBancario {

  #pagamentos
  constructor() {
    this.#pagamentos = [];
  }

  pagar(codigoBarras, empresa, valor) {

    let categoria;

    if (valor > 100) {
      categoria = 'cara';
    } else {
      categoria = 'padrão';
    }

    const pagamento = {
      codigoBarras: codigoBarras,
      empresa: empresa,
      valor: valor,
      categoria: categoria
    };

    this.#pagamentos.push(pagamento);
    return 'Pagamento realizado com sucesso.';
  }

  consultarUltimoPagamento() {

    if (this.#pagamentos.length === 0) {
      return 'Nenhum pagamento efetuado.';
    }

    return this.#pagamentos[this.#pagamentos.length - 1];
  }
}