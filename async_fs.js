var fs = require('fs')
fs.readFile(process.argv[2], function(err, file) {
    console.log(file.toString().split('\n').length - 1)
})
