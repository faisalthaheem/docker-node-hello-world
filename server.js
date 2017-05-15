var http = require('http')
var redis = require('redis');
var client = redis.createClient(6379,'redis');

var port = 4444

var server = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'})
  
	console.log('new request');

  var currTime;
  
  client.get('currenttime', function(err, data){
	  if(err){
		console.log('error' + err);
		  currTime = err;
		  return;
	  }
	  console.log('read data ' + data);
	  currTime = data;
	  response.end(data);
  });


	console.log('end request: ' + currTime);  
// response.end(currTime);

});

server.listen(port);

console.log('Server running at http://localhost:' + port);
