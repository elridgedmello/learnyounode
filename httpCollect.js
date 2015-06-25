var http = require('http');
var url = process.argv[2];

http.get(url, function(response) {
    "use strict";

    var dataAccumulator = '';

    if (response) {
        response.setEncoding('utf8');
        response.on('data', function(data) {
            dataAccumulator += data;
        });
        response.on('error', console.error);
        response.on('end', function() {
            console.log(dataAccumulator.length);
            console.log(dataAccumulator);
        })
    }

});