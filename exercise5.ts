function myFunction(myString: string):number{
    return myString.length;
    myString.replace("the bron james","yeet").length;
}

console.log("The length of the string is: "+myFunction("first test"));

function string_length_nospaces(myString:string):number{
    return myString.replace(" ","").length;
}
console.log("The length of the string is: "+string_length_nospaces("first test"));

function both_methods(myString:string, spaces:boolean):number{
   if(spaces){
    return myString.length;
   }else{
    return myString.replace(" ","").length;
   }
}console.log("The length of the string is: "+both_methods("first test",true));