//Create web server
var express = require('express');
var app = express();

//Create a route that takes a path and a callback function
app.get('/', function (req, res) {
  res.send('Hello World!');
});

//Create a route that takes a path and a callback function
app.get('/comments', function (req, res) {
  res.send('This is the comments page');
});

//Listen for incoming requests on port 3000
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});