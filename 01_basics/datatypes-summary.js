//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // --> false

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//------------------------------------------------------------------------------------------------------------------


//Stack (Primitive) , Heap (NOn-Primitive)

let myYoutubename = "PrabirYadavdotcom"

let anothername = myYoutubename
anothername="chaiaurcode"

console.log(myYoutubename) // --> PrabirYadavdotcom
console.log(anothername)  //  --> chaiaurcode


let userOne={
    email:"user1@google.com",
    upi:"user1@ybl"
}

let userTwo=userOne;

userTwo.email="prabir@google.com"

console.log(userOne.email) // --> prabir@google.com
console.log(userTwo.email) // --> prabir@google.com


