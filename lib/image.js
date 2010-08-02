var PngLib = require('png');
var GifLib = require('gif');
var JpegLib = require('jpeg');

var encoders = {
    'png' : PngLib.Png,
    'gif' : GifLib.Gif,
    'jpeg' : JpegLib.Jpeg
};

var stacked_encoders = {
    'png' : PngLib.DynamicPngStack,
    'gif' : GifLib.DynamicGifStack,
    'jpeg' : JpegLib.DynamicJpegStack
};

module.exports = Image;
module.exports.Image = Image;
function Image (imageType, bufferType) {
    if (!(this instanceof Image)) return new Image(imageType, bufferType);
    if (!bufferType) bufferType = 'rgb';
        
    this.encode = function (buf, width, height) {
        return (new encoders[imageType](buf, width, height, bufferType)).encode();
    }

    this.type = imageType;
};

module.exports.Stack = Stack;
function Stack (imageType, bufferType) {
    if (!(this instanceof Stack)) return new Stack(imageType, bufferType);
    if (!bufferType) bufferType = 'rgb';

    var stack = new stacked_encoders[imageType](bufferType);

    this.encode = function () {
        return stack.encode();
    }

    this.push = function (buf, x, y, w, h) {
        stack.push(buf, x, y, w, h);
        return this;
    }

    this.dimensions = function () {
        return stack.dimensions();
    }

    this.type = imageType;
};

