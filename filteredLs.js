fs = require('fs');

var directoryPath = process.argv[2];
var extension = process.argv[3];
//console.log('dir: ' + directoryPath);
//console.log('ext: ' + extension);

fs.readdir(directoryPath, function(err, files) {
    'use strict';

    var filteredFiles = files.filter(function(file) {
        return file.indexOf('.' + extension) >= 0;
    });

    filteredFiles.forEach(function(file) {
        console.log(file);
    });

});