"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var Alimentos_1 = require("./Alimentos");
var Eletronicos_1 = require("./Eletronicos");
var Filmes_1 = require("./Filmes");
var Cart_oCredito_1 = require("./Cart\u00E3oCredito");
var Dinheiro_1 = require("./Dinheiro");
var Pix_1 = require("./Pix");
var Arroz = new Alimentos_1.Alimento('Arroz', 1000, 6.50, 'Perecivel');
var Feijao = new Alimentos_1.Alimento('Feijao', 1000, 5.50, 'Perecivel');
var Celular = new Eletronicos_1.Eletronico('Sansung', 'S23', 2500, 'Eletronico');
var NotBook = new Eletronicos_1.Eletronico('Dell', 'G15', 5300, 'Eletronico');
var ProcurandoNemo = new Filmes_1.Filmes('Procurando Nemo', 13.70, 'Filme');
var GenteGrande = new Filmes_1.Filmes('Gente Grande', 10.50, 'Filme');
var numero = -1;
var opcao = -1;
var carrinho = [];
var valor = 0;
var pagar = -1;
var dinheiro = new Dinheiro_1.Dinheiro("dinheiro");
var cartao = new Cart_oCredito_1.CartaoCredito("cart\u00E3o de credito");
var pix = new Pix_1.Pix("pix");
while (numero != 4) {
    numero = Number(readlineSync.question("\n  Menu:\n\n  1) Comprar Produto; \n  2) Ver Carrinho; \n  3) Pagar; \n  4) Sair; \n  \n  Escolha uma das opcoes: "));
    switch (numero) {
        case 1:
            while (opcao != 7) {
                opcao = Number(readlineSync.question("\n\n    1-".concat(Arroz.tipo, ", ").concat(Arroz.nome, " : R$").concat(Arroz.valorTotal(), "\n    2-").concat(Feijao.tipo, ", ").concat(Feijao.nome, " : R$").concat(Feijao.valorTotal(), "\n    3-").concat(Celular.marca, ", ").concat(Celular.nome, " : R$").concat(Celular.valorTotal(), "\n    4-").concat(NotBook.marca, ", ").concat(NotBook.nome, " : R$").concat(NotBook.valorTotal(), "\n    5-").concat(ProcurandoNemo.tipo, ", ").concat(ProcurandoNemo.nome, " : R$").concat(ProcurandoNemo.valorTotal(), "\n    6-").concat(GenteGrande.tipo, ", ").concat(GenteGrande.nome, " : R$").concat(GenteGrande.valorTotal(), "\n    7- Cancelar;\n\n    Escolha o numero do produto que deseja adicionar ao carrinho: ")));
                if (opcao === 1) {
                    carrinho.push(Arroz);
                    valor = valor + Arroz.valorTotal();
                }
                if (opcao === 2) {
                    carrinho.push(Feijao);
                    valor = valor + Feijao.valorTotal();
                }
                if (opcao === 3) {
                    carrinho.push(Celular);
                    valor = valor + Celular.valorTotal();
                }
                if (opcao === 4) {
                    carrinho.push(NotBook);
                    valor = valor + NotBook.valorTotal();
                }
                if (opcao === 5) {
                    carrinho.push(ProcurandoNemo);
                    valor = valor + ProcurandoNemo.valorTotal();
                }
                if (opcao === 6) {
                    carrinho.push(GenteGrande);
                    valor = valor + GenteGrande.valorTotal();
                }
            }
            break;
        case 2:
            console.log("\nProdutos no seu carrinho:\n      ");
            carrinho.forEach(function (produto, indice) {
                console.log("".concat(produto.tipo, ", ").concat(produto.nome, ", R$").concat(produto.valorTotal()));
            });
            console.log("\n Valor total do seu carrinho: R$".concat(valor));
            break;
        case 3:
            pagar = Number(readlineSync.question(" \n\n  Escolha o metodo de pagamento:\n\n  1- Cartao de Credito;\n  2- Dinheiro;\n  3- Pix;\n  4- Canselar Pagamento;\n\n  Metodo desejado de pagamento desejado: "));
            switch (pagar) {
                case 1:
                    carrinho.splice(0, carrinho.length);
                    cartao.pagar();
                    console.log(valor);
                    valor = 0;
                    break;
                case 2:
                    carrinho.splice(0, carrinho.length);
                    dinheiro.pagar();
                    console.log(valor);
                    valor = 0;
                    break;
                case 3:
                    carrinho.splice(0, carrinho.length);
                    pix.pagar();
                    console.log(valor);
                    valor = 0;
                    break;
            }
    }
}
