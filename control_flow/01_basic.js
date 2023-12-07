// If else and swicht case

/*
if(condition){
    //scope 
}

*/

// example

// for single condition
const isUserLogin = true;

if (isUserLogin) {
  console.log("user login Successfully");
}

// for multiple condition
let month = 1;

if (month == 1) {
  console.log("January");
} else if (month == 2) {
  console.log("February");
} else {
  console.log("Invalid Month");
}
// if else condition

if (month == 1) {
  console.log("January");
} else {
  console.log("Invalid Month");
}

// truthy and falsy value

/*

false value 
0
undefined
null
""
false
Bigint 0n
NaN
*/

// truthy  value
"0", false, " ", [], {}, function () {};

// check empty arr

const arr = [];
if (arr.length === 0) {
  console.log("arr is empty");
}

// check empty object

const obj = {};

if (Object.keys(obj).length === 0) {
  console.log("object is empty");
}
