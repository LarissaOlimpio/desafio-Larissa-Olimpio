class CaixaDaLanchonete {
  constructor() {
    this.tabelaItens = {
      cafe: { descricao: "Café", valor: 3.0 },
      chantily: { descricao: "Chantily (extra do Café)", valor: 1.5 },
      suco: { descricao: "Suco Natural", valor: 6.2 },
      sanduiche: { descricao: "Sanduíche", valor: 6.5 },
      queijo: { descricao: "Queijo (extra do Sanduíche)", valor: 2.0 },
      salgado: { descricao: "Salgado", valor: 7.25 },
      combo1: { descricao: "1 Suco e 1 Sanduíche", valor: 9.5 },
      combo2: { descricao: "1 Café e 1 Sanduíche", valor: 7.5 },
    };
  }
  verificaItensExtraSemPrincipal(itens = []) {
    const codigoItem = itens.map((item) => item.split(",")[0]);
    const temCafe = codigoItem.includes("cafe");
    const temSanduiche = codigoItem.includes("sanduiche");

    return (
      !(codigoItem.includes("chantily") && !temCafe) &&
      !(codigoItem.includes("queijo") && !temSanduiche)
    );
  }

  aplicaDesconto(valorTotal) {   // Desconto de 5% para pagamento em dinheiro
    let desconto = 0.05 * valorTotal;
    return (valorTotal = valorTotal - desconto);
  }
 
  aplicaAcrescimo(valorTotal) {  //Acréscimo de 3% para pagamento a crédito
    let acrescimo = 0.03 * valorTotal;
    return (valorTotal = acrescimo + valorTotal);
  }
  calcularValorDaCompra(metodoDePagamento, itens) {
    
    let valorTotal = 0;

    const itensLowerCase = [];

    if (!itens || itens.length == 0 || itens == "") {
      return "Não há itens no carrinho de compra!";
    } else {
      for (let i = 0; i < itens.length; i++) {
        itensLowerCase.push(itens[i].toLowerCase());
      }

      if (!this.verificaItensExtraSemPrincipal(itens)) {
        return "Item extra não pode ser pedido sem o principal";
      }

      const quantidadePorItem = {};
      itensLowerCase.forEach((item) => {
        const partes = item.split(",");
        const nome = partes[0];
        const quantidade = parseInt(partes[1]);

        if (quantidadePorItem[nome]) {
          quantidadePorItem[nome] += quantidade;
        } else {
          quantidadePorItem[nome] = quantidade;
        }
      });

      for (const item in quantidadePorItem) {
        if (quantidadePorItem[item] === 0) {
          return "Quantidade inválida!";
        }

        if (this.tabelaItens.hasOwnProperty(item)) {
          const valorItem = this.tabelaItens[item].valor;
          const quantidade = quantidadePorItem[item];
          valorTotal += valorItem * quantidade;
        } else {
          return "Item inválido!";
        }
      }

      if (metodoDePagamento === "debito") {
        valorTotal = valorTotal;
      } else if (metodoDePagamento === "dinheiro") {
        valorTotal = this.aplicaDesconto(valorTotal);
      } else if (metodoDePagamento === "credito") {
        valorTotal = this.aplicaAcrescimo(valorTotal);
      } else {
        return "Forma de pagamento inválida!";
      }

      valorTotal = `R$ ${valorTotal.toFixed(2).toString().replace(".", ",")}`;

      return valorTotal;
    }
  }
}

export { CaixaDaLanchonete };
