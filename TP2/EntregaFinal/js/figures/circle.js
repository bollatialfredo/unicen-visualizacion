function Circle(paramPosX, paramPosY, paramRadio) {
  this.x = paramPosX;
  this.y = paramPosY;
  this.radius = paramRadio;
  this.selected = false;
  this.height = paramRadio * 2;
  this.done = false;
}

Circle.prototype.draw = function (x, y, still) {
  if (!still && !this.done) {
    this.y = y;
    this.x = x;
  }
  ctx.beginPath();
  ctx.arc(x, y, this.radius, 0, 2 * Math.PI, false);
  switchFillStyles(still);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
  ctx.fillStyle = fillColor;
  ctx.strokeStyle = strokeColor;
};

Circle.prototype.detectClickInside = function () {
  circleDetectClickInside(this);
};
