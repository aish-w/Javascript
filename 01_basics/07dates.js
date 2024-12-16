//Dates

let mydate=new Date();
// console.log(mydate); //2024-12-15T08:41:44.928Z
// console.log(mydate.toDateString()); //Sun Dec 15 2024
// console.log(mydate.toString()); //Sun Dec 15 2024 08:44:07 GMT+0000 (Coordinated Universal Time)
// console.log(mydate.toISOString()); //2024-12-15T08:44:07.053Z

// console.log(typeof mydate); //object

// let mycreateddate=new Date(2023,0,23);
let mycreateddate=new Date(2023,0,23,5,3);
// console.log(mycreateddate.toDateString()); //Mon Jan 23 2023


let mytimestamp=Date.now();
// console.log(mytimestamp); //1734373098439
// console.log(mycreateddate.getTime()); //1674450180000
// console.log(Math.floor(Date.now()/1000)); //1734373593


mydate.toLocaleString('default',{weekday:"long"})








