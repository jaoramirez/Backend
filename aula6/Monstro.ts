import { Guerreiro } from "./Guerreiro"

export class Monstro {

    nome:string
    forca:number
    saude:number
    
    constructor(name:string){
        this.nome = name
        this.forca = 50
        this.saude = 10
    }

    atacarGuerreiro(guerreiro:Monstro):void {
        console.log(`${this.nome} ataca ${guerreiro.nome}`)
        guerreiro.receberDano(this.forca);}
    
        receberDano(dano:number ):void{
            this.saude -= dano
            console.log(`${this.nome} recebe ${dano} de dano.`)
            if (this.saude <= 0){
                console.log(`${this.nome} foi derrotado!`)
            }
        }
        info():void {
            console.log(`O monstro${this.nome} tem ${this.saude} de saude.`)
        }
}

