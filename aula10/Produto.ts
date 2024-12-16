export interface Produto {
    nome:string
    peso?:number
    preco:number
    tipo:string
    marac?:string
    comprar():void
    valorTotal():number 
}