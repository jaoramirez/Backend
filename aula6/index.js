"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Guerreiro_1 = require("./Guerreiro");
var Monstro_1 = require("./Monstro");
var meuGuerreiro = new Guerreiro_1.Guerreiro('Jorge', 'paldino', 100);
var monstro = new Monstro_1.Monstro('dragao');
meuGuerreiro.atacarMonstro(monstro);
monstro.info();
