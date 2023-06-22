
import { add, addRepeatedly } from './add.js';
import { cards } from './cards.js';
import { printToConsole } from './consolePrint.js';

console.log("Hey there");
console.log(add(3, 4));
console.log(addRepeatedly(2,8));

console.log(cards.card1.cost);
printToConsole();


/////////////////////////////

const height = 640;
const width = 960;

var canvas = document.getElementById("game");

var screenHeightRatio = window.innerHeight / height;
var screenWidthRatio = window.innerWidth / width;

canvas.height = height;
canvas.width = width;

var ctx = canvas.getContext("2d");
ctx.fillStyle = "red";
ctx.fillRect(0, 0, width, height);

