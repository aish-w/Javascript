//Arrays initialisation

const myarr=[0,1,2,3,4,5]
const myhero=["abc","xyz","pqr"]
const myarr2=new Array(1,2,3,4)
//javascript array copy operation create shallow copies(copy who share the same reference point)

//Array methods

// myarr.push(6);
// myarr.push(7);
// myarr.pop();
// myarr.unshift(9); //[9,0,1,2,3,4,5]
myarr.shift();    //[,1,2,3,4,5]
// console.log(myarr.includes(9)); //false
// console.log(myarr.indexOf(2)); //1

const newarr=myarr.join();

// console.log(newarr); //1,2,3,4,5(string type)

//slice,splice
const myn1=myarr.slice(1,3);
console.log(myn1); //[2,3]
console.log("B",myarr); //B [1,2,3,4,5]

const myn2=myarr.splice(1,3);
console.log(myn2); //[2,3,4]
// slice() creates a new array with a portion of elements copied from the original array, while splice() mutates the original array itself by removing, replacing or adding elements to it.


