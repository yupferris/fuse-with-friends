var nconf = require('nconf');
var express = require('express');
var path = require('path');

// Use command-line arguments first, then env variables, then defaults
nconf.argv().env().defaults({
  'httpPort': 6502, // Because 6510 is taken on my setup :)
});

var app = express();

app.get('/categories', function(req, res) {
  res.sendFile(path.join(__dirname + '/categories.json'));
});

app.get('/shoes', function(req, res) {
  res.sendFile(path.join(__dirname + '/shoes.json'));
});

var port = nconf.get('httpPort');
var server = app.listen(port, function() {
  console.log('Test server listening on port %s', server.address().port);
});