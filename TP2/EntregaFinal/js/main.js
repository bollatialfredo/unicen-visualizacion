var contJugar = document.getElementById('formJugar');
var ctx = document.getElementById("canvas").getContext("2d");
var canvas = ctx.canvas;
canvas.height = 400;
canvas.width = 1300;
ctx.lineWidth = 7;
ctx.fillStyle = fillColor;
ctx.strokeStyle = strokeColor;
var margin = 20;
var strokeColor = 'rgba(37, 28, 66, 0.5)';
var strokeSocketColor = 'rgba(37, 28, 66, 1)';
var fillColor = "rgba(255, 0, 0, 1)";
var fillSocketColor = "rgba(255, 255, 255, 0.2)";
var dragging = false;
var x = 0;
var y = 0;
var detectX = 0;
var detectY = 0;
var firstSelected = false;
var figSelected = null;
var figurasArray = [];
var socketsArray = [];
var figAmount;
var socketDifficulty;
var animatedImg = document.getElementById('gps_ring');
var gameEnd = false;
var gameStart;

var sec = 0;

function pad ( val ) {
    return val > 9 ? val : "0" + val;
}
setInterval( function(){
    if (gameStart && !gameEnd) {
    var s = pad(++sec%60);
    document.getElementById("seconds").innerHTML= ':' + s;
    document.getElementById("minutes").innerHTML=pad(parseInt(sec/60,10));
}
}, 1000);



document.getElementById('botonJugar').onclick = function() {
    click3.load();
    click3.play();
    contJugar.style.display = 'none';
    canvas.style.display = 'block';
    var select = document.getElementById('usr');
    var difficulty = select.options[select.selectedIndex].text;
    switch (difficulty) {
        case 'Facil':
        figAmount = 3;
        socketDifficulty = 20;
        break;
        case 'Normal':
        figAmount = 5;
        socketDifficulty = 10;
        break;
        case 'Dificil':
        figAmount = 9;
        socketDifficulty = 5;
        break;
        default:

    }
    init();
    console.log(figAmount);
};

function restart() {
    sec = 0;
    gameEnd = false;
    gameStart = undefined;
    document.getElementById("seconds").innerHTML = '';
    document.getElementById("minutes").innerHTML = '';
    animatedImg.className = "darken";
    click3.load();
    click3.play();
    contJugar.style.display = 'block';
    canvas.style.display = 'none';
}


function clearBackground() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function init() {
    gameStart = true;
    clearBackground();
    socketsArray = [];
    figurasArray = [];
    var triangulo = new Triangle(110, 100, 70, 100, 'rgba(190, 117, 129, 1)');
    figurasArray.push(triangulo);
    var cuadrado = new Sqare(270, 110, 80, 80, 'rgba(55, 108, 73, 1)');
    figurasArray.push(cuadrado);
    var estrella9 = new Star(470, 65, 30, 45, 9, 'rgba(139, 70, 81, 1)');
    figurasArray.push(estrella9);
    var circulo2 = new Circle(230, 190, 40, 'rgba(148, 135, 74, 1)');
    figurasArray.push(circulo2);
    var rectangulo = new Sqare(350, 210, 50, 100, 'rgba(96, 85, 34, 1)');
    figurasArray.push(rectangulo);
    var estrella6 = new Star(140, 320, 30, 45, 6, 'rgba(153, 197, 168, 1)');
    figurasArray.push(estrella6);
    var rombo = new Romb(220, 350, 60, 70, 'rgba(243, 189, 198, 1)');
    figurasArray.push(rombo);
    var estrella3 = new Star(370, 320, 30, 45, 5, 'rgba(202, 188, 124, 1)');
    figurasArray.push(estrella3);
    var rectangulo2 = new Sqare(470, 370, 100, 50, 'rgba(91, 148, 110, 1)');
    figurasArray.push(rectangulo2);

    var socketTriang = new Socket(730, 350, triangulo);
    socketsArray.push(socketTriang);
    var socketCuadrado = new Socket(880, 350, cuadrado);
    socketsArray.push(socketCuadrado);
    var socketEstrella2 = new Socket(900, 190, estrella9);
    socketsArray.push(socketEstrella2);
    var socketCirculo2 = new Socket(1180, 310, circulo2);
    socketsArray.push(socketCirculo2);
    var socketRectangulo = new Socket(940, 100, rectangulo);
    socketsArray.push(socketRectangulo);
    var socketEstrella1 = new Socket(800, 80, estrella6);
    socketsArray.push(socketEstrella1);
    var socketRombo = new Socket(1150, 110, rombo);
    socketsArray.push(socketRombo);
    var socketEstrella3 = new Socket(1060, 310, estrella3);
    socketsArray.push(socketEstrella3);
    var socketRectangulo2 = new Socket(1050, 240, rectangulo2);
    socketsArray.push(socketRectangulo2);

    var auxS = [];
    var auxF = [];
    for (var i = 0; i < figAmount; i++) {
        auxF.push(figurasArray[i]);
        auxS.push(socketsArray[i]);
    }
    figurasArray = auxF;
    socketsArray = auxS;
    drawContext();
    drawFigures();
}
function drawFigures() {
    for (var i = 0; i < figurasArray.length; i++) {
        figurasArray[i].draw(figurasArray[i].x, figurasArray[i].y, false);
    }
}
function drawContext() {
    ctx.fillStyle = 'rgba(37, 28, 66, 0.96)';
    ctx.fillRect(margin, 0, canvas.width/2-margin, canvas.height);
    ctx.fillStyle = 'rgba(91, 32, 41, 0.9)';
    ctx.fillRect(canvas.width/2 + margin, 0, canvas.width/2-(margin*2), canvas.height);
    for (var i = 0; i < socketsArray.length; i++) {
        socketsArray[i].draw();
    }
}

function checkGameEnded() {
    var gameEnded = true;
    figurasArray.forEach(function (f) {
        if (!f.done) {
            gameEnded = false;
        }
    });
    if (gameEnded) {
        animatedImg.className = "darken gps_ring";
        gameEnd = true;
        win.load();
        win.play();
    }
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
