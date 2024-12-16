"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guerreiro = void 0;
var Guerreiro = /** @class */ (function () {
    function Guerreiro(name, type, power) {
        this.nome = name;
        this.tipo = type;
        this.forca = power;
        this.saude = 100;
    }
    Guerreiro.prototype.atacarMonstro = function (monstro) {
        console.log("".concat(this.nome, " ataca ").concat(monstro.nome));
        monstro.receberDano(this.forca);
    };
    Guerreiro.prototype.receberDano = function (dano) {
        this.saude -= dano;
        console.log("".concat(this.nome, " recebe ").concat(dano, " de dano."));
        if (this.saude <= 0) {
            console.log("".concat(this.nome, " foi derrotado"));
        }
    };
    Guerreiro.prototype.info = function () {
        console.log("O guerreiro ".concat(this.nome, " do tipo ").concat(this.tipo, " tem ").concat(this.saude, "."));
    };
    return Guerreiro;
}());
exports.Guerreiro = Guerreiro;
