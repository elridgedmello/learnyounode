var net = require('net')
var server = net.createServer(function (socket) {
    // socket handling logic
    var date = new Date(),
        formattedDate;

    function formatForDisplay (value) {
        return value < 10 ? '0' + value : value;
    }

    formattedDate = date.getFullYear() + '-' +
            formatForDisplay(date.getMonth() + 1)+ '-' +
            formatForDisplay(date.getDate()) + ' ' +
            formatForDisplay(date.getHours()) + ':' +
            formatForDisplay(date.getMinutes());

    socket.end(formattedDate);
});
server.listen(process.argv[2]);
