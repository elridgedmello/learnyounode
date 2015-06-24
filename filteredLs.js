myModule = require('./filteredLsModule.js');

var directoryPath = process.argv[2];
var extension = process.argv[3];
//console.log('dir: ' + directoryPath);
//console.log('ext: ' + extension);

myModule(directoryPath, extension, function(err, filteredFiles) {
    'use strict';

    if (!err) {
        filteredFiles.forEach(function (file) {
            console.log(file);
        });
    } else {
        console.info(err);
    }
});