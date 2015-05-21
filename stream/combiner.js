var combine = require('stream-combiner');
var map = require('through2');
var split = require('split');
var zlib = require('zlib');

module.exports = function () {
    var grouper = map(write, end);
    var current;

    function write (data, encoding, callback) {

        if (data.length === 0) {
          return callback();
        }

        var row = JSON.parse(data);

        if ((row.type === 'genre')) {

          if (current) {
            this.push(JSON.stringify(current) + '\n');
          }

          current = { name: row.name, books: [] };
        } else if (row.type === 'book') {
            current.books.push(row.name);
        }

        callback();
    }

    function end (callback) {

        if (current) {
            this.push(JSON.stringify(current) + '\n');
        }

        callback();
    }

    return combine(split(), grouper, zlib.createGzip());
};
