var http = require("http"); // NODE
var fs = require('fs');
var Xu_ly_Tham_so = require('querystring') // NODE
var Port = 1001
 
http.createServer(function(req, res){
    fs.readFile('./qrcode.html',function (err, data){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(data);
        res.end();
    });
}).listen(Port,
    console.log("Dịch vụ Media đang thực thi ...http://localhost:" + Port));
