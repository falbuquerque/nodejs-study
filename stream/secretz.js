var crypto = require('crypto');
var tar = require('tar');
var zlib = require('zlib');
var concat = require('concat-stream');

var parser = tar.Parse();
parser.on('entry', function (entry) {

    if (entry.type !== 'File') {
      return;
    }

    var h = crypto.createHash('md5', {encoding: 'hex'});
    entry.pipe(h).pipe(concat(function (hash) {
        console.log(hash + ' ' + entry.path);
    }));
});

process.stdin
    .pipe(crypto.createDecipher(process.argv[2], process.argv[3]))
    .pipe(zlib.createGunzip())
    .pipe(parser);