import { Guerreiro } from "./Guerreiro";
import { Monstro } from "./Monstro";

let meuGuerreiro = new Guerreiro ('Jorge','paldino',100);
let monstro = new Monstro ('dragao')

meuGuerreiro.atacarMonstro(monstro)
monstro.info()