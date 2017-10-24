var enemies = $('.enemy');
enemies.push($('.enemy-anim')[0]);
function update() {
  setInterval(function () {
    for (var i = 0; i < enemies.length; i++) {

      if (enemies[i].id == 'enemy-bat') {

        if (enemies[i].offsetLeft > 210 && enemies[i].offsetLeft < 240 && player[0].offsetTop != 380) {
          console.dir(enemies[i]);
          console.log("die-bat");
          allowedInput = false;
          die();
        }

      } else {
        if (enemies[i].offsetLeft > 80 && enemies[i].offsetLeft < 115 && player[0].offsetTop >= 300) {

          console.log("die-log");

          allowedInput = false;
          die();
        }

      }

    }
  }, 100);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

update();
