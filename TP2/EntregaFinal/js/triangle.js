
function Triangle(x, y, height, width) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.puntos = []
  }
  
  Triangle.prototype.draw = function (x, y, still) {
    if (!still) {
      this.y = y;
      this.x = x;
    }
    this.puntos = [];
    ctx.fillStyle = 'white';
    ctx.beginPath();
    this.addPunto({X: this.x, Y: this.y});
    this.addPunto({X: this.x + this.width, Y:this.y});
    this.addPunto({X: this.x + this.width / 2, Y: this.y - this.height});
    this.addPunto({X: this.x, Y: this.y});
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  };

  Triangle.prototype.addPunto = function(punto){
    if(this.puntos.length == 0){
      ctx.moveTo(punto.X, punto.Y);
    }else{
      ctx.lineTo(punto.X, punto.Y);
    }
    this.puntos.push(punto);
  }

  Triangle.prototype.detectClickInside = function () {
    for (let i = 0, j = this.puntos.length - 1 ; i < this.puntos.length; j = i++){
      if (this.puntos[i].Y > y != this.puntos[j].Y > y && x < (this.puntos[j].X - this.puntos[i].X) *   (y - this.puntos[i].Y) / (this.puntos[j].Y - this.puntos[i].Y) + this.puntos[i].X) {
        if (!firstSelected) {
          console.log("in");
          select(this);
        }    
      }
    }
  }