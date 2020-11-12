var http=require('http');
var server=http.createServer(function (request,responce) {
    responce.end('Hello World'); //1St Code
});
server.listen(5050);
console.log("Server Run Success");