import { ListFormat } from "typescript";

//numbers
let myNumber:number = 6;
console.log("my number is: "+myNumber);

//string
let myString:string = "abc";
console.log("my string is: "+myString);

//boolean
let myBoolean:boolean = true;
console.log("my boolean is: "+myBoolean);

//array
let myList:any[] = [1,2,3];
for(let i = 0;i<myList.length;i++){
    console.log("The value at position " +(i+1)+ " is "+myList[i]);
}