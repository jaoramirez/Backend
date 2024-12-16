// ARRAY 
/*let arr:Array<number> = [1,2,3]
// ou
let array:number[] = [1,2,3]

// OBJETOS

let person: {name:string, age:number} = {
     name: 'João',
     age: 17
}

// FUNCTION

function soma (num1:number, num2:number):number{
    return num1 + num2
}

function frase (nome:string):string{
    return `Olá ${nome}, tudo bem ?`
}

function frasee (nome?:string):void{
    console.log("hello",nome || "World") // O "?" faz com que se n imprimir o "nome" ele imperima "world"
}*/
// Class
/*class Cachorro {

nome:string
pesso:number
pelagem:string
raca:string

constructor(dogNome:string,dogPesso:number,dogPelagem:string){
    this.nome = dogNome
    this.pesso = dogPesso
    this.pelagem = dogPelagem
    this.raca = 'Goldem'
}

latir():void{
   console.log(`${this.nome}, esta latindo`)}

correr():void{
   console.log(`${this.nome}, esta correndo`)}

comer():void {
   console.log(`${this.nome}, esta comendo`)}
}


const meuCachorro:Cachorro = new Cachorro('Dexter',15,'creme')

console.log(meuCachorro.nome) // 'Dexter'

meuCachorro.correr()*/ // 'Dexter, esta latindo'
var Coruja = /** @class */ (function () {
    function Coruja(coNome, coCor, coIdade) {
        this.nome = coNome;
        this.cor = coCor;
        this.idade = coIdade;
    }
    Coruja.prototype.voar = function () {
        console.log("O ".concat(this.nome, " esta voando"));
    };
    Coruja.prototype.agarra = function () {
        console.log("O ".concat(this.nome, " aggarou o rato"));
    };
    Coruja.prototype.comer = function () {
        console.log("O ".concat(this.nome, " esta comendo sua presa"));
    };
    return Coruja;
}());
var minhaCoruja = new Coruja('Olivia', 'branca', 12);
console.log(minhaCoruja.nome);
