var http=require('http');
var URL=require('url');

var server=http.createServer(function (request,responce) {

    var myURL="https://www.linkedin.com/in/saruf-ratul/?year=98"
    var myURLObj= URL.parse(myURL,true);
    var myHostName= myURLObj.host;
    var myPathName= myURLObj.pathname;
    var mySearchName= myURLObj.search;

    if (request.url=='/'){
        responce.writeHead(200,{'Content-Type':'text/html'})
        responce.write(myHostName);
        responce.end();
    }

    else if (request.url=='/About'){
        responce.writeHead(200,{'Content-Type':'text/html'})
        responce.write(myPathName);
        responce.end();
    }

    else if (request.url=='/Contact'){
        responce.writeHead(200,{'Content-Type':'text/html'})
        responce.write(mySearchName);
        responce.end();
    }

    //3Rd Code
});

server.listen(8080);
console.log("Server Run Success");
