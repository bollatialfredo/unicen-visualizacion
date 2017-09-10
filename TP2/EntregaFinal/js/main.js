var contJugar = document.getElementById('formJugar');
var ctx = document.getElementById("canvas").getContext("2d");
var canvas = ctx.canvas;
canvas.height = 400;
canvas.width = 1300;
ctx.lineWidth = 7;
ctx.fillStyle = fillColor;
ctx.strokeStyle = strokeColor;
var margin = 20;
var strokeColor = 'red';
var strokeSocketColor = 'purple';
var fillColor = "rgba(255, 255, 255, 0.5)";
var fillSocketColor = "rgba(255, 255, 255, 0.5)";
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

document.getElementById('botonJugar').onclick = function() {
    contJugar.style.display = 'none';
    canvas.style.display = 'block';
    var select = document.getElementById('usr');
    var difficulty = select.options[select.selectedIndex].text;
    switch (difficulty) {
        case 'Facil':
        figAmount = 9;
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
}();

function restart() {
    contJugar.style.display = 'block';
    canvas.style.display = 'none';
    init();
}


function clearBackground() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function init() {
    clearBackground();
    socketsArray = [];
    figurasArray = [];
    var triangulo = new Triangle(110, 100, 70, 100);
    figurasArray.push(triangulo);
    var cuadrado = new Sqare(270, 110, 80, 80);
    figurasArray.push(cuadrado);
    var estrella9 = new Star(470, 65, 30, 45, 9);
    figurasArray.push(estrella9);
    var circulo2 = new Circle(180, 190, 40);
    figurasArray.push(circulo2);
    var rectangulo = new Sqare(300, 210, 50, 100);
    figurasArray.push(rectangulo);
    var estrella6 = new Star(140, 320, 30, 45, 6);
    figurasArray.push(estrella6);
    var rombo = new Romb(220, 350, 60, 70);
    figurasArray.push(rombo);
    var estrella3 = new Star(370, 320, 30, 45, 5);
    figurasArray.push(estrella3);
    var rectangulo2 = new Sqare(470, 370, 100, 50);
    figurasArray.push(rectangulo2);

    var socketTriang = new Socket(730, 350, triangulo);
    socketsArray.push(socketTriang);
    var socketCuadrado = new Socket(880, 350, cuadrado);
    socketsArray.push(socketCuadrado);
    var socketEstrella2 = new Socket(900, 190, estrella9);
    socketsArray.push(socketEstrella2);
    var socketCirculo2 = new Socket(1180, 310, circulo2);
    socketsArray.push(socketCirculo2);
    var socketRectangulo = new Socket(950, 100, rectangulo);
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
    ctx.fillStyle = 'rgba(148,0,211, 0.3)';
    ctx.fillRect(margin, 0, canvas.width/2-margin, canvas.height);
    ctx.fillStyle = 'rgba(255,0,0, 0.3)';
    ctx.fillRect(canvas.width/2 + margin, 0, canvas.width/2-(margin*2), canvas.height);
    for (var i = 0; i < socketsArray.length; i++) {
        socketsArray[i].draw();
    }
}

function getTexture(){
    var texture = new Image();
    var num = Math.floor((Math.random() * 5) + 1);
    texture.src = "assets/cristal" + 1 + ".jpg";
    var $img = $('<img>', { src: texture.src });
    var reader = new FileReader();
    reader.onload = fileOnload;
    reader.readAsDataURL(texture.src);
    function fileOnload() {
    $img.load(function () {
        ctx.drawImage(this, 0, 0, 100, 100);
        imageData = ctx.getImageData(0, 0, 100, 100);
        imageDataOriginal = ctx.getImageData(0, 0, 100, 100);
        setTimeout(function() {
            ctx.putImageData(imageData, 0, 0);
          }, 1000);
    });
    return texture;
}
}
