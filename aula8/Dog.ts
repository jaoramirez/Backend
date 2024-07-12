import { Animal } from "./Animal";

export class Dog extends Animal {

private breed:string

  constructor(name:string,weight:number,breed:string){
     super(name,weight)
     this.breed = breed
   }

bark():void{
    console.log(`au au`)
}

}