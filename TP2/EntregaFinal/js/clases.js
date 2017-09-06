function Circle (paramPosX, paramPosY, paramRadio, color) {
  this.posX = paramPosX;
  this.posY = paramPosY;
  this.radio = paramRadio;
  this.selected = false;
  this.color = color;
  this.height = paramRadio * 2;
}

Circle.prototype.draw = function (x, y, transparent) {
  if (!transparent) {
    this.posY = y;
    this.posX = x;
  }
  ctx.beginPath();
  ctx.arc(x, y, this.radio, 0, 2 * Math.PI);
  // var pat = ctx.createPattern(this.color,"no-repeat");
  if (transparent) {
    ctx.fillStyle = 'black';
    console.log('trasparnte');
  }else{
    ctx.fillStyle = this.color;
  }
  ctx.fill();
  ctx.closePath();
};
Circle.prototype.move = function(){
  if(dragging){
    clearBackground();
    this.draw(x, y);
  }
};
Circle.prototype.detectClickInside = function(){
  var val = Math.sqrt(Math.pow((x - this.posX), 2) + Math.pow((y - this.posY), 2));
  if (val < this.radio && !firstSelected){
    dragging = true;
    this.selected = true;
    firstSelected = true;
    console.log(figurasArray);
    var aux = figurasArray[figurasArray.length-1];
    var pos = figurasArray.indexOf(this);
    figurasArray[figurasArray.length-1] = this;
    figurasArray[pos] = aux;
  }
}

function Socket(paramPosX, paramPosY, color, figure) {
  this.posX = paramPosX;
  this.posY = paramPosY;
  this.color = color;
  this.figure = figure;
}
Socket.prototype.draw = function() {
  ctx.fillStyle = this.color;
  ctx.fillRect(this.posX, this.posY, this.figure.height + 20, this.figure.height + 20);
  this.figure.draw(this.posX + (this.figure.height/2) + 10, this.posY + (this.figure.height/2) + 10, true);
}
