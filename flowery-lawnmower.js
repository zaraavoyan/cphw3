// had a try at this, but couldn't get the flowers right on top of the stems.

function setup() {
	frameRate(30);
  createCanvas(400, 200);
  colorMode(HSB, 360, 100, 100, 100);

}

var x = 0;
var h = 10;

function draw() {
u = random(300);
	f = random(-10,10);
  stroke(random(60, 70), 100, 90);
  line(x, height-10, x + f, height-10-random(h));
	noStroke();
	fill(200,40,70);
		ellipse(x + f,height-5-random(h),4);

  x = x + 10;

  if (x > width) {
    x = random(10);
    h = h + 3;
  }

  if (h > 60) {
	
		
    noStroke();
    fill(255);
    rect(-1, -1, width+2, height-15);
    h = 10;
  }

  noStroke();
  fill(40, 100, 60);
  rect(0, height-10, width, 10);
}
