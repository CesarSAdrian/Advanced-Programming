var myNumber = 12;
const myFloat = 3.1416;
let myString = "Hello World";
import validateWord from "./Utils.js"


console.log(`${myString.length}`);
console.log(`${myString.toLowerCase()}`);
console.log(`${myString.indexOf("o")}`);

//validateWord("World");
if(validateWord(myString, "Hello")){
    console.log("Hi everyone");

}

const mySubstring = myString.substring(5);
console.log(mySubstring);