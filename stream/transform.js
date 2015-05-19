var map = require('through2-map');
process.stdin
  .pipe(map(function(data) {
    return data.toString().toUpperCase();
  }))
  .pipe(process.stdout);
