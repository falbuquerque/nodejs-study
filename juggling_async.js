var bl = require('bl')
var http = require('http')
var count = 0
var results = []
var calls = 3

function print() {

  for (var i = 0; i < calls; i++) {
    console.log(results[i])
  }

}

function get(index) {
  http.get(process.argv[2 + index], function(response) {
    response.pipe(bl(function(err, data) {
      results[index] = data.toString()
      count++

      if (count == calls) {
        print()
      }

    }))
  })
}

for (var i = 0; i < calls; i++) {
  get(i)
}
