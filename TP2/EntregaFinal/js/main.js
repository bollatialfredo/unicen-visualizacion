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
