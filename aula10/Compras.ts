import * as readlineSync from 'readline-sync';

import { Alimento } from './Alimentos';
import { Eletronico } from './Eletronicos';
import { Filmes } from './Filmes';
import { Produto } from './Produto';
import { CartaoCredito } from './CartãoCredito';
import { Dinheiro } from './Dinheiro';
import { Pix } from './Pix';

const Arroz = new Alimento ('Arroz',1000,6.50,'Perecivel')
const Feijao = new Alimento ('Feijao',1000,5.50,'Perecivel')

const Celular = new Eletronico ('Sansung','S23',2500,'Eletronico')
const NotBook = new Eletronico ('Dell','G15',5300,'Eletronico')

const ProcurandoNemo = new Filmes ('Procurando Nemo',13.70,'Filme')
const GenteGrande = new Filmes ('Gente Grande',10.50,'Filme')

let numero:number = -1
let opcao:number = -1

let carrinho:Array<Produto> = []
let valor:number = 0
let pagar:number = -1

let dinheiro:Dinheiro = new Dinheiro(`dinheiro`)
let cartao:CartaoCredito = new CartaoCredito(`cartão de credito`)
let pix:Pix = new Pix(`pix`)

while(numero != 4) {
numero = Number(readlineSync.question(`
  Menu:

  1) Comprar Produto; 
  2) Ver Carrinho; 
  3) Pagar; 
  4) Sair; 
  
  Escolha uma das opcoes: `))

switch(numero){

  case 1 :
while(opcao!= 7){
opcao = Number(readlineSync.question(`

    1-${Arroz.tipo}, ${Arroz.nome} : R$${Arroz.valorTotal()}
    2-${Feijao.tipo}, ${Feijao.nome} : R$${Feijao.valorTotal()}
    3-${Celular.marca}, ${Celular.nome} : R$${Celular.valorTotal()}
    4-${NotBook.marca}, ${NotBook.nome} : R$${NotBook.valorTotal()}
    5-${ProcurandoNemo.tipo}, ${ProcurandoNemo.nome} : R$${ProcurandoNemo.valorTotal()}
    6-${GenteGrande.tipo}, ${GenteGrande.nome} : R$${GenteGrande.valorTotal()}
    7- Cancelar;

    Escolha o numero do produto que deseja adicionar ao carrinho: `))

    if(opcao === 1){
      carrinho.push(Arroz)
     valor = valor + Arroz.valorTotal()}

    if(opcao === 2){
      carrinho.push(Feijao)
      valor = valor + Feijao.valorTotal()}

    if(opcao === 3){
      carrinho.push(Celular)
      valor = valor + Celular.valorTotal()}

    if(opcao === 4){
      carrinho.push(NotBook)
      valor = valor + NotBook.valorTotal()}

    if(opcao === 5){
      carrinho.push(ProcurandoNemo)
    valor = valor + ProcurandoNemo.valorTotal()}

    if(opcao === 6){
      carrinho.push(GenteGrande)
      valor = valor + GenteGrande.valorTotal()}

    }
   break;

  case 2 :
    console.log(`\nProdutos no seu carrinho:
      `)
    carrinho.forEach(function(produto, indice) {
      console.log(`${produto.tipo}, ${produto.nome}, R$${produto.valorTotal()}`)
    })
    
    console.log(`\n Valor total do seu carrinho: R$${valor}`)
    break;

  case 3 : 
pagar = Number(readlineSync.question(` 

  Escolha o metodo de pagamento:

  1- Cartao de Credito;
  2- Dinheiro;
  3- Pix;
  4- Canselar Pagamento;

  Metodo desejado de pagamento desejado: `))
 
switch(pagar){

case 1:
carrinho.splice(0, carrinho.length)
cartao.pagar()
console.log(valor)
valor = 0 
break;

case 2:
carrinho.splice(0, carrinho.length)
dinheiro.pagar()
console.log(valor)
valor = 0 
break;

case 3:
carrinho.splice(0, carrinho.length)
pix.pagar()
console.log(valor)
valor = 0 
break;

}
  }
 }
