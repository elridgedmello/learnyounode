fs = require('fs');

var fileContentHandler = function(err, content) {
    'use strict';

    if(!err) {
        console.log(content.split('\n').length - 1);
    } else {
        console.error(err);
    }
};

fs.readFile(process.argv[2], 'utf8',fileContentHandler);