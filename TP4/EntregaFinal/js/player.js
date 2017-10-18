var player = $('#player');

function die() {
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
    }, 800);
}

function slide() {
    player.addClass('slide');
    setTimeout(function(){
        allowedInput = true;
        player.removeClass('slide');
    }, 800);
}
