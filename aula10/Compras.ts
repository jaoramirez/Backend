import * as readlineSync from 'readline-sync';

import { Alimento } from './Alimentos';
import { Eletronico } from './Eletronicos';
import { Filmes } from './Filmes';

const Arroz = new Alimento ('Arroz',1000,6.50,'Perecivel')
const Feijao = new Alimento ('Feijão',1000,5.50,'Perecivel')

const Celular = new Eletronico ('Sansung','S23',2500,'Eletronico')
const NotBook = new Eletronico ('Dell','G15',5300,'Eletronico')

const ProcurandoNemo = new Filmes ('Procurando Nemo',13.70,'Filme')
const GenteGrande = new Filmes ('Gente Grande',10.50,'Filme')

let numero:number = -1
let opcao:number = -1

while(numero != 4) {
numero = Number(readlineSync.question(`1) Comprar Produto; \n2) Ver Carrinhp; \n3) Pagar; \n4) Sair; \nEscolha um numero: `))

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
    
    `))
}
}
}
