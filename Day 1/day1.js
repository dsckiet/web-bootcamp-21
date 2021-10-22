// Print Statement
console.log("hello DSC");

// declaring a function in js
function abcd() {
  console.log("Mai function hun");
}

abcd();

// VARIABLES

let k = 45;
console.log(k);

// typeof operater
console.log(typeof k);
k = "string";

console.log(typeof k);
k = true;
console.log(typeof k);

// Numbers,strings,Boolean,undefined,null

console.log(typeof abc);

let abcdef;
console.log(typeof abcdef);

let gg = null;
// typeof null -> object
console.log(typeof null);

const fg = 25;

var aaaa;
aaa = 45;
aaa = "hhhh";
var aaaa = "67777";

// problem with var
var counter = 34;

function bbb() {
  var counter = "abbb";
  console.log(counter);
}
console.log(counter);

// difference in == and ===
console.log(123 == "123");
console.log(123 === "123");

// Strings

let myString = "Priyanshu Sharma";
console.log(myString);

// immutability of string

myString[3] = "f";

let newString = myString.toUpperCase();
console.log(newString);

myString = "new String";
console.log(myString);
// read about .slice() , .split()

// ARRAYS
let naam = [1, 2, "gg", true];

// Arrays are mutable
naam[0] = 66;
console.log(naam[1]);
naam.unshift(67);
let popped = naam.pop();
console.log(popped);

// to delete element from beginning use .shift() eg --> naam.shift()

// FILTER and MAP function
// Higher order functions (functions that accept another function or returns a function)
// eg--> map,filter
let numbers = [1, 2, 3, 4, 5, 6, 7];

// FILTER

function evenChecker(number) {
  if (number % 2 === 0) return true;
}

let evenNumbers = numbers.filter(evenChecker);
console.log(evenNumbers);

// Using anonymous function in filter and map
// read about anonymous functions and arrow functions

let evenNumbers2 = numbers.filter(function (number) {
  if (number % 2 === 0) return true;
});

// MAP

let squares = numbers.map(function squareFunction(number) {
  return number * number;
});
console.log(squares);
