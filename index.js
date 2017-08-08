// write your code here
var http = require("http");

var server = http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type": "text/plain"});
    console.log(request.url);
    response.end("Hello World");
});

server.listen(8080);

console.log("Server listening at http://127.0.0.1:8080/")