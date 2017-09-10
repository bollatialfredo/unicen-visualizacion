function select(fig){
    dragging = true;
    figSelected = fig;
    fig.selected = true;
    firstSelected = true;
    x = fig.x;
    y = fig.y;
    var aux = figurasArray[figurasArray.length - 1];
    var pos = figurasArray.indexOf(fig);
    figurasArray[figurasArray.length - 1] = fig;
    figurasArray[pos] = aux;
}
function switchFillStyles(socket){
    if (socket) {
        ctx.fillStyle = fillSocketColor;
        ctx.strokeStyle = strokeSocketColor;
    } else {
        ctx.fillStyle = fillColor;
        ctx.strokeStyle = strokeColor;
    }
}
function circleDetectClickInside(fig) {
    if (!fig.done) {
        var val = Math.sqrt(Math.pow((detectX - fig.x), 2) + Math.pow((detectY - fig.y), 2));
        if (val < fig.radius && !firstSelected) {
            select(fig);
        }
    }
}
function pointsDetectClickInside(fig) {
    if (!fig.done) {
        for (var i = 0, j = fig.puntos.length - 1 ; i < fig.puntos.length; j = i++){
            if (fig.puntos[i].Y > detectY != fig.puntos[j].Y > detectY &&
                detectX < (fig.puntos[j].X - fig.puntos[i].X) *
                (detectY - fig.puntos[i].Y) / (fig.puntos[j].Y - fig.puntos[i].Y) + fig.puntos[i].X) {
                    if (!firstSelected && fig.x < detectX) {
                        select(fig);
                    }
                }
            }
        }
    }
