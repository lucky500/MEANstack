const port = process.env.PORT || 3003;

const bodyParser = require('body-parser');
const express = require('express');
const server = express();

//bodyParser.urlecoded is the format of the data
//when you submit it from your front end.
//bodyParser, will interpret more information in your
//form submission.
//server.use will ask all your requisitions to pass 
//through your body parser
server.use(bodyParser.urlencoded({ extended: true }));
//if content is json, bodyParser will parse json
//and transform json into object to be used by
//my backend app
server.use(bodyParser.json());

server.listen(port, function(){
	console.log(`BACKEND is running on port ${port}.`);
});

module.exports = server;