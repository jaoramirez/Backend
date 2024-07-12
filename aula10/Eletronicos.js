"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Eletronico = void 0;
var Eletronico = /** @class */ (function () {
    function Eletronico(marca, nome, preco, tipo) {
        this.marca = marca;
        this.nome = nome;
        this.preco = preco;
        this.tipo = tipo;
    }
    Eletronico.prototype.valorTotal = function () {
        this.preco = this.preco + this.preco * 0.1;
        return this.preco;
    };
    Eletronico.prototype.comprar = function () {
        console.log("O ".concat(this.marca, " ").concat(this.nome, " custa R$").concat(this.preco));
    };
    return Eletronico;
}());
exports.Eletronico = Eletronico;
