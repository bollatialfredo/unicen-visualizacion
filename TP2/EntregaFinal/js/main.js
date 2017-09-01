var ctx = document.getElementById("canvas").getContext("2d");
var canvas = ctx.canvas;
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;
var dragging = false;
var x = 0;
var y = 0;
var figura;

function Circle(paramPosX, paramPosY, paramRadio, paramColor) {
  this.posX = paramPosX;
  this.posY = paramPosY;
  this.radio = paramRadio;
  this.color = paramColor;
}
function Triangle() {
  this.color;
}

Triangle.prototype.draw = function (aX, aY, bX, bY, cX, cY) {
  console.log("triangulo");
  var path = new Path2D();
  path.moveTo(aX, aY);
  path.lineTo(bX, bY);
  path.lineTo(cX, cY);
  ctx.fillStyle = "blue";
  ctx.fill(path);
};

Circle.prototype.draw = function (x, y) {
  this.posY = y;
  this.posX = x;
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(x, y, this.radio, 0, 2*Math.PI);
  ctx.fill();
  ctx.closePath();
};

function clearBackground() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

var circulo = new Circle(300, 300, 50, "#00FF00");
var triangulo = new Triangle();
triangulo.draw(100,100, 120, 80, 140, 100);

circulo.draw(100, 100);

canvas.onmousedown = function(e){
  console.log(e);
  x = e.clientX;
  y = e.clientY;
  var val = Math.sqrt(Math.pow((x - circulo.posX), 2) + Math.pow((y - circulo.posY), 2));
  if (val < circulo.radio){
    dragging = true;
  }
}

canvas.onmousemove = function(e){
  triangulo.draw(100,100, 120, 80, 140, 100);
  if(dragging){
    x = e.x;
    y = e.y;
    clearBackground();
    circulo.draw(x, y);
  }
}

canvas.onmouseup = function(e){
  dragging = false;
}
