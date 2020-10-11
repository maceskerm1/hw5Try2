//const http = require('http');
//const url = require('url');
//const fs = require('fs');
//const path = require('path');
//const myserver = http.createServer(function (req, res){
//query = require('./query.js');
//queryItem = url.parse(req.url);
//let queryItemPrint = query.processQuery(queryItem)
//res.writeHead(200, {'Content-Type': 'text/plain' });
//res.write(queryItemPrint);
//res.end();});
//myserver.listen(80, function() {console.log("Listening on port 80" )}); 
const http = require('http');
const url = require('url');
//const fileServer = require('./fileServer.js');
const query = require('./query.js');
const fileServer = require('./search.js');
//const utils = require('./utils.js');
function request_func(req, res) {
	console.log(req.url);
	const queryPath = url.parse(req.url).pathname;
	console.log(queryPath);
//	const queryItem = url.parse(req.url).name;
//	const queryItem = url.parse(req.url);
//	const queryItem2 = queryItem.name;
	const queryItem = url.parse(req.url,"true").query;
	console.log(queryItem);
//	query.processQuery(queryItem,res);
	switch (queryPath) {
        	case "/search" :
                	query.processQuery(queryItem,res);
                	break;
            	case "/" :  //return default homepage
//			// precede the given path with name of the subdirectory in which
//          		// the client files are stored 
			fileServer.serve_static_file(queryItem,res);
//                	fileServer.serve_static_file("public_html/names.html",res);
               		break;
            	default:
			fileServer.serve_static_file(queryItem,res);
//                	fileServer.serve_static_file("public_html"+path,res);
//                	break;
        }    	
}
const server = http.createServer(request_func);
server.listen(80,function() {console.log("port 80")});
