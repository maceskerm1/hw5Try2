const fs = require('fs');
const path = require('path');
//utils = require('./utils');

function serve_static_file (fileName, res) {           
	fs.readFile(fileName,function(err,data) {
        if (err) { // readFile generates an err object
            let out = { error: "not_found",message: "'" + fileName + "' not found" };
            sendJSONObj(res,404,out);
            res.end(JSON.stringify(out) + "\n");
        }
	else { //readFile success
            let ct = content_type_for_path(fileName); //get contect type
            res.writeHead(200, { "Content-Type" : ct });
            res.write(data);
            res.end();
        }
    });
}

//function returns content type based on file extension
function content_type_for_path (file) {
    var ext = path.extname(file);
    switch (ext.toLowerCase()) {
        case '.html': return "text/html";
        case ".js": return "text/javascript";
        case ".css": return 'text/css';
        case '.jpg': case '.jpeg': return 'image/jpeg';
        default: return 'text/plain';
    }
}
sendJSONObj = function(res,status,out) {

    res.writeHead(status, { "Content-Type" : "application/json" });
    console.log(JSON.stringify(out));
    res.write(JSON.stringify(out));
    res.end();

}




module.exports.serve_static_file=serve_static_file;
