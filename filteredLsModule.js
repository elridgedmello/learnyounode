var fs = require('fs');

module.exports = function(directory, extension, callback) {
    "use strict";

    fs.readdir(directory, function(err, files) {
        var filteredFiles;

        if(err) {
            callback(err);
        } else {
            filteredFiles = files.filter(function(file) {
                return file.indexOf('.' + extension) >= 0;
            });
            callback(null, filteredFiles);
        }
    });
};