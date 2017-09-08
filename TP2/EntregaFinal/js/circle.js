function Circle(paramPosX, paramPosY, paramRadio, color) {
  this.x = paramPosX;
  this.y = paramPosY;
  this.radio = paramRadio;
  this.selected = false;
  this.color = color;
  this.height = paramRadio * 2;
}

Circle.prototype.draw = function (x, y, still) {
  if (!still) {
    this.y = y;
    this.x = x;
  }
  ctx.beginPath();
  ctx.arc(x, y, this.radio, 0, 2 * Math.PI);
  if (still) {
    ctx.fillStyle = 'black';
    console.log('trasparnte');
  } else {
    ctx.fillStyle = this.color;
  }
  ctx.fill();
  ctx.closePath();
};
Circle.prototype.move = function () {
  if (dragging) {
    clearBackground();
    this.draw(x, y);
  }
};
Circle.prototype.detectClickInside = function () {
  var val = Math.sqrt(Math.pow((x - this.x), 2) + Math.pow((y - this.y), 2));
  if (val < this.radio && !firstSelected) {
    select(this);
  }
}


function Socket(paramPosX, paramPosY, color, figure) {
  this.x = paramPosX;
  this.y = paramPosY;
  this.color = color;
  this.figure = figure;
}
Socket.prototype.draw = function () {
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x, this.y, this.figure.height + 20, this.figure.height + 20);
  this.figure.draw(this.x + (this.figure.height / 2) + 10, this.y + (this.figure.height / 2) + 10, true);
}
