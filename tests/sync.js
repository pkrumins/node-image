var Image = require('image').Image;
var fs = require('fs');

var desktop = fs.readFileSync('desktop.bgr');

['png', 'gif', 'jpeg'].forEach(function (imageType) {
    var image = new Image(imageType, 'bgr');
    fs.writeFileSync('desktop-sync' + '.' + imageType,
        image.encodeSync(desktop, 1024, 768), 'binary');
});

