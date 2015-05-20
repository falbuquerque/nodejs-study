var trumpet = require('trumpet');
var map = require('through2-map');
var selector = trumpet();
var toUpper = map(function (data) {
  return data.toString().toUpperCase();
});

var selectLoud = selector.selectAll('.loud').createStream();
selectLoud.pipe(toUpper).pipe(selectLoud);

process.stdin.pipe(selector).pipe(process.stdout);
