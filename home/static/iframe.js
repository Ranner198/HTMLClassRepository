var Links = [];

function Test() {
	
	let iFrameRef = document.getElementsByClassName('iFrame');

	for (var i = 0; i < iFrameRef.length; i++) {
		Links.push(iFrameRef[i].src);
	}
}

function GoTo(event) {
	if (event.button == 0)
		Print('Clicked');
}

function Print(val) {
	console.log(val);
}

function Click(index) {
	window.open(Links[index],'_blank');
}