//Countdown JS

var timeHolder;

window.onload = function () {
	timeHolder = document.getElementById("Timer");
	GetTime();
	setInterval("GetTime()", 1000);
}

function GetTime() {

	//Graduation Date and Time
	var grad = new Date('2019-05-02T10:00:00');

	//Floor to seconds
	var date1 = Math.floor(Date.now() / 1000);
	var date2 = Math.floor(grad / 1000);

	//Subtract date from date
	var diff = (date1 - date2);

	//I'm too lazy to fix this so just absolute(inverse) value it
	diff *= -1;

	//Time Holders probs should use an array or something but nahhhhhhh
	var days = 0;
	var hours = 0;
	var mins = 0;
	var seconds = 0;

	while (diff > 86400)
	{
		days += 1;
		diff -= 86400;
	}
	while (diff > 3600)
	{
		hours += 1;
		diff -= 3600;
	}
	while (diff > 60)
	{
		mins += 1;
		diff -= 60; 
	}
	seconds = diff;

	//Return the date and times to the Timer inner html 
	timeHolder.innerHTML = "Days: " + days + " Hours: " + hours + " Mins: " + mins + " Seconds: " + seconds; 	
}