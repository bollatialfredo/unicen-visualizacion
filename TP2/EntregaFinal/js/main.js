var ctx = document.getElementById("canvas").getContext("2d");
var canvas = ctx.canvas;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 210;
var dragging = false;
var x = 0;
var y = 0;
var firstSelected = false;

var figurasArray = [];
var socketsArray = [];


function clearBackground() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

var circulo = new Circle(300, 300, 50, "#00FF00");
var socketCirculo = new Socket(circulo.y * 2, circulo.y, 'white', circulo);
socketsArray.push(socketCirculo);
var circulo2 = new Circle(200, 200, 40, "#0000FF");
var socketCirculo2 = new Socket(circulo2.x * 2, circulo2.y, 'white', circulo2);
socketsArray.push(socketCirculo2);
var circulo3 = new Circle(100, 100, 60, "#FF0000");
figurasArray.push(circulo);
figurasArray.push(circulo2);
figurasArray.push(circulo3);



var triangulo = new Triangle(50, 50, 50, 100);
figurasArray.push(triangulo);
triangulo.draw(100,100, false);
var socketTriang2 = new Socket(triangulo.x * 2, triangulo.y, 'white', triangulo);
socketsArray.push(triangulo);



figurasArray.forEach(function(fig) {
  fig.draw(fig.x, fig.y);
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
