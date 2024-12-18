//singleton
//Object.create

const mysym=Symbol("key1");
//object literals
const jsuser={
    name:"aish",
    [mysym]:"mykey1",
    "full name":"aishwarya maheshwari",
    age:18,
    location:"pune",
    email:"aishwarya@google.com",
    isloggedin:false,
    lastlogin:["mon","sat"]
}

//object access
// console.log(jsuser.email); //aishwarya@google.com
// console.log(jsuser["email"]); //aishwarya@google.com
// console.log(jsuser[mysym]); //mykey1

//value change
jsuser.email="aishwarya02@"
// Object.freeze(jsuser)
jsuser.email="aishwarya95"
// console.log(jsuser);

jsuser.greeting=function(){
    console.log("hello js user");
}
console.log(jsuser.greeting); //[Function (anonymous)] //function not return but we get the refrence
// console.log(jsuser.greeting()); //hello js user

jsuser.greeting2=function(){
    console.log(`hello js user,${this.name}`);
}
console.log(jsuser.greeting()); //hello js user
console.log(jsuser.greeting2()); //hello js user,aish




