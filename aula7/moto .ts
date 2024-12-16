export class Moto { 


private marca:string
private modelo:string
private potencia:number
private velocidade:number

constructor(brand:string,model:string,power:number,speed:number){
    this.marca = brand
    this.modelo = model
    this.potencia = power
    this.velocidade = speed
}

getmarca():string{
    return this.marca
}
setmarca(novamarca:string){
  return this.marca = novamarca
}

getmodelo():string{
    return this.modelo
}
setmodelo(novomodelo:string){
    return this.modelo = novomodelo
}


getpotencia():number{
    return this.potencia
}
setpotencia(novapotencia:number):number | void{
    if(this.potencia < 0){
    return this.potencia = novapotencia
    }else{
        console.log('A potencia não pode ser 0 ou negativo')
    }
}

getvelocidade():number{
    return this.velocidade 
}
setvelocidade(novavelocidade:number):number | void{
    if( this.velocidade < 0 ){
        return this.velocidade = novavelocidade
     }else{
         console.log('A velocidade não pode ser 0 ou negativo')
     }
}
      
Ligar():void{
    console.log(`Ligando ${this.marca} ${this.modelo}`)
}

Acelerar():void{
    console.log(`${this.marca} ${this.modelo} está acelerando`)
}

Freiar():void{
    console.log(`${this.marca} ${this.modelo} está freiando`)
}

}

const moto = new Moto ('Ducati','Panigali',1000,299)
console.log(moto.getvelocidade())//1000
moto.setvelocidade(1500)
console.log(moto.getvelocidade())//1500