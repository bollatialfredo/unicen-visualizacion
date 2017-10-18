var enemies = $('.enemy');
function update() {
  setInterval(function(){
    for (var i = 0; i < enemies.length; i++) {
      console.log("player offset top: " + player[0].offsetTop);
      if(enemies[i].offsetLeft > 50 && enemies[i].offsetLeft < 150 && player[0].offsetTop >= 300){
        if (allowedInput) {
          die();
        }
    }
  }
},100);
}
update();
