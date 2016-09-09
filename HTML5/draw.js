console.log("Hello, I am Harambe");

var c = document.getElementById("myCanvas");
var context = c.getContext("2d");
context.fillStyle = "rgb(255,0,0)"
context.fillRect(100,100,100,100);
context.strokeStyle = "rgb(0,0,225)";
context.strokeRect(80,80,140,140);
context.clearRect(120,120,60,60)