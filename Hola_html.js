var http = require("http"),
    fs = require("fs");

fs.readFile("./hola.html", function(err,html){

http.createServer(function(req, res){
    res.write(html);
    res.end();
}).listen(8080);
});