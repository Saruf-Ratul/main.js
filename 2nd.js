var http=require('http');

var server=http.createServer(function (request,responce) {

    if (request.url=='/'){
        responce.writeHead(200,{'Content-Type':'text/html'})
        responce.end('<h1>This Is Home Page</h1>')

    }
    else if (request.url=='/About'){
        responce.writeHead(200,{'Content-Type':'text/html'})
        responce.end('<h1>This Is About Page</h1>')

    }
    else if (request.url=='/Contact'){
        responce.writeHead(200,{'Content-Type':'text/html'})
        responce.end('<h1>This Is Contact Page</h1>')
    }
    //2Nd Code

});

server.listen(4040);
console.log("Server Run Success");