var http = require('http');
var url = require('url');
var server = http.createServer(function(request, response) {

  if (request.method =='GET') {
    var requestUrl = url.parse(request.url, true);
    var date = new Date(requestUrl.query.iso);
    var result;

    if (requestUrl.pathname == '/api/parsetime') {
      result = {hour: date.getHours(), minute: date.getMinutes(), second: date.getSeconds()};
    } else if (requestUrl.pathname == '/api/unixtime') {
      result = {unixtime: date.getTime()};
    }

    if (result) {
      response.writeHead(200, {'content-type': 'application/json'});
      response.end(JSON.stringify(result));
    } else {
      response.writeHead(404);
      response.end();
    }

  }

});
server.listen(process.argv[2]);
