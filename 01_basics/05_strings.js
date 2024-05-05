const name = "Prabir"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com') // another way to declare string using String object

// console.log(gameName[0]); --> h
// console.log(gameName.__proto__); -->{}


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4) //--> hite
console.log(newString);

const anotherString = gameName.slice(-8, 4) //--> 
console.log(anotherString);

const newStringOne = "   Prabir    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))  // https://hitesh.com/hitesh-choudhary

console.log(url.includes('sundar'))  // false

console.log(gameName.split('-')); //-> ['hitesh','hc','com']