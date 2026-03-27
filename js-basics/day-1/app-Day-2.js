// Day 2: Operators (Arithmatic , comparison , logical , unary or ternary) 

// Practice 

let x = 10;
let y = 20;

if (x > 5 && y < 25) {
  console.log("A");
} else {
  console.log("B");
}


let isAdmin = true;
let isLoggedIn = false;

if(isAdmin || isLoggedIn) {
  console.log("Acess granted");
} else {
  console.log("Acess denied");
}


let temp = 35;

if(!(temp < 30)) {
  console.log("Hot");
} else {
  console.log("Cold");
}



//Ternary

let score = 78;

let grade = score >=90 ? "A" : score >= 75 ? "B" : score >= 60 ? "C" : "Fail";

console.log(grade);

let likes = 100;

function likePost() {
  return ++likes;
}

console.log(likePost());
console.log(likes);

//

let x1 = 10;

if (true) {
  let x1 = 20;
  console.log("inside", x1);
}

console.log("outisde", x1);

//

let y1 = 5;

function test() {
  let y1=7;
  console.log("inside",y1);
}

test();
console.log("outside", y1);

//

let z = 1;

function addOne() {
  z = z+1;
  console.log("inside", z);
}

addOne();
console.log("outside", z);


//

let a = 5;
console.log(++a); 
console.log(a);

let b = 5;
console.log(b++); 
console.log(b);

let c = 5;
console.log(--c); 
console.log(c);

let d = 5;
console.log(d--); 
console.log(d);

let x2 = 10;
let y2 = x2++ + ++x2; 
console.log(x2, y2);


let m = 3;
let n = 2;
let result = m++ + n--;
console.log(m, n, result);

let a1 = 2;
console.log(a1++ + a1); //5

let b1 = 5;
console.log(++b1 + b1++); //12

let c1 = 1;
console.log(c1++ + ++c1 + c1); //7
