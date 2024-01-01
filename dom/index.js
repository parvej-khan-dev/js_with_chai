'use strict'
console.log("parvejkhan");




let card  = document.createElement("div");
card.className = "card";

let cardHead = document.createElement("h2");
cardHead.style.backgroundColor = "red";
cardHead.style.padding = "10px"
cardHead.innerText = "Card Head";

const cardBody = document.createElement("p");

cardBody.setAttribute("class","body text")
cardBody.innerText  = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate omnis quasi ratione? Similique ";



card.appendChild(cardHead);
card.appendChild(cardBody)

document.body.appendChild(card)
console.log(cardBody.classList.contains("body"))


const width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

const height = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;    



let url = 'https://google.com';
let features = 'height=600,width=800';

// const result = confirm("Are you single");

// let result = window.prompt("How old are you");


// console.log(result)

// let jsWindow = window.open(url, 'about', features);


//  setTimeout(() => {
//     jsWindow.resizeTo(600, 300);
// }, 3000);


var timeoutID;

function showAlert() {
    timeoutID = setTimeout(alert, 3000, 'setTimeout Demo!');
}

function clearAlert() {
    clearTimeout(timeoutID);
}





