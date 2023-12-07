// for check two value true

let userLogin = true;
let role = "admin";

if (userLogin && role === "admin") {
  console.log("Welcome Admin");
}

// if both value only one is true with or operator

userLogin = true;
role = "user";

if (userLogin || role === "admin") {
  console.log("Welcome User");
}

// explain nullish coalescing operator example ??:  null , undefined

let val = 5 ?? 10;
console.log(val); // output -> 5

val = null ?? 10;

console.log(val); // output -> 10

val = undefined ?? 10;

console.log(val); // output -> 10


// Ternary operator


const value = 7 

const result = value > 5 ? "greater than 5" : "less than 5";
console.log(result); // output -> greater than 5