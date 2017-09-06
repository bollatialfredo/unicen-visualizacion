var ctx = document.getElementById("canvas").getContext("2d");
var canvas = ctx.canvas;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 210;
var dragging = false;
var x = 0;
var y = 0;
var firstSelected = false;

// function Triangle() {

// }

// Triangle.prototype.draw = function (aX, aY, bX, bY, cX, cY) {
//   var path = new Path2D();
//   path.moveTo(aX, aY);
//   path.lineTo(bX, bY);
//   path.lineTo(cX, cY);
//   ctx.fill(path);
// };

var figurasArray = [];
var socketsArray = [];

function Circle (paramPosX, paramPosY, paramRadio, color) {
  this.posX = paramPosX;
  this.posY = paramPosY;
  this.radio = paramRadio;
  this.selected = false;
  this.color = color;
  this.height = paramRadio * 2;
}

Circle.prototype.draw = function (x, y, transparent) {
  if (!transparent) {
    this.posY = y;
    this.posX = x;
  }
  ctx.beginPath();
  ctx.arc(x, y, this.radio, 0, 2 * Math.PI);
  // var pat = ctx.createPattern(this.color,"no-repeat");
  if (transparent) {
    ctx.fillStyle = 'black';
    console.log('trasparnte');
  }else{
    ctx.fillStyle = this.color;
  }
  ctx.fill();
  ctx.closePath();
};
Circle.prototype.move = function(){
  if(dragging){
    clearBackground();
    this.draw(x, y);
  }
};
Circle.prototype.detectClickInside = function(){
  var val = Math.sqrt(Math.pow((x - this.posX), 2) + Math.pow((y - this.posY), 2));
  if (val < this.radio && !firstSelected){
    dragging = true;
    this.selected = true;
    firstSelected = true;
    console.log(figurasArray);
    var aux = figurasArray[figurasArray.length-1];
    var pos = figurasArray.indexOf(this);
    figurasArray[figurasArray.length-1] = this;
    figurasArray[pos] = aux;
  }
}

function Socket(paramPosX, paramPosY, color, figure) {
  this.posX = paramPosX;
  this.posY = paramPosY;
  this.color = color;
  this.figure = figure;
}
Socket.prototype.draw = function() {
  ctx.fillStyle = this.color;
  ctx.fillRect(this.posX, this.posY, this.figure.height + 20, this.figure.height + 20);
  this.figure.draw(this.posX + (this.figure.height/2) + 10, this.posY + (this.figure.height/2) + 10, true);
}

function clearBackground() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

var circulo = new Circle(300, 300, 50, "#00FF00");
var socketCirculo = new Socket(circulo.posX * 2, circulo.posY, 'white', circulo);
socketsArray.push(socketCirculo);
var circulo2 = new Circle(200, 200, 40, "#0000FF");
var socketCirculo2 = new Socket(circulo2.posX * 2, circulo2.posY, 'white', circulo2);
socketsArray.push(socketCirculo2);
var circulo3 = new Circle(100, 100, 60, "#FF0000");
figurasArray.push(circulo);
figurasArray.push(circulo2);
figurasArray.push(circulo3);
// var triangulo = new Triangle();
// triangulo.draw(100,100, 120, 80, 140, 100);
figurasArray.forEach(function(fig) {
  fig.draw(fig.posX, fig.posY);  
});
drawContext();


canvas.onmousedown = function(e){
  for (var i = figurasArray.length-1; i >= 0; i--) {
    if (!firstSelected) {
      figurasArray[i].detectClickInside();
    }
  }
};

canvas.onmousemove = function(e){
  // triangulo.draw(100,100, 120, 80, 140, 100);
  x = e.layerX;
  y = e.layerY;
  if(dragging){
    clearBackground();
    drawContext();
    figurasArray.forEach(function(fig) {
      if(fig.selected){
        fig.draw(x, y);
      }else{
        fig.draw(fig.posX, fig.posY);
      }
    });
  }
};

canvas.onmouseup = function(e){
  dragging = false;
  figurasArray.forEach(function(fig) {
   fig.selected = false; 
  });
  firstSelected = false;
};

function drawContext() {
  for (var i = 0; i < socketsArray.length; i++) {
    socketsArray[i].draw();
  }

}

function getTexture(){
    var texture = new Image();
    var num = Math.floor((Math.random() * 5) + 1);
    texture.src = "assets/texture_" + num + ".jpg";
    return texture;
}
