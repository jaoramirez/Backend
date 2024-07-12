"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var Alimentos_1 = require("./Alimentos");
var Eletronicos_1 = require("./Eletronicos");
var Filmes_1 = require("./Filmes");
var Arroz = new Alimentos_1.Alimento('Arroz', 1000, 6.50, 'Perecivel');
var Feijao = new Alimentos_1.Alimento('Feijão', 1000, 5.50, 'Perecivel');
var Celular = new Eletronicos_1.Eletronico('Sansung', 'S23', 2500, 'Eletronico');
var NotBook = new Eletronicos_1.Eletronico('Dell', 'G15', 5300, 'Eletronico');
var ProcurandoNemo = new Filmes_1.Filmes('Procurando Nemo', 15.70, 'Filme');
var GenteGrande = new Filmes_1.Filmes('Gente Grande', 13.50, 'Filme');
var numero = -1;
var opcao = -1;
while (numero != 4) {
    numero = Number(readlineSync.question("1) Comprar Produto; \n2) Ver Carrinhp; \n3) Pagar; \n4) Sair; \nEscolha um numero: "));
    switch (numero) {
        case 1:
            while (opcao != 7) {
                opcao = Number(readlineSync.question("\n    1-".concat(Arroz.tipo, ", ").concat(Arroz.nome, " : R$").concat(Arroz.valorTotal(), "\n    2-").concat(Feijao.tipo, ", ").concat(Feijao.nome, " : R$").concat(Feijao.valorTotal(), "\n    3-").concat(Celular.marca, ", ").concat(Celular.nome, " : R$").concat(Celular.valorTotal(), "\n    4-").concat(NotBook.marca, ", ").concat(NotBook.nome, " : R$").concat(NotBook.valorTotal(), "\n    5-").concat(ProcurandoNemo.tipo, ", ").concat(ProcurandoNemo.nome, " : R$").concat(ProcurandoNemo.valorTotal(), "\n    6-").concat(GenteGrande.tipo, ", ").concat(GenteGrande.nome, " : R$").concat(GenteGrande.valorTotal(), "\n\n    ")));
            }
    }
}
