import { Vo } from "./Vô";

export class Pai extends Vo {
     
 private hobby:string

 constructor(name:string,weight:number,age:number,hobby:string){
    super(name,weight,age)
    this.hobby = hobby
 }
 
drive(vehicle:string):void{
console.log(`He is driving a ${vehicle}`)
}

}