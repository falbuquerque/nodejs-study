var map = require('through2-map');
var split = require('split');
process.stdin
  .pipe(split())
  .pipe(map(function(data, position) {

    if ((position % 2) == 0) {
      return data.toString().toLowerCase() + '\n';
    } else {
      return data.toString().toUpperCase() + '\n';
    }

  }))
  .pipe(process.stdout);
