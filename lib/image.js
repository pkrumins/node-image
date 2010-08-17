var libs = {
    png : null,
    gif : null,
    jpeg : null
};

var encoders = {
    png : 'Png',
    gif : 'Gif',
    jpeg : 'Jpeg'
};

var stackedEncoders = {
    png : 'DynamicPngStack',
    gif : 'DynamicGifStack',
    jpeg : 'DynamicJpegStack'
};

module.exports = Image;
module.exports.Image = Image;
function Image (imageType, bufferType) {
    if (!(this instanceof Image)) return new Image(imageType, bufferType);
    if (!bufferType) bufferType = 'rgb';
    if (!libs[imageType]) libs[imageType] = require(imageType);
        
    this.encode = function (buf, width, height, callback) {
        var encoder = new libs[imageType][encoders[imageType]](buf, width, height, bufferType);
        encoder.encode(callback);
    }

    this.encodeSync = function (buf, width, height) {
        var encoder = new libs[imageType][encoders[imageType]](buf, width, height, bufferType);
        return encoder.encodeSync();
    }

    this.type = imageType;
};

module.exports.Stack = Stack;
function Stack (imageType, bufferType) {
    if (!(this instanceof Stack)) return new Stack(imageType, bufferType);
    if (!bufferType) bufferType = 'rgb';
    if (!libs[imageType]) libs[imageType] = require(imageType);

    var stack = new libs[imageType][stackedEncoders[imageType]](bufferType);

    this.encode = function (callback) {
        stack.encode(callback);
    }

    this.encodeSync = function () {
        return stack.encodeSync();
    }

    this.push = function (buf, x, y, w, h) {
        stack.push(buf, x, y, w, h);
    }

    this.dimensions = function () {
        return stack.dimensions();
    }

    this.type = imageType;
};

