"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartaoCredito = void 0;
var CartaoCredito = /** @class */ (function () {
    function CartaoCredito(nome) {
        this.nome = nome;
    }
    CartaoCredito.prototype.pagar = function () {
        console.log("Voc\u00EA pagou no ".concat(this.nome, " o total de: "));
    };
    return CartaoCredito;
}());
exports.CartaoCredito = CartaoCredito;
