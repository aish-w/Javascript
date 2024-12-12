//Primitive

//7 types:string,number,boolean,null,undefined,symbol,bigint
let score=100
let scoreid="12"
let isscore=true
let outsidetemp=null;
let email;

const id=Symbol('123');
const another=Symbol('123');
console.log(id==another); //false


//Reference(Non-Primitive)

//Array,Objects,Functions
const fruit=["apple","orange","banana"];
let myobj={
    name:"aish",
    age:21,
}
const myfunction=function(){
    console.log("Hello world");
    
}


/*JavaScript is a dynamic language, meaning that variables can hold values of different types during runtime: 
Explanation
In JavaScript, you don't need to explicitly declare the data type of a variable. Instead, the JavaScript engine infers the variable's type based on the value assigned to it at runtime. */