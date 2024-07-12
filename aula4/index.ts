import * as readlineSync from 'readline-sync';

let nome:string = readlineSync.question('Qual o seu nome? ')
let idade:number = Number(readlineSync.question('Qual a sua idade? '))
let temCarteira:string = readlineSync.question('Tem carteira? ')

function PodeDirigir(nome:string, idade:number, temCarteira:string):void {

    if(idade >= 18 && temCarteira === "sim"){
        console.log(`${nome} pode dirigir`)
    } else {
        console.log(`${nome} nao pode dirigir`)
    }
}

PodeDirigir(nome, idade,temCarteira)