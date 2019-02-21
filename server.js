/**
 * Created by jaychow on 6/6/17.
 */
var http = require('http');
var connect = require('connect');
var app = connect();
function onRequest(request, response) {
    console.log("A user made a request" + request.url);
    response.writeHead(200, {"Context-Type" : "text/plain"});
    response.write("here is some data");
    response.end();

}

http.createServer(onRequest).listen(8888);
 console.log("Server");
