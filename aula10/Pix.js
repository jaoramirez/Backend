"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pix = void 0;
var Pix = /** @class */ (function () {
    function Pix(nome) {
        this.nome = nome;
    }
    Pix.prototype.pagar = function () {
        console.log("Voc\u00EA pagou no ".concat(this.nome, " o total de: "));
    };
    return Pix;
}());
exports.Pix = Pix;
