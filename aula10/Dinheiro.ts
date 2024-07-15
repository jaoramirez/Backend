import { MetodoDePagamento } from "./MetodoDePagamento";

export class Dinheiro implements MetodoDePagamento{
    nome: string;
    constructor(nome:string){
        this.nome = nome
    }
    pagar():void{
        console.log(`Você pagou no ${this.nome} o total de: `)
    }

}