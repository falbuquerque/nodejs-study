var fs = require("fs");
fs.readdir(process.argv[2], function(err, files) {
  var path = require("path");

    files.forEach(function(file) {
      if (path.extname(file) == "." + process.argv[3]) {
        console.log(file);
      }
    });

});
