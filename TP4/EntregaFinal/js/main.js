var enemies = $('.enemy');

function update() {
  setInterval(function () {
    for (var i = 0; i < enemies.length; i++) {
      if (enemies[i].offsetLeft > 50 && enemies[i].offsetLeft < 150 && player[0].offsetTop >= 300) {
        if (enemies[i].id == 'enemy-bat') {
          console.log("die-bat");
        }else {
          console.log("die-log");
          console.dir(enemies[i]);
          // allowedInput = false;
          // die();
        }
      }
    }
  }, 200);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

update();
