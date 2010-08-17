var Image = require('image').Image;
var fs = require('fs');

var desktop = fs.readFileSync('desktop.bgr');

['png', 'gif', 'jpeg'].forEach(function (imageType) {
    var image = new Image(imageType, 'bgr');
    image.encode(desktop, 1024, 768, function (data) {
        fs.writeFileSync('desktop-async' + '.' + imageType, data, 'binary');
    });
});

