// for loop
let array = [1, 2, 3, 4, 5];
for (let a = 0; a < array.length; a++) {
  const element = array[a];
  console.log(element);
}
// nested loop

for (let i = 0; i < 10; i++) {
  console.log(`outer loop ${i}`);
  for (let j = 0; j < 10; j++) {
    console.log(`inner loop j is ${j} and i is ${i}`);
  }
}

// for of loop
for (const iterator of array) {
  console.log(iterator);
}

/* break and continue */
/* -------------------------------------------------------------------------- */
/*                  Comment for break and continue                             */
/* -------------------------------------------------------------------------- */

for (let i = 0; i < 10; i++) {
  if (i == 5) {
    console.log(`Inner break `);
    break;
  }
  console.log(i);
  console.log(`outer loop ${i} `);
}


for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log(`inner continue`);
    continue;
  }
  console.log(`outer loop ${i} `);
}

function sayHello(greet) {
   return greet;  
}

sayHello("Hello from India")
