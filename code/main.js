
import { add, addRepeatedly } from './add.js';
import { cards } from './cards.js';
import { printToConsole } from './consolePrint.js';

console.log("Hey there");
console.log(add(3, 4));
console.log(addRepeatedly(2,8));

console.log(cards.card1.cost);
printToConsole();


/////////////////////////////

const width = 1024;
const height = 576;

var canvas = document.getElementById("game");

canvas.width = width;
canvas.height = height;

var ctx = canvas.getContext("2d");
ctx.fillStyle = "red";
ctx.fillRect(0, 0, width, height);
//ctx.fillRect(0, 0, window.innerWidth * 0.9, window.innerHeight * 0.9);

