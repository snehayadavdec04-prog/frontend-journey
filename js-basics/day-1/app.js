// Day 1: Variables 


let city ="delhi";
console.log(city);

const pi=3.14;
console.log(pi);

let age=25;
age = 26;

console.log(age) //26

const country="india";
// country ="USA";

console.log(country)// cannot aasigned a value to constant

var a =10;
var a = 20;

console.log(a);

let b = 5;
// let b = 6;

console.log(b) // error cant change value of b

const user = {name: "sam"};
user.name = "Raj";

console.log(user); //Raj

const num =[1,2,3];
num.push(4);

console.log(num);

let x = 10;

{
  let x = 20;
  console.log(x); //20
}

console.log(x); //10

var y =10;

{
  var y = 20;
  console.log(y); //20 
}

console.log(y); //20