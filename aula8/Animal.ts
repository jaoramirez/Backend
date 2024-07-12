export class Animal {
      
    private name:string
    private weight:number

    constructor(name:string,weight:number){
        this.name = name
        this.weight = weight 
    }

eat(quantity:number):void{
    console.log(`The animal has eten ${quantity}`)
}

}