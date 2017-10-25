var player = $('#player');

function die() {
  backgroundMoving(false);
  enemiesMoving(false);
  allowedInput = false;
  player.dead = true;
  player.removeClass('slide');
  player.removeClass('walk');
  player.removeClass('jump');
  player.addClass('die');
  player[0].addEventListener("animationend", function () {
    player.addClass('dead');
    player.addClass('erase');
  });
}

function jump() {
  player.addClass('jump');
  player[0].addEventListener("animationend", function () {
    if (!player.dead) { 
      allowedInput = true;
    }
    player.removeClass('jump');
  });
}

function slide() {
  player.addClass('slide');
  player[0].addEventListener("animationend", function () {
    if (!player.dead) { 
      allowedInput = true;
    }
      player.removeClass('slide');
  });
}
