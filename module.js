var ls = require('./ls_module')
ls(process.argv[2], process.argv[3], function(err, files) {
  files.forEach(function(file) {
    console.log(file)
  })
})
