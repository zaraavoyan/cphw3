//note: I tried writing a while() function that would only set off the lawnmower at a specific height of the grass, but p5js couldn't keep up and drew a 
lot of grass before the function checked that the h was less than the number I inserted.

function setup() {
createCanvas(400, 200);
		background(255);
  colorMode(HSB, 360, 100, 100, 100);
}

var x = 0;
var f = 40;
var h = 10;
var d = 0;

function draw() {
  stroke(random(60, 70), 100, 90);
  line(x, height-10, x + random(-10, 10), height-10-random(h));

  x = x + 10;

  if (x > width) {
    x = random(10);
    h = h + 3;
  }


	
    noStroke();
    fill(0);
    rect(d, height-50, 130, 30);
		fill(255);
		rect(d,height-50,80,30);
		f = f + 5;
		d = d + 5
    h = 10;

	if (d >400) {
		d = -100}

  noStroke();
  fill(40, 100, 60);
  rect(0, height-10, width, 10);
}
