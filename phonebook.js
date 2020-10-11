// a function that will convert an object into a URL query string format
function queryObjectToString(query) {
    // get the properties in the query object
    // for {message:"Hi I am sending an AJAX request", name: "Sahar"};
    // properties will be ["message", "name" ]
    let properties = Object.keys(query);
    // create a string int the format "propert=value" for each property in query
    // arrOfQuesryStrings will be ["message=Hi I am sending an AJAX request", "name=Sahar"]
    let arrOfQuesryStrings = properties.map(prop => prop+"="+query[prop]);
    //combine the strings in arrOfQuesryStrings wuth &
    // return value will be "message=Hi I am sending an AJAX request&name=Sahar"
    return(arrOfQuesryStrings.join('&'));
 }
function sendAjax(){
	console.log("Running")
        let AJAX = new XMLHttopRequest();
        AJAX.open(method,url,true)
        AJAX.onerror = function() {
                alert("Network error");
        };
	AJAX.send();
}
const http = require('http');
const phonehtml = require('./phonebook.html');
const url = require('url');
const fs = require('fs');
const query = require('./query.js');

function ajax_func(req,res){
    sendAjax();
    res.writeHead(200, {"Content-Type":"text/html"});
    res.write(phonehtml);
    res.end();
    var method = "GET";
    var json_display = query(document.getElementById("text").innerHTML);
    var json_display = JSON.stringify(json_display);
    res.writeHead(200, {"Content-Type":"application/json"});
    res.write(json_display);
    res.end();
};
const server = http.createServer(ajax_func);
server.listen(80,function() {console.log("port 80")});
 // attach click event handler to sendAJAX push button
document.getElementById("search").addEventListener("click",sendAJAX);
