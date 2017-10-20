var enemies = $('.enemy');



function update() {
  setInterval(function () {
    for (var i = 0; i < enemies.length; i++) {
      if (enemies[i].offsetLeft > 50 && enemies[i].offsetLeft < 150 && player[0].offsetTop >= 300) {
        allowedInput = false;
        die();
      }
    }
  }, 100);
}

update();
