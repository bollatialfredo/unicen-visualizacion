function Romb(x, y, height, width) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.puntos = [];
    this.done = false;
  }
  Romb.prototype.draw = function (x, y, still) {
    if (!still && !this.done) {
      this.y = y;
      this.x = x;
    }
    this.puntos = [];
    switchFillStyles(still);
    ctx.beginPath();
    this.addPunto({X: x + this.width/2, Y: y + this.height/3});
    this.addPunto({X: x + this.width, Y: y - this.height/2});
    this.addPunto({X: x + this.width/2, Y: y - this.height - this.height/3});
    this.addPunto({X: x, Y: y - this.height/2});
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = fillColor;
  };

  Romb.prototype.addPunto = function(punto){
    if(this.puntos.length == 0){
      ctx.moveTo(punto.X, punto.Y);
    }else{
      ctx.lineTo(punto.X, punto.Y);
    }
    this.puntos.push(punto);
  }

  Romb.prototype.detectClickInside = function () {
    pointsDetectClickInside(this);
  }
