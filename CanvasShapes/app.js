var c = document.getElementById("mycanvas1");
var ctx = c.getContext("2d");
//Telling canvas to prepare to draw
ctx.beginPath();
//Set color for our pen
ctx.strokeStyle = "purple"
//move my pen tip to a coordinate
ctx.moveTo(75,0);
//Move my pen again, but this time draw a line
ctx.lineTo(150,100);
ctx.lineTo(75,200);
ctx.lineTo(0,100);
//Automatically line back to our starting point
ctx.closePath();
//Actually drawing
ctx.stroke();
//Change the fill color
ctx.fillStyle = "lavender"
//Actually fill the shape color
ctx.fill();

var c2 = document.getElementById("mycanvas2");
var ctx2 = c2.getContext("2d");
ctx2.beginPath();
ctx2.strokeStyle = "gold"
ctx2.moveTo(0,0);
ctx2.lineTo(300,300);
ctx2.lineTo(300,0);
ctx2.lineTo(0,300);
ctx2.closePath();
ctx2.stroke();
ctx2.fillStyle = "linen"
ctx2.fill();

var c3 = document.getElementById("mycanvas3");
var ctx3 = c3.getContext("2d");
ctx3.beginPath();
ctx3.arc(150,150,50,0,6.28);
ctx3.closePath();
ctx3.stroke();
ctx3.fillStyle = "pink";
ctx3.fill();