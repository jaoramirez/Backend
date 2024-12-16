import { Pizza } from "./SaborPizza";
import { sabor } from "./Sabor";
import { preco } from "./Preço";
import { tamanho } from "./tamanho";

const pizza1= new Pizza (sabor.sabor1,tamanho.tam1,preco.grande)
const pizza2= new Pizza (sabor.sabor2,tamanho.tam2,preco.media)
const pizza3= new Pizza (sabor.sabor3,tamanho.tam3,preco.pequena)

console.log(pizza1.descrição())
console.log(pizza2.descrição())
console.log(pizza3.descrição())