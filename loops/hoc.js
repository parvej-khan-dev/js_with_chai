


// loop for array 
let nums = [1,2,3,4,5]
for (const num of nums) {
    // console.log(`num value is ${num}`)
}

// loop of string 

let greetings = "Hello World!";

for (const greet of greetings) {
    if(greet === " "){
        continue
    }
    // console.log(`Each letter ${greet}`)
}

// map data stature 

const country = new Map();
country.set("IN","India")
country.set("PK","Pakistan")
country.set("SR","Shrilanka");


for (const [key,value] of country) {
    console.log(`${key} ::: - ${value}`)
}

// :TIPS : OBJECT IS NOT ITERABLE WITH FOR OF LOOPS


// HOC 

const arr = ['js', 'python','ruby'];

arr.forEach((item)=>{
    console.log(item)
})
