var inputs = process.argv.filter(function(value, index) {
  return index >= 2;
}).map(function(numAsString) {
  return Number(numAsString);
});

console.log(inputs.reduce(function(previousValue, currentValue) {
  return previousValue + currentValue;
}));



