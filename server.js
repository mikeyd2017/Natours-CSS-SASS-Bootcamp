var express = require("express");

var app = express();

app.use(express.static('public'));

app.use('/css', express.static(__dirname + '/public/css'));
app.use('/sass', express.static(__dirname + '/public/sass'));
app.use('/img', express.static(__dirname + '/public/img'));

var server = app.listen(8081, function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});