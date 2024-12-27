// const user={
//     username:"aish",
//     price:999,

//     welcomemessage:function(){
//         console.log(`${this.username} ,welcome to website`);
//         // console.log(this); //this talks about current context
        
        
//     }
// }
// user.welcomemessage() //aish,welcome to website
// user.username="sam"
// user.welcomemessage() //sam,welcome to website
// console.log(this); //{}

// function hey(){
//     let u="aish"
//     console.log(this.u);
    
// }
// hey() //undefined

//arrow function

// const hey=()=>{
//     let username="aish"
//     console.log(this.username); //undefined
//     console.log(this); //{}
// }
// hey() 

// const add=(n1,n2)=>{
//     return n1+n2
// }
// console.log(add(3,4)); //7

//implicit return
const add=(n1,n2)=> n1+n2
console.log(add(3,4)); //7
const add=(n1,n2)=>({username:"aish"})
console.log(add(3,4)); //username:"aish"


