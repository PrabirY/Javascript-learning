const accountId=144553;
let accountEmail="prabir@gmail.com";
var accountPassword="1234";
accountCity="Jaipur";

let accountState; //undfine

//accountId=2 -- change of const variables are not allowed 

accountEmail="yadav@google.com"
accountPassword="221212"
accountCity="Bangalore"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])