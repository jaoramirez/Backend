import { Produto } from "./Produto";

export class Filmes implements Produto{
    nome: string;
    preco: number;
    tipo: string;

constructor(nome:string,preco:number,tipo:string){
  this.nome = nome
  this.preco = preco 
  this.tipo = tipo 
}

    valorTotal(): number { 
    return this.preco * 0.3
    }

    comprar(): void {
        console.log(`O ${this.nome} custa R$${this.preco}`)
    }

}
