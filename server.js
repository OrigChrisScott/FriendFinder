const express = require('express');
const bodyParser = require("body-parser");
const htmlOutput = require('./app/routing/htmlRoutes.js');
const apiOutput = require('./app/routing/apiRoutes.js');

// Instantiate express server object.
const server = express();
// Bind port to server.
const port = process.env.PORT || 8080;

// Required to parse body of requests in listeners.
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
  extended: true
}));

// Static route to serve files from public folder.
server.use(express.static('./app/public'));

// Call routing files for GET and POST request listeners.
htmlOutput(server);
apiOutput(server);

// Listen for http on port.
server.listen(port, function() {
	console.log('Server is listening on port ' + port);
});

