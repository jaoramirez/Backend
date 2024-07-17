export class Pizza  {

    sabor:string
    tamanho:string
    preco:number

constructor(sabor:string,tamanho:string,preco:number){
   this.sabor = sabor
   this.tamanho = tamanho
   this.preco = preco 
}
   descrição():void{
     console.log(`Pizza de ${this.sabor}, Tamanho ${this.tamanho}, Preço R$${this.preco}`)
}
}