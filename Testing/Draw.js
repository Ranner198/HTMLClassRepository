class Background {

  	constructor(size) {
		this.color = "black";
		this._size = size;
	}

	draw(color) {
		if (!color)
		{
			color = "black";
		}
		context.fillStyle = color;
		context.fillRect(0, 0, this._size.x, this._size.y);
	}
}


//Defaults
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var Size = new Vector2(canvas.width, canvas.height); 
var background = new Background(Size);
//canvas.onmousedown = () => {console.log("Working")};

canvas.addEventListener("mousedown", MouseDown, false);
canvas.addEventListener("mouseup", MouseUp, false);
canvas.addEventListener("mousemove", MouseDrag, false);

//State Machine
var down = false;


//For Spheres
var radius = 15;
var positions = [];

function Start() {
	setInterval("Draw()", 10);
}

function Draw() {

	background.draw("blue");

	for (var i = 0; i < positions.length; i++) {
		if (i > 0)
		{
			//Sample Middle Point
			let midpointVal = new Vector2();
			let length = midpointVal.Magnitude(positions[i-1], positions[i]);	
			midpointVal = midpointVal.Midpoint(positions[i-1], positions[i]);
			context.font = "30px Arial";					
			context.fillText(length, midpointVal.x, midpointVal.y);

			context.moveTo(positions[i-1].x, positions[i-1].y);				
			context.lineTo(positions[i].x, positions[i].y);
			context.stroke();
		}
		DrawCircle(positions[i].x, positions[i].y);
	}
}

function MouseDown(event) {

	let position = new Vector2(event.clientX , event.clientY);

	if(event.button == 0)
	{
		down = true;		
		positions.push(position);
	}

	if(event.button == 2)
	{
		for (var i = 0; i < positions.length; i++)
		{
			if (position.x > positions[i].x - radius && position.x < positions[i].x + radius && position.y > positions[i].y - radius && position.y < positions[i].y + radius)
			{	
				positions.remove(i);
			}
		}
	}
}

function MouseDrag(event) {
	
	if (down == true)
	{
		let position = new Vector2(event.clientX , event.clientY);
		for (var i = 0; i < positions.length; i++)
		{
			if (position.x > positions[i].x - radius && position.x < positions[i].x + radius && position.y > positions[i].y - radius && position.y < positions[i].y + radius)
			{	
				positions[i] = new Vector2(event.clientX, event.clientY);
			}
		}
	}
}

function MouseUp(event) {
	down = false;
}

function Vector2(x, y) {
	
	this.x = x;
	this.y = y;

	var NormalizeVector = () => {		
		this.z = (x * x + y * y);
		this.tempX = (x/Math.sqrt(this.z)).toFixed(5);
		this.tempY = (y/Math.sqrt(this.z)).toFixed(5);
		return new Vector2 (this.tempX, this.tempY);
	}

	var MidpointFormula = function(vector1, vector2) {
		this.tempX = (vector1.x + vector2.x)/2;
		this.tempY = (vector1.y + vector2.y)/2;
		return new Vector2 (this.tempX, this.tempY);
	}

	var MagnitudeFormula = function(vector1, vector2) {
		this.distanceFormula = Math.sqrt((vector2.x - vector1.x) * (vector2.x - vector1.x) + (vector2.y - vector1.y) * (vector2.y - vector1.y));
		return (this.distanceFormula).toFixed(2);
	}

	return {
		normalize: NormalizeVector,
		Midpoint: MidpointFormula,
		Magnitude: MagnitudeFormula,
		x: this.x,
		y: this.y
	};
}

function Print(val) {
	console.log(val);
}

function DrawCircle(x, y) {
	context.beginPath();
	context.arc(x, y, radius, 0, 2 * Math.PI, false);
    context.fillStyle = 'green';
    context.fill();
}

Array.prototype.remove = function (num) {
	for (var i = 0; i < this.length; i++) {
		if(i == num) {
			this.splice(i, 1);
		}
	}
}