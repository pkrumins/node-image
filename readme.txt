This is a node.js module that unifies node-png, node-gif and node-jpeg modules.

It was written by Peteris Krumins (peter@catonmat.net).
His blog is at http://www.catonmat.net  --  good coders code, great reuse.

------------------------------------------------------------------------------

Overview
--------

Node-image module abstracts over node-png, node-gif and node-jpeg modules.
It exports `Image`, `SyncImage, `Stack`, and `SyncStack` objects.

Use the `SyncImage` object to encode individual images of a specific width
and height synchronously (blocking). For example:

    var SyncImage = require('image').SyncImage;

    var png = new SyncImage('png').encode(buffer, width, height);
    var gif = new SyncImage('gif').encode(buffer, widht, height);
    var jpeg = new SyncImage('jpeg').encode(buffer, width, height);


Use `Image` to do the same asynchronously:

    var Image = require('image');
    
    (new Image('png')).encode(buffer, width, height,
        function (data, error) {
            // 'data' contains the png image
        }
    );


The buffers must be of node's `Buffer` type and they must hold either RGB, BGR,
RGBA or BGRA values. `Image` and `SyncImage` objects default to RGB. To use a
differnet buffer type, pass it as the 2nd argument to `Image's` constructor:

    var png = new SyncImage('png', 'bgra').encode(buffer, 800, 600);


The `SyncStack` object is used to create dynamic stacks of images synchronously.
What I mean by that is that you can push an image to position (x, y) = (20, 40)
and then push another image to position (x, y) = (1000, 2000), and the image
will grow dynamically. Here is hot to use it:

    var SyncStack = require('image').SyncStack;

    var pngStack = new SyncStack('png');
    pngStack.push(buffer, x, y, width, height);
    var png = pngStack.encode();

`Stack` is the same but asynchronous:

    var Stack = require('image').Stack;

    var pngStack = new Stack('png');
    pngStack.push(buffer, x, y, width, height);
    pngStack.encode(function (data, error) {
        // 'data' contains the png image
    });


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

