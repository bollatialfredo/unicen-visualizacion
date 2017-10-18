var layers = $('.background');
function backgroundMoving(state) {
    if (state == true) {
        for (var i = 0; i < layers.length; i++) {
            layers[i].style.animationPlayState = 'running';
        }
    }else{
        for (var i = 0; i < layers.length; i++) {
            layers[i].style.animationPlayState = 'paused';
        }
    }
}