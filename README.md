



# Caixa da Lanchonete

O desafio é automatizar o caixa da Lanchonete da DB. A missão será construir a lógica que calcula o valor de uma compra de acordo com o cardápio, regras e descontos da Lanchonete.


## Requisitos:
FORMAS DE PAGAMENTO:  </br>
Atualmente a Lanchonete aceita as seguintes formas de pagamento: </br>

* dinheiro 
* debito 
* credito 

O sistema deve receber essa informação como string, utilizando a grafia exatamente igual aos exemplos acima.

DESCONTOS E TAXAS:  </br>
* Pagamento em dinheiro tem 5% de desconto
* Pagamento a crédito tem acréscimo de 3% no valor total </br>

OUTRAS REGRAS:  </br>
* Caso item extra seja informado num pedido que não tenha o respectivo item principal, apresentar mensagem "Item extra não pode ser pedido sem o principal".
* Combos não são considerados como item principal.
* É possível pedir mais de um item extra sem precisar de mais de um principal.
* Se não forem pedidos itens, apresentar mensagem "Não há itens no carrinho de compra!"
* Se a quantidade de itens for zero, apresentar mensagem "Quantidade inválida!".
* Se o código do item não existir, apresentar mensagem "Item inválido!"
* Se a forma de pagamento não existir, apresentar mensagem "Forma de pagamento inválida!"


| Tecnologia      | Versão       |
|-----------------|--------------|
| JavaScript      | ES6          |


## Como Utilizar
1. Faça o clone do repositório para o seu computador.
2. Acesse a pasta do projeto através do terminal ou prompt de comando.
3. Instale o node `https://nodejs.org/en`
4. Instale as dependências do projeto com o comando: npm install ou yarn install.
5. Para validar as soluções utilize o comando npm test


## Contato
Se tiver alguma dúvida ou precisar de mais informações, entre em contato através do email: lrsolimpio@gmail.com
