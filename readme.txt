This is a node.js module that unifies node-png, node-gif and node-jpeg modules.

It was written by Peteris Krumins (peter@catonmat.net).
His blog is at http://www.catonmat.net  --  good coders code, great reuse.

------------------------------------------------------------------------------

Overview
--------

Node-image module abstracts over node-png, node-gif and node-jpeg modules.
Currently it exports `Image` and `Stack` objects.

Use the `Image` object to encode individual images of a specific width
and height. For example:

    var Image = require('image');

    var png = new Image('png').encode(buffer, width, height);
    var gif = new Image('gif').encode(buffer, widht, height);
    var jpeg = new Image('jpeg').encode(buffer, width, height);

The buffers must be of node's `Buffer` type and they must hold either RGB, BGR,
RGBA or BGRA values. The `Image` object defaults to RGB, to use a differnet
buffer type, pass it as the 2nd argument to `Image's` constructor:

    var png = new Image('png', 'bgra').encode(buffer, 800, 600);


The `Stack` object is used to create dynamic stacks of images. What I mean by
that is that you can push an image to position (x, y) = (20, 40) and then push
another image to position (x, y) = (1000, 2000), and the image will grow
dynamically. Here is hot to use it:

    var Stack = require('image').Stack;

    var pngStack = new Stack('png');
    pngStack.push(buffer, x, y, width, height);
    var png = pngStack.encode();


Dependencies
------------

This module depends on:

    * node-png:  http://github.com/pkrumins/node-png
    * node-gif:  http://github.com/pkrumins/node-gif
    * node-jpeg: http://github.com/pkrumins/node-jpeg

Each of these modules comes with documentation. Follow the installation steps
to get them installed.

The steps for all the modules are all the same, run:

    node-waf configure build

in each module's directory.

------------------------------------------------------------------------------

Have fun producing images!


Sincerely,
Peteris Krumins
http://www.catonmat.net

