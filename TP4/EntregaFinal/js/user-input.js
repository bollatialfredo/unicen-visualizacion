
var allowedInput = true;

function imagePreload() {
    var walk = new Image();
    walk.src = 'assets/walk.png';
    var die = new Image();
    die.src = 'assets/dead.png';
    var jump = new Image();
    die.src = 'assets/jump.png';
    var slide = new Image();
    die.src = 'assets/slide.png';
}
imagePreload();

$(document).keydown(function(e) {
  switch(e.which) {
    case 37: // left
    break;

    case 38: // up
    if (allowedInput) {
      allowedInput = false;
      jump();
    }
    break;

    case 39: // right
    if (allowedInput) {
      player.addClass('walk');
      player.removeClass('standing-right');
      backgroundMoving(true);
    }
    break;

    case 40: // down
    if (allowedInput) {
      allowedInput = false;
      slide();
    }
    break;

    default: return; // exit this handler for other keys
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
