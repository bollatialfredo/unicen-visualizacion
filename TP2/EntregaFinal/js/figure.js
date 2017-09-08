function select(fig){
    dragging = true;
    fig.selected = true;
    firstSelected = true;
    console.log(figurasArray);
    var aux = figurasArray[figurasArray.length - 1];
    var pos = figurasArray.indexOf(fig);
    figurasArray[figurasArray.length - 1] = fig;
    figurasArray[pos] = aux;
}