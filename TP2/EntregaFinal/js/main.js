var ctx = document.getElementById("canvas").getContext("2d");
var canvas = ctx.canvas;
canvas.width = document.body.clientWidth;
canvas.height = 500;
var dragging = false;
var x = 0;
var y = 0;
var figura;

function Circle (paramPosX, paramPosY, paramRadio) {
  this.posX = paramPosX;
  this.posY = paramPosY;
  this.radio = paramRadio;
  this.color = getTexture();
}
function Triangle() {

}

Triangle.prototype.draw = function (aX, aY, bX, bY, cX, cY) {
  var path = new Path2D();
  path.moveTo(aX, aY);
  path.lineTo(bX, bY);
  path.lineTo(cX, cY);
  ctx.fill(path);
};

Circle.prototype.draw = function (x, y) {
  this.posY = y;
  this.posX = x;
  ctx.beginPath();
  ctx.arc(x, y, this.radio, 0, 2 * Math.PI);
  var pat = ctx.createPattern(this.color,"no-repeat");
  ctx.fillStyle = pat;
  ctx.fill();
  ctx.closePath();
};

function clearBackground() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

var circulo = new Circle(300, 300, 50, "#00FF00");
var triangulo = new Triangle();
// triangulo.draw(100,100, 120, 80, 140, 100);

circulo.draw(100, 100);

canvas.onmousedown = function(e){
  x = e.layerX;
  y = e.layerY;
  var val = Math.sqrt(Math.pow((x - circulo.posX), 2) + Math.pow((y - circulo.posY), 2));
  if (val < circulo.radio){
    dragging = true;
  }
};

canvas.onmousemove = function(e){
  // triangulo.draw(100,100, 120, 80, 140, 100);
  if(dragging){
    x = e.layerX;
    y = e.layerY;
    clearBackground();
    circulo.draw(x, y);
  }
};

canvas.onmouseup = function(e){
  dragging = false;
};

function drawContext() {
    ctx.drawImage(getTexture(), 0, 0);

}

function getTexture(){
    var texture = new Image();
    var num = Math.floor((Math.random() * 5) + 1);
    texture.src = "assets/texture_" + num + ".jpg";
    return texture;
}
