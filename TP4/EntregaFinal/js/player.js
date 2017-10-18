var player = $('#player');

function die() {
  allowedInput = false;
  backgroundMoving(false);
  player.addClass('die');
  setTimeout(function(){
    player.addClass('dead');
  }, 790);
}

function jump() {
  player.addClass('jump');
  setTimeout(function(){
    allowedInput = true;
    player.removeClass('jump');
    console.log(player[0].offsetTop);
  }, 800);
  setTimeout(function() {
    console.log(player[0].offsetTop);
  }, 400);
}

function slide() {
  player.addClass('slide');
  setTimeout(function(){
    allowedInput = true;
    player.removeClass('slide');
  }, 800);
}
