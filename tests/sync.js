var SyncImage = require('image').SyncImage;
var fs = require('fs');

var desktop = fs.readFileSync('desktop.bgr');

['png', 'gif', 'jpeg'].forEach(function (imageType) {
    var image = new SyncImage(imageType, 'bgr');
    fs.writeFileSync('desktop-sync' + '.' + imageType,
        image.encode(desktop, 1024, 768), 'binary');
});

