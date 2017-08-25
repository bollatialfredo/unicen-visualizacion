$(function () {
    var $img;
    var context;
    var canvas;
    var imageData;
    var imageDataOriginal;

    function fileOnload(e) {

        $img = $('<img>', { src: e.target.result });
        canvas = $('#canvas')[0];
        context = canvas.getContext('2d');
        var MAX_WIDTH = 600;
        var MAX_HEIGHT = 400;
        var width = $img[0].width;
        var height = $img[0].height;
        if (width > height) {
            if (width > MAX_WIDTH) {
                height *= MAX_WIDTH / width;
                width = MAX_WIDTH;
            }
        } else {
            if (height > MAX_HEIGHT) {
                width *= MAX_HEIGHT / height;
                height = MAX_HEIGHT;
            }
        }
        canvas.height = height;
        canvas.width = width;
        $img.load(function () {

            
            context.drawImage(this, 0, 0, width, height);
            imageData = context.getImageData(0, 0, this.width, this.height);
            imageDataOriginal = context.getImageData(0, 0, this.width, this.height);
            // filtroNegativo(imageData);
            //filtroBlancoYNegro(imageData);
            // blur(0.1, [  0, -1,  0,
            //             -1,  5, -1,
            //              0, -1,  0 ]);
            setTimeout(function() {
                context.putImageData(imageData, 0, 0);
              }, 1000);
        });
    }

    function getRed(imageData, x, y) {
        var index = (x + y * imageData.width) * 4;
        return imageData.data[index + 0];
    }
    function getGreen(imageData, x, y) {
        var index = (x + y * imageData.width) * 4;
        return imageData.data[index + 1]
    }
    function getBlue(imageData, x, y) {
        var index = (x + y * imageData.width) * 4;
        return imageData.data[index + 2]
    }

    function setPixel(imageData, x, y, r, g, b, a) {
        var index = (x + y * imageData.width) * 4;
        imageData.data[index + 0] = r;
        imageData.data[index + 1] = g;
        imageData.data[index + 2] = b;
        imageData.data[index + 3] = a;
    }

    function resetFilter() {
        context.putImageData(imageDataOriginal, 0, 0);
        imageData = context.getImageData(0, 0, imageDataOriginal.height, imageDataOriginal.width);
    }

    function filtroNegativo() {
        resetFilter();
        for (var x = 0; x < imageData.width; x++) {
            for (var y = 0; y < imageData.height; y++) {
                setPixel(imageData, x, y, 255 - getRed(imageData, x, y), 255 - getGreen(imageData, x, y), 255 - getBlue(imageData, x, y), 255);
            }
        }
        context.putImageData(imageData, 0, 0);
    }
    function filtroBrillo() {
        resetFilter();
        for (var x = 0; x < imageData.width; x++) {
            for (var y = 0; y < imageData.height; y++) {
                setPixel(imageData, x, y, (getRed(imageData, x, y) + 50), (getGreen(imageData, x, y) + 50), (getBlue(imageData, x, y) + 50), 255);
            }
        }
        context.putImageData(imageData, 0, 0);
    }
    function filtroBlancoYNegro() {
        resetFilter();
        for (var x = 0; x < imageData.width; x++) {
            for (var y = 0; y < imageData.height; y++) {
                var r = getRed(imageData, x, y);
                var g = getGreen(imageData, x, y);
                var b = getBlue(imageData, x, y);
                var val = (r + g + b) / 3;
                setPixel(imageData, x, y, val, val, val, 255);
            }
        }
        context.putImageData(imageData, 0, 0);
    }

    // function blur(weights, opaque) {
    //     resetFilter();
    //     var side = Math.round(Math.sqrt(weights.length));
    //     var halfSide = Math.floor(side/2);
    //     var src = imageData.data;
    //     var sw = imageData.width;
    //     var sh = imageData.height;
    //     // pad output by the convolution matrix
    //     var w = sw;
    //     var h = sh;
    //     var output = context.createImageData(w, h);
    //     var dst = output.data;
    //     // go through the destination image pixels
    //     var alphaFac = opaque ? 1 : 0;
    //     for (var y=0; y<h; y++) {
    //       for (var x=0; x<w; x++) {
    //         var sy = y;
    //         var sx = x;
    //         var dstOff = (y*w+x)*4;
    //         // calculate the weighed sum of the source image pixels that
    //         // fall under the convolution matrix
    //         var r=0, g=0, b=0, a=0;
    //         for (var cy=0; cy<side; cy++) {
    //           for (var cx=0; cx<side; cx++) {
    //             var scy = sy + cy - halfSide;
    //             var scx = sx + cx - halfSide;
    //             if (scy >= 0 && scy < sh && scx >= 0 && scx < sw) {
    //               var srcOff = (scy*sw+scx)*4;
    //               var wt = weights[cy*side+cx];
    //               r += src[srcOff] * wt;
    //               g += src[srcOff+1] * wt;
    //               b += src[srcOff+2] * wt;
    //               a += src[srcOff+3] * wt;
    //             }
    //           }
    //         }
    //         dst[dstOff] = r;
    //         dst[dstOff+1] = g;
    //         dst[dstOff+2] = b;
    //         dst[dstOff+3] = a + alphaFac*(255-a);
    //       }
    //     }
    //     console.log(output);
    //     imageData = output;
    //     context.putImageData(imageData, 0, 0);
    //   };

    function download(){
        var img = document.createElement("img");
        img.src = canvas.toDataURL("image/png");
        var url = img.src.replace(/^data:image\/[^;]/, 'data:application/octet-stream');
        window.open(url);
        console.log($img);
    }

    $('#backButtonConteiner').hide();
    $('#downloadButtonConteiner').hide();
    $('#filters').hide();


    $('#backButtonConteiner').click(function () {
        $('#backButtonConteiner').hide();
        $('#downloadButtonConteiner').hide();
        $('#inputConteiner').show();
        $('#filters').hide();
        // context.clearRect(0, 0, canvas.width, canvas.height);
        canvas.height = 0;
        canvas.width = 0;
        canvas = null;
    });

    $('#downloadButtonConteiner').click(function () {
        download();
    });

    $('#f-negative').click(function () {
        filtroNegativo();
    });
    $('#f-brillo').click(function () {
        filtroBrillo();
    });
    $('#f-blancoYNegro').click(function () {
        filtroBlancoYNegro();
    });
    $('#resetFilter').click(function () {
        resetFilter();
    });


    $('#file-input').change(function (e) {
        $('#filters').show();
        $('#backButtonConteiner').show();
        $('#downloadButtonConteiner').show();
        $('#inputConteiner').hide();
        var file = e.target.files[0],
            imageType = /image.*/;

        if (!file.type.match(imageType))
            return;

        var reader = new FileReader();
        reader.onload = fileOnload;
        reader.readAsDataURL(file);
    });


});
