"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alimento = void 0;
var Alimento = /** @class */ (function () {
    function Alimento(nome, peso, preco, tipo) {
        this.nome = nome;
        this.peso = peso;
        this.preco = preco;
        this.tipo = tipo;
    }
    Alimento.prototype.valorTotal = function () {
        this.preco = this.preco + this.preco * 0.5;
        return this.preco;
    };
    Alimento.prototype.comprar = function () {
        console.log("O ".concat(this.nome, " custa R$").concat(this.preco));
    };
    return Alimento;
}());
exports.Alimento = Alimento;
