var gameElement = $('#game-background');
var preGame = $('#pre-game');
var btnPlay = $('#play-btn');
var infoPanel = $('#info-panel');
var pointsElement = $('#points');
var points = 0;

pointsElement[0].innerHTML = 'Points: ' + points;

btnPlay.click(function(){
  gameElement.show();
  preGame.hide();
  infoPanel.show();
  allowedInput = true;
});

gameElement.hide();
preGame.show();
infoPanel.hide();

function update() {
  setInterval(function () {
    for (var i = 0; i < enemies.length; i++) {
      if (enemies[i].id == 'enemy-bat') {
        if (enemies[i].offsetLeft > 210 && enemies[i].offsetLeft < 240 && player[0].offsetTop != 380) {
          allowedInput = false;
          die();
        }
      } else {
        if (enemies[i].offsetLeft > 80 && enemies[i].offsetLeft < 115 && player[0].offsetTop >= 300) {
          player.deathByLog = true;
          allowedInput = false;
          die();
        }
      }
    }
  }, 100);
}

function addPoint () {
  if (gameMovement) { 
    points ++;
    pointsElement[0].innerHTML = 'Points: ' + points;
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

update();
