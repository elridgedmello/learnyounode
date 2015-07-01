var http = require('http'),
    bl = require('bl'),
    urls = process.argv.slice(2,5);

var callbackCount = 0;

var dataHandler = function (err, data) {
    callbackCount++;

    if (err)
        return;
    console.log(data.toString());
    if (callbackCount < urls.length) {
        getRemoteData();
    }
};

function getRemoteData() {
    http.get(urls[callbackCount], function(response) {
        response.pipe(bl(dataHandler))
    });
}

getRemoteData();
