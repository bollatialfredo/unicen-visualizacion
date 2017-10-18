
var alloedInput = true;

function imagePreload() {
    var walk = new Image();
    walk.src = 'assets/walk.png';
    var die = new Image();
    die.src = 'assets/dead.png';
}
imagePreload();

$(document).keydown(function(e) {
    if (alloedInput) {

  switch(e.which) {
    case 37: // left
    alloedInput = false;
    die();
    break;

    case 38: // up
    alloedInput = false;
    jump();
    break;

    case 39: // right
    player.addClass('walk');
    player.removeClass('standing-right');
    break;

    case 40: // down
    slide();
    break;

    default: return; // exit this handler for other keys
    }
  }
  e.preventDefault(); // prevent the default action (scroll / move caret)
});
$(document).keyup(function(e) {
  switch(e.which) {
    case 37: // left
    break;

    case 38: // up

    break;

    case 39:

    break;

    case 40: // down
    break;

    default: return; // exit this handler for other keys
  }
  e.preventDefault(); // prevent the default action (scroll / move caret)
});
