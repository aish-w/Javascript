//function declaration
// function saymyname(){
//     console.log("A");
//     console.log("i");
//     console.log("s");
//     console.log("h");
// }
// saymyname()

function addtwonum(num1,num2) {
    // console.log(num1+num2);
    
}
// addtwonum(3,4) //7
const result=addtwonum(3,4)
// console.log(result); //undefined
function addtwonum(num1,num2) {
    let result=num1+num2;
    return result
}
// console.log(result);//7


function userloginmessage(username){
    return`${username} just logged in`
}
// console.log(userloginmessage("aish")) //aish just logged in
// console.log(userloginmessage()); //undefined just logged in

function calculateprice(...num1){
    return num1
}
console.log(calculateprice(200,400,500)); //[200,400,500]

const user={
    name:"aish",
    price:"200"
}
function handleobject(any){
    console.log(`username is ${any.name} and price is ${any.price}`); 
}
// handleobject(user) //username is aish and price is 200








