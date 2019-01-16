var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, '/home/static')));
app.use(express.static(path.join(__dirname, '/home/images')));

console.log("I am running at: " + path);

// viewed at http://localhost:8080
app.get('/home/', function(req, res) {
    res.sendFile(path.join(__dirname + '/home/index.html')); 
});

app.listen(8080);