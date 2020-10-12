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
const urlPrefix="http://35.237.108.9//";
function sendAjax(){
        let AJAX = new XMLHttopRequest();
        AJAX.open (method,url,true)
        AJAX.onerror = function() {
                alert("Network error");
        }};
const http = require('http');
const phonehtml = require('./phonebook.html');
const url = require('url');
const fs = require('fs');
const query = require('./query.js');
console.log("EEE");

function sendAjax(){
        let AJAX = new XMLHttopRequest();
     	AJAX.onerror = function() {
                alert("Network error");
        }
	AJAX.onload = function(req,res) {
		if (this.status == 200){
			console.log(this.responseText);
    			res.writeHead(200, {"Content-Type":"text/html"});
    			res.write(phonehtml);
    			res.end();
			display = document.getElementById("resultP").innerHTML
			display = JSON.parse(display);
			query(document.getElementById("text").innerHTML);
		}
		else {
			AJAX.onerror = function() {
                		alert("Network error");
        		}
		}};

		AJAX.open("GET",urlPrefix+"getNames?letters="+queryObjectToString(display));			
		AJAX.send();


    		
};
const server = http.createServer(sendAjax);
server.listen(80,function() {console.log("port 80")})
 // attach click event handler to sendAJAX push button
document.getElementById("search").addEventListener("click",sendAJAX);
