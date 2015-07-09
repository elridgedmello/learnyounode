'use strict';

var http = require('http');
var fs = require('fs');
var src = fs.createReadStream(process.argv[3]);
var server = http.createServer(function(request, response) {
    console.log('received request ' + request.url);
    src.pipe(response);
});
server.listen(process.argv[2]);