"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monstro = void 0;
var Monstro = /** @class */ (function () {
    function Monstro(name) {
        this.nome = name;
        this.forca = 50;
        this.saude = 10;
    }
    Monstro.prototype.atacarGuerreiro = function (guerreiro) {
        console.log("".concat(this.nome, " ataca ").concat(guerreiro.nome));
        guerreiro.receberDano(this.forca);
    };
    Monstro.prototype.receberDano = function (dano) {
        this.saude -= dano;
        console.log("".concat(this.nome, " recebe ").concat(dano, " de dano."));
        if (this.saude <= 0) {
            console.log("".concat(this.nome, " foi derrotado!"));
        }
    };
    Monstro.prototype.info = function () {
        console.log("O monstro".concat(this.nome, " tem ").concat(this.saude, " de saude."));
    };
    return Monstro;
}());
exports.Monstro = Monstro;
