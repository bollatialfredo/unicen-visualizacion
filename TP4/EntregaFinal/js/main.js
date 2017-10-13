let sprite = $('#player');
console.log(sprite);
$(document).keydown(function(e) {
  switch(e.which) {
    case 37: // left
    sprite.addClass('walk-left');
    sprite.addClass('walk');
    sprite.removeClass('standing-right');
    sprite.removeClass('standing-left');
    break;

    case 38: // up
    break;

    case 39:
    sprite.removeClass('walk-left');
    sprite.addClass('walk');
    sprite.removeClass('standing-right');
    sprite.removeClass('standing-left');
    break;

    case 40: // down
    break;

    default: return; // exit this handler for other keys
  }
  e.preventDefault(); // prevent the default action (scroll / move caret)
});
$(document).keyup(function(e) {
  switch(e.which) {
    case 37: // left
    sprite.removeClass('walk-left');
    sprite.addClass('standing-left');
    break;

    case 38: // up

    break;

    case 39:
    sprite.removeClass('walk-left');
    sprite.addClass('standing-right');

    break;

    case 40: // down
    break;

    default: return; // exit this handler for other keys
  }
  e.preventDefault(); // prevent the default action (scroll / move caret)
});
