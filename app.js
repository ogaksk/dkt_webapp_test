var http = require('http')
  , fs = require('fs')
  , indexHtml = fs.readFileSync('./index.html')
  , BinaryServer = require('binaryjs').BinaryServer
  , binaryServer = BinaryServer({port: 9000});

// Serv the static page..

var server = http.createServer(function(request, response) {
  response.writeHead(200);
  response.end(indexHtml);
});

// WebServer listens on Port 4000

server.listen(3000);


binaryServer.on('connection', function(client) {
  var file = fs.createReadStream(__dirname + '/flower.png');
  client.send(file);
});