function queryObjectToString(query) {
    let properties = Object.keys(query);
    let arrOfQuesryStrings = properties.map(prop => prop+"="+query[prop]);
    return(arrOfQuesryStrings.join('&'));
 }

document.getElementById("search").addEventListener("click",sendAjax);
const urlPrefix="http://35.237.108.9/";
//let AJAX = new XMLHttopRequest();
function sendAjax(){
        let AJAX = new XMLHttpRequest();
     	AJAX.onerror = function() {
                alert("Network error");
        }
	AJAX.onload = function() {
		if (this.status == 200){
			console.log(this.responseText);
//    			res.writeHead(200, {"Content-Type":"text/html"});
//    			res.write(phonehtml);
//    			res.end();
//			query(document.getElementById("sname").innerHTML);
			document.getElementById("
		}
		else {
                alert("Network error");
		}};
//results p is what we display ( Changing based)
//		display = JSON.parse(display);
		display = document.getElementById("sname").value

		AJAX.open("GET",urlPrefix+"search?name="+(display));			
		AJAX.send();


    		
}
