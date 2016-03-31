// Set up app and modules
var express = require("express");
var path = require('path');
var app = express();

// Use angular components in public folder
app.use(express.static('public'));

// Initial the Index view
app.get('/', function(req,res) {
	res.sendFile(path.join(__dirname + '/public/pages/index.html'));
});

// Set up access port
var port = process.env.PORT || 7000;
app.listen(port);
console.log('Shit blows at: ' + port);