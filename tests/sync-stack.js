var Stack = require('image').Stack;
var fs = require('fs');

var desktop = fs.readFileSync('desktop.bgr');

['png', 'gif', 'jpeg'].forEach(function (imageType) {
    if (imageType == 'jpeg') {
        console.log('jpeg is tricky, it needs .setBackground, passing it for now');
    }
    else {
        var stack = new Stack(imageType, 'bgr');
        stack.push(desktop, 0, 0, 1024, 768);
        var image = stack.encodeSync();
        fs.writeFileSync('desktop-stack-sync' + '.' + imageType, image, 'binary');
        var dims = stack.dimensions();
        console.log("x: %d, y: %d, w: %d, h: %d", dims.x, dims.y, dims.width, dims.height);
    }
});

