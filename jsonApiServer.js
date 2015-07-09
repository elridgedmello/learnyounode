"use strict";

var http = require('http');
var url = require('url');

var server = http.createServer(function(request, response) {
    var parsedUrl = url.parse(request.url, true),
        dateTime = new Date(parsedUrl.query.iso);

    function parseIsoTime(dateObj) {
        return {
            hour: dateObj.getHours(),
            minute: dateObj.getMinutes(),
            second: dateObj.getSeconds()
        };
    }

    function convertToUnixTime(dateObj) {
        return {
            unixtime: dateObj.getTime()
        };
    }

    function respondAs(statusCode, resultObj) {
        response.writeHead(statusCode, {'Content-Type': 'application/json'});
        response.end(JSON.stringify(resultObj));
    }

    // routing
    switch(parsedUrl.pathname) {
        case '/api/parsetime':
            respondAs(200, parseIsoTime(dateTime));
            break;
        case '/api/unixtime':
            respondAs(200, convertToUnixTime(dateTime));
            break;
        default:
            respondAs(404, {error: 'Resource Not Found'});
    }
});

server.listen(process.argv[2]);