// Primitive

// 7 type : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId);

const bigNumber = 345648844505858585858n

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman","batman","superman"]
let myObj = {
    name:"hitesh",
    age:22
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof bigNumber);
console.log(typeof myFunction);


/*

Return type of variables in JavaScript

1) Primitive Datatypes

Number => number

String => string

Boolean => boolean

null => object

undefined => undefined

Symbol => symbol

BigInt => bigint

2) Non-primitive Datatypes

Arrays => object

Function => function

Object => object

*/

//Stack(Primitive), Heap(Non-Primitive)

let myYoutubename = "hiteshchoudhary.com"

let anotherName = myYoutubename
anotherName = "chaiaurcode"

console.log(myYoutubename);
console.log(anotherName);

let user1 = {
    email:"user@google.com",
    upi:"user@ybl"
}

let user2 = user1;

user2.email = "hitesh@google.com"

console.log(user1.email);
console.log(user2.email);
