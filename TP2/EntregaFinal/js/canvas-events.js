canvas.onmousedown = function(e){
  for (var i = figurasArray.length-1; i >= 0; i--) {
    if (!firstSelected) {
      figurasArray[i].detectClickInside();
    }
  }
};

canvas.onmousemove = function(e){
  // triangulo.draw(100,100, 120, 80, 140, 100);
  x = e.layerX;
  y = e.layerY;
  if(dragging){
    clearBackground();
    drawContext();
    figurasArray.forEach(function(fig) {
      if(fig.selected){
        fig.draw(x, y);
      }else{
        fig.draw(fig.posX, fig.posY);
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
