'use strict';

var http = require('http');
var map = require('through2-map');
var server = http.createServer(function(request, response) {

    switch(request.method) {
        case 'POST':
            request.pipe(map(function(chunk) {
                return chunk.toString().toUpperCase();
            })).pipe(response);
            break;
        default:
            response.end('Only POST method is supported');
    }
});

server.listen(process.argv[2]);