
const date = new Date();
let hours = Number(window.prompt("Give me an amount of hours"));
let day = Math.round(hours / 24);

date.setDate(date.getDate() + day);

document.getElementById("futurDate").innerHTML = 'The date will be : '+ date;

