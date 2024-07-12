export class Vo {
      
    private name:string
    private weight:number
    private age:number

    constructor(name:string,weight:number,age:number){
        this.name = name
        this.weight = weight 
        this.age = age
    }

cook(food:number):void{
    console.log(`He is cook ${food}`)
}

}