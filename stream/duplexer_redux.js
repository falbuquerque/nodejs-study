var duplexer = require('duplexer2');
var map = require('through2').obj;

module.exports = function (counter) {
    var counts = {};
    return duplexer(map(write, end), counter);

    function write (data, encoding, callback) {
        counts[data.country] = (counts[data.country] || 0) + 1;
        callback();
    }

    function end (callback) {
        counter.setCounts(counts);
        callback();
    }

};
