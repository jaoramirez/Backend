import { Produto } from "./Produto";

export class Eletronico implements Produto{
    nome: string;
    preco: number;
    tipo: string;
    marca:string
constructor(marca:string,nome:string,preco:number,tipo:string){
  this.marca = marca
  this.nome = nome
  this.preco = preco 
  this.tipo = tipo 
}
    valorTotal(): number {
        return this.preco + 13%this.preco
    }

    comprar(): void {
        console.log(`O ${this.marca} ${this.nome} custa R$${this.preco}`)
    }

}

