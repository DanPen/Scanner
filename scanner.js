const http = require('http');
const mongoose = require('mongoose');
const models = require('./models')(mongoose);

var options = {
  hostname: 'google.com',
  port: 8080,
  path: '/',
  method: 'HEAD',
};

var req = http.request(options, function(res) {

  res.setEncoding('utf8');

  var chunkCount = 0;

  res.on('data', function (chunk) {

  });

  res.on('end', function () {
    console.log(res.headers);
  })
});

req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});

req.end();
