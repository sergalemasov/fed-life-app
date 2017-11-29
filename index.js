var express = require('express');
var port = process.env.port || 5000;
var app = express();

app.use(express.static(__dirname, {index: false}));
app.get('/', function(request, response) {
    response.sendfile(__dirname + '/index.html');
});
app.listen(port);