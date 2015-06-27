var http = require('http'),
    bl = require('bl'),
    url = process.argv[2];

http.get(url, function(response) {
    "use strict";

    response.pipe(bl(function(err, data) {
        if (!err) {
            console.log(data.length);
            console.log(data.toString());
        }
    }));

});
