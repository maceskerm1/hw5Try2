const http = require('http');
const url = require('url');
const query = require('./query.js');
const fileServer = require('./search.js');
function request_func(req, res) {
	console.log(req.url);
	const queryPath = url.parse(req.url).pathname;
	console.log(queryPath);
	const queryItem = url.parse(req.url,"true").query;
	console.log(queryItem);
	switch (queryPath) {
        	case "/search" :
                	query.processQuery(queryItem,res);
                	break;
            	case "/" :  //return default homepage
			fileServer.serve_static_file("phonebook.html",res);
               		break;
            	default:
			fileServer.serve_static_file(queryPath,res);
			break;
        }    	
}
const server = http.createServer(request_func);
server.listen(80,function() {console.log("port 80")});
