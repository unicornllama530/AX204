
//loading my spite
var pikachu = new Image();
pikachu.src ="Ash and pika.png"
//Drawing sprite onto canvas
pikachu.onload = function() {
	ctx5.drawImage(pikachu,50, 300, 200, 220);
}

var house = new Image();
house.src ="house.png"
//Drawing sprite onto canvas
house.onload = function() {
	ctx5.drawImage(house,500, 150, 300, 350);
}

var car = new Image();
car.src ="teal car.png"
//Drawing sprite onto canvas
car.onload = function() {
	ctx5.drawImage(car,300, 200, 150, 200);
}








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

var c4 = document.getElementById("mycanvas4");
var ctx4 = c4.getContext("2d");
ctx4.beginPath();
ctx4.strokeStyle = "green";
ctx4.moveTo(0,0);
ctx4.lineTo(300,300);
ctx4.lineTo(300,150);
ctx4.lineTo(0,150);
ctx4.lineTo(0,0);
ctx4.moveTo(150,0);
ctx4.lineTo(150,300);
ctx4.lineTo(0,300);
ctx4.lineTo(300,0);
ctx4.lineTo(150,0);
ctx4.closePath();
ctx4.stroke();
ctx4.fillStyle = "lightblue";
ctx4.fill();

var c5 = document.getElementById("scene");
var ctx5 = c5.getContext("2d");
// This is going to be the land
ctx5.fillStyle="green";
ctx5.fillRect(0,350,800,150);
//dis da sky
ctx5.fillStyle = "cyan";
ctx5.fillRect(0,0,800,350);
//This da sun
ctx5.beginPath();
ctx5.arc(100,100,50,0,6.28);
ctx5.closePath();
ctx5.stroke();
ctx5.fillStyle ="yellow";
ctx5.fill();
//Road
ctx5.beginPath();
ctx5.moveTo(300,500);
ctx5.lineTo(350,350);
ctx5.lineTo(400,350);
ctx5.lineTo(450,500);
ctx5.closePath();
ctx5.stroke();
ctx5.fillStyle = "gainsboro";
ctx5.fill();