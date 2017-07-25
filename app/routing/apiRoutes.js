const friends = require('../data/friends.js');

module.exports = function(server) {

	// GET method listener on /api/friends.
	server.get('/api/friends', function(req, res) {
		// Logic to grab json data from friends.js, send as response to client.
		res.json(friends.friendsList);
	});

	// POST method listener on /api/friends.
	server.post('/api/friends', function(req, res) {
		// Logic to grab object from request body.
		let surveyData = req.body
		// Compare objects data to friendsList objects data, returns best match.
		let match = friends.compare(req.body);

		// *** TESTING ***
		console.log('Your New Matching Friend:\n', match);

		// Push new object to friendsList array
		friends.friendsList.push(req.body);
		// Send response with best match object back to client.
		res.send(match);
		
	});

};
