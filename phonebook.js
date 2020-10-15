    let properties = Object.keys(query);
    let arrOfQuesryStrings = properties.map(prop => prop+"="+query[prop]);
    return(arrOfQuesryStrings.join('&'));
 }

document.getElementById("search").addEventListener("click",sendAJAX);
const urlPrefix="http://35.237.108.9//";
function sendAjax(){
        let AJAX = new XMLHttopRequest();
     	AJAX.onerror = function() {
                alert("Network error");
        }
	AJAX.onload = function() {
		if (this.status == 200){
			console.log(this.responseText);
//    			res.writeHead(200, {"Content-Type":"text/html"});
//    			res.write(phonehtml);
//    			res.end();
			display = document.getElementById("resultP").innerHTML
			display = JSON.parse(display);
			query(document.getElementById("text").innerHTML);
		}
		else {
			AJAX.onerror = function() {
                		alert("Network error");
        		}
		}};

		AJAX.open("GET",urlPrefix+"Search?name="+queryObjectToString(display));			
		AJAX.send();


    		
};

