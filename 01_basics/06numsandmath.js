//++++++++++++++++++++Numbers++++++++++++++++++
const score=400

const balance=new Number(100)
// console.log(balance); //[Number:100]

// console.log(balance.toString().length); //3
// console.log(balance.toFixed(3)); //100.000

const num1=123
const num2=123.89
// console.log(num1.toPrecision(3)); //123
// console.log(num2.toPrecision(2)); //1.2e+2

const hundreds=1000000
// console.log(hundreds.toLocaleString()); //1,000,000(according to us standard)
// console.log(hundreds.toLocaleString('en-IN')); //10,00,000(according to indian standard)

//++++++++++++++++++++++Maths++++++++++++++++++
console.log(Math); //Object [Math]{}
console.log(Math.abs(-4)); //4
console.log(Math.round(4.6)); //5
console.log(Math.ceil(4.2)); //5
console.log(Math.floor(4.2)); //4
console.log(Math.min(4,3,6,8)); //3
console.log(Math.max(4,3,6,8)); //8

console.log(Math.random());
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min);














