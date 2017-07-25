const path = require('path');

module.exports = function(server) {

	// GET method listener on root to return home.html file.
	server.get('/', function(req, res) {
		// Sends home.html file to client.
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});

	// GET method listener on /survey path to return survey.html.
	server.get('/survey', function(req, res) {
		// Sends survey.html file to client.
		res.sendFile(path.join(__dirname, '../public/survey.html'));
	});

};
