canvas.onmousedown = function(e){
  x = e.layerX;
  y = e.layerY;
  for (var i = figurasArray.length-1; i >= 0; i--) {
    if (!firstSelected) {
      figurasArray[i].detectClickInside();
    }
  }
};

canvas.onmousemove = function(e){
  if(dragging){
    x = e.layerX;
    y = e.layerY;
    clearBackground();
    drawContext();
    figurasArray.forEach(function(fig) {
      if(fig.selected){
        fig.draw(x, y);
      }else{
        fig.draw(fig.x, fig.y);
      }
    });
  }
};

canvas.onmouseup = function(e){
  dragging = false;
  figurasArray.forEach(function(fig) {
   fig.selected = false;
  });
  firstSelected = false;
};
