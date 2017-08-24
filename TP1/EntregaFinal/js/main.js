$(function() {
    var $img;
    var context;
    var canvas;
    var imageData;
    var imageDataOriginal;

    function fileOnload(e) {

        $img = $('<img>', { src: e.target.result });
        canvas = $('#canvas')[0];
        context = canvas.getContext('2d');
        $img.load(function() {

            canvas.height = this.height;
            canvas.width = this.width;

            context.drawImage(this, 0, 0, this.width, this.height);
            imageData = context.getImageData(0, 0, this.width, this.height);
            imageDataOriginal = context.getImageData(0, 0, this.width, this.height);
            // filtroNegativo(imageData);
            //filtroBlancoYNegro(imageData);

            context.putImageData(imageData, 0, 0);
        });
    }

    function getRed(imageData, x, y){
        var index = (x + y * imageData.width) * 4;
        return imageData.data[index + 0];
    }
    function getGreen(imageData, x, y){
        var index = (x + y * imageData.width) * 4;
        return imageData.data[index + 1]
    }
    function getBlue(imageData, x, y){
        var index = (x + y * imageData.width) * 4;
        return imageData.data[index + 2]
    }

    function setPixel(imageData, x, y, r, g, b, a){
        var index = (x + y * imageData.width) * 4;
        imageData.data[index+0] = r;
        imageData.data[index+1] = g;
        imageData.data[index+2] = b;
        imageData.data[index+3] = a;
    }

    function resetFilter(){
        context.putImageData(imageDataOriginal, 0, 0);
        imageData = context.getImageData(0, 0, imageDataOriginal.height, imageDataOriginal.width);
    }


    function filtroNegativo (){
        resetFilter();
        for (var x = 0; x < imageData.width; x++) {
            for (var y = 0; y < imageData.height; y++) {
                setPixel(imageData, x, y, 255-getRed(imageData, x, y), 255-getGreen(imageData, x, y), 255-getBlue(imageData, x, y), 255);
            }
        }
        context.putImageData(imageData, 0, 0);
    }
    function filtroBrillo (){
        resetFilter();
        for (var x = 0; x < imageData.width; x++) {
            for (var y = 0; y < imageData.height; y++) {
                setPixel(imageData, x, y, (getRed(imageData, x, y)+50), (getGreen(imageData, x, y)+50), (getBlue(imageData, x, y)+50), 255);
            }
        }
        context.putImageData(imageData, 0, 0);
    }
    function filtroBlancoYNegro (){
        resetFilter();
        for (var x = 0; x < imageData.width; x++) {
            for (var y = 0; y < imageData.height; y++) {
                var r = getRed(imageData, x, y);
                var g = getGreen(imageData, x, y);
                var b = getBlue(imageData, x, y);
                var val = (r+g+b)/3;
                setPixel(imageData, x, y, val, val, val,  255);
            }
        }
        context.putImageData(imageData, 0, 0);
    }

    $('#backButtonConteiner').hide();
    $('#filters').hide();

    function addListeners() {

        $('#backButtonConteiner').click(function (){
            $('#backButtonConteiner').hide();
            $('#inputConteiner').show();
            $('#filters').hide();
            context.clearRect(0, 0, canvas.width, canvas.height);
            canvas = null;
        });

        $('#f-negative').click(function (){
            filtroNegativo();
        });
        $('#f-brillo').click(function (){
            filtroBrillo();
        });
        $('#f-blancoYNegro').click(function (){
            filtroBlancoYNegro();
        });
        $('#resetFilter').click(function (){
            resetFilter();
        });


        $('#file-input').change(function(e) {
            $('#filters').show();
            $('#backButtonConteiner').show();
            $('#inputConteiner').hide();
            var file = e.target.files[0],
            imageType = /image.*/;

            if (!file.type.match(imageType))
            return;

            var reader = new FileReader();
            reader.onload = fileOnload;
            reader.readAsDataURL(file);
        });
    }

    addListeners();

});
