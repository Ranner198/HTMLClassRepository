var express = require('express');
var app = express();
var path = require('path');
var port = 8080;

app.use(express.static(path.join(__dirname, '/home')));

//Err 404
app.use(function (req, res, next) {
	res.status(404).sendFile(path.join(__dirname + '/home/redirect404.html'))
});

console.log("I am running at: " + port);

//Home Page
app.get('/home/', function(req, res) {
    res.sendFile(path.join(__dirname + '/home/index.html')); 
});

app.get('/gallery/', function(req, req)
{
	res.sendFile(path.join(__dirname + '/home/gallery.html/'));
});

app.listen(port);