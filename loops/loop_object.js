const myObj ={
    game1: "spiderman",
    game2:"cyber punk",
    game3:"pub g"
}

for (const key in myObj) {
   console.log("key",key + ":-" + myObj[key])
}


// sample array 1 - 10 
let programing =  [ "js", "python", "ruby","rust", "swift"];

for(let key in programing){
    console.log(`key is ${key} and value is ${programing[key]}`)
}

