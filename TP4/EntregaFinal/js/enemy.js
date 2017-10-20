var enemies = $('.enemy');
function enemiesMoving(state) {
    if (state == true) {
        for (var i = 0; i < enemies.length; i++) {
            enemies[i].style.animationPlayState = 'running';
        }
    }else{
        for (var i = 0; i < enemies.length; i++) {
            enemies[i].style.animationPlayState = 'paused';
        }
    }
}