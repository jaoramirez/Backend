import { Monstro } from "./Monstro"

export class Guerreiro {

nome:string
tipo:string
forca:number
saude:number

constructor(name:string,type:string,power:number){
    this.nome = name
    this.tipo = type
    this.forca = power
    this.saude = 100
}

atacarMonstro(monstro:Monstro):void {
    console.log(`${this.nome} ataca ${monstro.nome}`)
    monstro.receberDano(this.forca);}

    receberDano(dano:number ):void{
        this.saude -= dano
        console.log(`${this.nome} recebe ${dano} de dano.`)
        if (this.saude <= 0){
            console.log(`${this.nome} foi derrotado`)
        }
    }
    info():void {
        console.log(`O guerreiro ${this.nome} do tipo ${this.tipo} tem ${this.saude}.`)
    }
}
