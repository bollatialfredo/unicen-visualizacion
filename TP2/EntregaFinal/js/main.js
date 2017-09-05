var ctx = document.getElementById("canvas").getContext("2d");
var canvas = ctx.canvas;
canvas.width = 555;
canvas.height = window.innerHeight - 510;
var dragging = false;
var x = 0;
var y = 0;
var firstSelected = false;

function Triangle() {

}

Triangle.prototype.draw = function (aX, aY, bX, bY, cX, cY) {
  var path = new Path2D();
  path.moveTo(aX, aY);
  path.lineTo(bX, bY);
  path.lineTo(cX, cY);
  ctx.fill(path);
};

var figurasArray = [];

function Circle (paramPosX, paramPosY, paramRadio, color) {
  this.posX = paramPosX;
  this.posY = paramPosY;
  this.radio = paramRadio;
  this.selected = false;
  this.color = color;
}

Circle.prototype.draw = function (x, y) {
  this.posY = y;
  this.posX = x;
  ctx.beginPath();
  ctx.arc(x, y, this.radio, 0, 2 * Math.PI);
  // var pat = ctx.createPattern(this.color,"no-repeat");
  ctx.fillStyle = this.color;
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

function clearBackground() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}


var circulo = new Circle(300, 300, 50, "#00FF00");
var circulo2 = new Circle(100, 100, 40, "#0000FF");
var circulo3 = new Circle(100, 100, 60, "#FF0000");
figurasArray.push(circulo);
figurasArray.push(circulo2);
figurasArray.push(circulo3);
var triangulo = new Triangle();
// triangulo.draw(100,100, 120, 80, 140, 100);
figurasArray.forEach(function(fig) {
  fig.draw(fig.posX, fig.posY);  
});


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
    ctx.drawImage(getTexture(), 0, 0);

}

function getTexture(){
    var texture = new Image();
    var num = Math.floor((Math.random() * 5) + 1);
    texture.src = "assets/texture_" + num + ".jpg";
    return texture;
}
