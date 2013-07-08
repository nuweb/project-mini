var express = require("express"),
	http = require("http");


var app = express();

//	serve static files from current directory
app.use(express.static(__dirname + '/'));

app.listen(3000);

console.log('Listening at port 3000');