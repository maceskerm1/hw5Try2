const fs = require('fs');
const path = require('path');
//    utils = require('./utils');

function serve_static_file (fileName, res) {           
//    fs.readFile(fileName,function(err,data) {
//        if (err) { // readFile generates an err object
	printout = "The File Name is not found";
	res.writeHead(200, {'Content-Type': 'text/javascript' });
	res.write(printout)
	res.end();
	   // let out = { error: "not_found",message: "'" + fileName + "' not found" };
           // utils.sendJSONObj(res,404,out);
           // res.end(JSON.stringify(out) + "\n");
//        }
//        else { //readFile success
//        	printout2 = "Please enter a file Name";
//		res.writeHead(200, {'Content-Type': 'text/javascript' });
//		res.write(printout2)
//		res.end();
//        }
//    });
};
module.exports.serve_static_file=serve_static_file;
