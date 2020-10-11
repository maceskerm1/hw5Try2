//function processQuery(queryItem){
//var phoneBook = new Array();
//phoneBook[0] = {name: "Alia", phone: "860-345-7878"};
//phoneBook[1] = {name: "Allie", phone: "203-908-3409"};
//phoneBook[2] = {name: "Aly", phone: "413-486-5667"};
//phoneBook[3] = {name: "Brittany", phone: "413-509-6666"};
//phoneBook[4] = {name: "Elizabeth", phone: "860-997-7878"};
//phoneBook[5] = {name: "Ellen", phone: "860-340-8000"};
//phoneBook[6] = {name: "Eve", phone: "407-340-0087"};
//phoneBook[7] = {name: "Evita", phone: "203-340-7001"};
//phoneBook[8] = {name: "Linda", phone: "413-300-7878"};
//phoneBook[9] = {name: "Liza", phone: "860-400-8781"};
//var content = new Array();
//for(i = 0; i <phoneBook.length; i++){
//	console.log(phoneBook[i
//while(i <= phoneBook.length){
//	if (phoneBook[i].name.indexOf(queryItem.name) != -1){
//		content = " " + content + (phoneBook[i].toString())
//		var content = content.concat(phoneBook[i].toString())
//		var content = content.push(phoneBook[i]);
//		console.log("Test");
//		i++;
//		}
//		var content = JSON.stringify(content);
//					}
//		return (content);}
//module.exports.processQuery=processQuery;
function processQuery(queryItem,res){
var phoneBook = new Array();
phoneBook[0] = {name: "Alia", phone: "860-345-7878"};
phoneBook[1] = {name: "Allie", phone: "203-908-3409"};
phoneBook[2] = {name: "Aly", phone: "413-486-5667"};
phoneBook[3] = {name: "Brittany", phone: "413-509-6666"};
phoneBook[4] = {name: "Elizabeth", phone: "860-997-7878"};
phoneBook[5] = {name: "Ellen", phone: "860-340-8000"};
phoneBook[6] = {name: "Eve", phone: "407-340-0087"};
phoneBook[7] = {name: "Evita", phone: "203-340-7001"};
phoneBook[8] = {name: "Linda", phone: "413-300-7878"};
phoneBook[9] = {name: "Liza", phone: "860-400-8781"};
var content = new Array();
console.log(queryItem);
for(i = 0; i <phoneBook.length; i++){
	if (phoneBook[i].name.indexOf(queryItem.name) != -1){
		let read = phoneBook[i].toString();
		var content = content.concat(phoneBook[i]);
		console.log("Test");
		}}
var content = JSON.stringify(content);
res.writeHead(200, {"Content-Type":"application/json" });
res.write(content);
res.end();							

}
module.exports.processQuery=processQuery;
