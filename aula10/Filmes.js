"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filmes = void 0;
var Filmes = /** @class */ (function () {
    function Filmes(nome, preco, tipo) {
        this.nome = nome;
        this.preco = preco;
        this.tipo = tipo;
    }
    Filmes.prototype.valorTotal = function () {
        return this.preco + 0.3 % this.preco;
    };
    Filmes.prototype.comprar = function () {
        console.log("O ".concat(this.nome, " custa R$").concat(this.preco));
    };
    return Filmes;
}());
exports.Filmes = Filmes;
