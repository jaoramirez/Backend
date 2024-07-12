import { Pai } from "./Pai";

export class filho extends Pai {
     
 private profession:string

 constructor(name:string,weight:number,age:number,hobby:string,profession:string){
    super(name,weight,age,hobby)
    this.profession = profession
 }
 
work():void{
console.log(`He is working `)
}

}