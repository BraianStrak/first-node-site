var fs = require('fs');
var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    fs.readFile(filename, function(err,data) {

        if(err){
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.write("404 not found")
            return res.end();
        }
    
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();

    });
    
}).listen(8080);