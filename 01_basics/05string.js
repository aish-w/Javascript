const name="aish"
const repocount=50
console.log(name+repocount+"value"); //aish50value

//``=>back ticks
console.log(`hello my name is ${name} and my count is ${repocount}`);

const gamename=new  String("aishwarya-gg");

console.log(gamename[0]); //a
console.log(gamename.__proto__); //{}

console.log(gamename.length); //9
console.log(gamename.toUpperCase()); //AISHWARYA
console.log(gamename.charAt(2)); //s
console.log(gamename.indexOf('h')); //3

const newn=gamename.substring(0,5); //in substring we can't give negative value
console.log(newn); //aishw

const news=gamename.slice(-8,4);
console.log(news); //ish

const newstring="  aish  ";
console.log(newstring); //  aish
console.log(newstring.trim()); //aish(remove whitespace from both ends)
const url="http://aishwarya.com/aish%20maheshwari";
console.log(url.replace('%20','-')); //http://aishwarya.com/aish-maheshwari
console.log(url.includes('aish')); //true

console.log(gamename.split('-')); //['aishwarya','gg']













