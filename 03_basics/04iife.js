// Immediately Invoked Function Expression(IIFE)

(function db(){
    console.log('db connected');
})(); //db connected

()()//first bracket for function and second one for execution call

//there will be problembecause of global scope pollution so to remove that global scope pollution we use iife

//we have to apply ; after the end otherwise it does not context is end or not

( (name)=>{
    console.log(`name is ${name}`);
})('aa');
