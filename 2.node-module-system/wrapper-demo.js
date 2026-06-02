const wrapperExplorer = require('./wrapper-explorer');
//internally the node wrap every module
/*
(function(exports, require, module, __filename, __dirname) {

    console.log('node module wrapper demo');

    module.exports.greet = function(name){
        console.log('hello', name);
    }

});*/


console.log('in wrapper-demo.js file')


console.log('__filename in wrapper demo', __filename)

console.log('__dirname in wrapper-demo', __dirname)


wrapperExplorer.greet("lakshya");
/*Node.js wraps every file inside a hidden function called the Module Wrapper.

(function(exports, require, module, __filename, __dirname) {
    // file code
})

This gives each file its own private scope and provides built-in variables such as require, module.exports, __filename, and __dirname.


node wrapper-demo.js
        |
        v
wrapper-demo.js starts
        |
        v
require('./wrapper-explorer')
        |
        v
--------------------------
wrapper-explorer.js runs
--------------------------

node module wrapper demo

__filename explorer

__dirname explorer

module.exports = {
    greet: fn
}

--------------------------
returns exports
--------------------------

        |
        v
back to wrapper-demo.js

in wrapper-demo.js file

__filename demo

__dirname demo

wrapperExplorer.greet("lakshya")

hello lakshya
*/