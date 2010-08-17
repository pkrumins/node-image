This is a node.js module that unifies node-png, node-gif and node-jpeg modules.

It was written by Peteris Krumins (peter@catonmat.net).
His blog is at http://www.catonmat.net  --  good coders code, great reuse.

------------------------------------------------------------------------------

Overview
--------

Node-image module abstracts over node-png, node-gif and node-jpeg modules.
It exports `Image`, and `Stack` objects.

Use the `Image` object to encode individual images of a specific width and
height synchronously (blocking) and asynchronously.

Here is an example that encodes the images synchronously:

    var Image = require('image');

    var png = new Image('png').encodeSync(buffer, width, height);
    var gif = new Image('gif').encodeSync(buffer, widht, height);
    var jpeg = new Image('jpeg').encodeSync(buffer, width, height);


Use `.encode` function to do the same asynchronously. Pass it a callback with
two arguments:

    var Image = require('image');
    
    (new Image('png')).encode(buffer, width, height,
        function (data, error) {
            // 'data' contains the png image
        }
    );


The buffers must be of node's `Buffer` type and they must hold either RGB, BGR,
RGBA or BGRA values. `Image` object defaults to RGB. To use a differnet buffer
type, pass it as the 2nd argument to `Image's` constructor:

    var png = new Image('png', 'bgra').encodeSync(buffer, 800, 600);


The `Stack` object is used to create dynamic stacks of images in sync and async
manner.

What I mean by that is that you can push an image to position (x, y) = (20, 40)
and then push another image to position (x, y) = (1000, 2000), and the image
will grow dynamically. Here is hot to use it:

    var Stack = require('image').Stack;

    var pngStack = new Stack('png');
    pngStack.push(buffer, x, y, width, height);
    var png = pngStack.encodeSync();
    console.dir(png.dimensions()); // prints dynamic png's dimensions

And the same asynchronously:

    var Stack = require('image').Stack;

    var pngStack = new Stack('png');
    pngStack.push(buffer, x, y, width, height);
    pngStack.encode(function (data, dims, error) {
        // 'data' contains the png image and 'dims' contains its dynamic dimensions
    });


See tests/ directory for some examples, it comes with a BGR buffer for testing.
First unpack it:

    tar -xjf desktop.tar.bz2

Then run any of sync.js, async.js, sync-stack.js, async-stack.js examples.


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

