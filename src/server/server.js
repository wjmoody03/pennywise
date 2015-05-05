var express = require("express");
var app = express();
var port = process.env.PORT || 1111;

var pkg = require('./../../package.json');

app.use('/', express.static(pkg.paths.client, {maxAge: 86400000})); //one day max cache-control header
app.use('/', express.static('./'));

app.listen(port, function() {
    console.log('up and running on ' + port);
});