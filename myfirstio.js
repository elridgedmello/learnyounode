fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]);
var bufferStr = buffer.toString();
var lines = bufferStr.split('\n'); // split on newline char

console.log(lines.length - 1);  // count the number of newlines
