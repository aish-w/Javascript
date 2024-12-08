const accountId=144553;
let accountEmail="aishwarya@google.com";
var accountPassword="12345";
accountCity="Jaipur";
let accountState;

//const-nothing will be changed
/*prefer not to use var because of issue in block scope and functional scope(use let)*/

//accountId=2; //not allowed
accountEmail="aish@gm.com";
accountPassword="123";
accountCity="delhi";
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
//if we don't give value in let then it is undefined
