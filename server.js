var express = require("express");
var app = express();
var routes = require("./app/routes/index.js");
var port = process.env.PORT || 8080;

routes(app);

app.use(function(req, res) {
    res.status(404).end('404 error.');
});

app.listen(port,  function () {
	console.log('Listening on port ' + port + '...');
});