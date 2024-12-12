// console.log(2<1);
// console.log(2!=1);
// console.log(2>=1);
// console.log(2==1);
// console.log(2>1);

console.log("2">1); //true
console.log("02">1); //true

console.log(null>0); //false
console.log(null==0);//false
console.log(null>=0);//true
// the reason is that an equality check == and comparison > <>=<= work differently.
// comparison convert null to number ,treating it as 0 that's why null>=0 is true and null>0 is false

console.log(undefined>0); //false
console.log(undefined==0);//false
console.log(undefined>=0);//false

//=== =>it checks the value as well as data type is equal or not
console.log("2"===2); //false
console.log("2"=="2"); //true










