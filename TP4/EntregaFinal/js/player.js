var player = $('#player');

function die() {
  allowedInput = false;
  player.dead = true;
  backgroundMoving(false);
  enemiesMoving(false);
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
    allowedInput = true;
    player.removeClass('jump');
  });
  setTimeout(function () {
    console.log(player[0].offsetTop);
  }, 400);
}

function slide() {
  player.addClass('slide');
  player[0].addEventListener("animationend", function () {
    allowedInput = true;
    player.removeClass('slide');
  });
  setTimeout(function () {
    console.log(player[0].offsetTop);
  }, 400);
}
