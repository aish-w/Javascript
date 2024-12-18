const marvel=["thor","ironman","spiderman"]
const dc=["superman","flash","batman"]
// marvel.push(dc);
// console.log(marvel); //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// const all=marvel.concat(dc)
// console.log(all); //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// const all2=[...marvel,...dc]
// console.log(all2); //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real=another.flat(Infinity)
// console.log(real); //[1,2,3,4,5,6,7,6,7,4,5]

console.log(Array.isArray("Aish")); //false
console.log(Array.from("Aish")); //['A','i','s','h']
console.log(Array.from({name:"aish"})); //interesting

const s1=100;
const s2=200;
const s3=300;
console.log(Array.of(s1,s2,s3)); //[100,200,300]






