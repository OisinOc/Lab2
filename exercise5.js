function myFunction(myString) {
    return myString.length;
    myString.replace("the bron james", "yeet").length;
}
console.log("The length of the string is: " + myFunction("first test"));
function string_length_nospaces(myString) {
    return myString.replace(" ", "").length;
}
console.log("The length of the string is: " + string_length_nospaces("first test"));
function both_methods(myString, spaces) {
    if (spaces) {
        return myString.length;
    }
    else {
        return myString.replace(" ", "").length;
    }
}
console.log("The length of the string is: " + both_methods("first test", true));
