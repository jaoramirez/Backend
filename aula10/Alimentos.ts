import { Produto } from "./Produto";



export class Alimento implements Produto{
    nome: string;
    peso: number;
    preco: number;
    tipo: string;

constructor(nome:string,peso:number,preco:number,tipo:string){
  this.nome = nome
  this.peso = peso 
  this.preco = preco 
  this.tipo = tipo 
}
  valorTotal(): number {
    
    return this.preco * 0.5
  }

    comprar(): void {
      console.log(`O ${this.nome} custa R$${this.preco}`)
    }

}

