var figlet = require('figlet');

function GetName() {
	var name = document.getElementById("name").value;;
	var returnName = document.getElementById("SetName");

	returnName.innerHTML = "Hello " + name + " nice to meet you!";
}
 
//install - npm install -g browserify

figlet("Hello " + name + " nice to meet you!", function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    return data;
});