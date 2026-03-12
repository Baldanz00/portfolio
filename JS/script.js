const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = document.querySelector("header").offsetHeight;

const letters = "01";
const fontSize = 16;

const columns = canvas.width / fontSize;

const drops = [];

for(let x = 0; x < columns; x++){
drops[x] = 1;
}

function draw(){

ctx.fillStyle = "rgba(247,244,255,0.08)";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle = "#b8a9ff";
ctx.font = fontSize + "px monospace";

for(let i = 0; i < drops.length; i++){

const text = letters.charAt(Math.floor(Math.random() * letters.length));

ctx.fillText(text, i * fontSize, drops[i] * fontSize);

if(drops[i] * fontSize > canvas.height && Math.random() > 0.975){
drops[i] = 0;
}

drops[i]++;

}

}

setInterval(draw, 45);