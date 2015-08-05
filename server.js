var express  	= require('express');
var app 			 = express();
var mongojs 	 = require('mongojs');
var db				 = mongojs('contactlist', ['contactlist'])
var bodyParser = require('body-parser');
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/contactlist', function (req, res) {
	console.log('hiyoo')

	db.contactlist.find( function (err, docs) {
		console.log(docs);
		res.json(docs);
	});

});

app.post('/contactlist', function (req, res) {
	console.log(req.body);
	db.contactlist.insert(req.body, function (err, docs) {
		res.json(docs);
	});
});

app.listen(3000, function () {
	console.log("localhost:3000")
});
