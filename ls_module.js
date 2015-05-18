module.exports = function (dir, filter, callback) {
  var fs = require("fs");
  var path = require("path");

  fs.readdir(dir, function(err, files) {

      if (err) {
        return callback(err);
      }

      callback(null, files.filter(function(file) {
        return path.extname(file) == "." + filter;
      }));
  });

};
