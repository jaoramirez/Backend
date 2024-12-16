import { Animal } from "./Animal";

export class Owl extends Animal {

private breed:string
private fatherColor:string

  constructor(name:string,weight:number,breed:string,color:string){
     super(name,weight)
     this.breed = breed
     this.fatherColor = color
   }

Flay():void{
    console.log(`she is flaing`)
}

}