Questions:

1)  line(x, height-10, x + random(-10, 10), height-10-random(h)); draws the lines

2)
  if (random() > 0.999) {
    noStroke();
    fill(255);
    rect(-1, -1, width+2, height-15);
    h = 10;
  } starts the lawnmower randomly.
  
  3) the 'h' variable stacks the lines of grass on top of each other.
  
  4) the numerical values are the maximum values of the hue, saturation and lightness respectively, and the fourth is the value of the alpha.

5) it 'plants' the grass, making sure it is touching the layer underneath.
6) 'objects' in javascript are like literal real life 'objects' with valuables - so we can keep better track of them on the screen.
7) map(mouseX, 0, 400, 0, 200);
8)function setup() {
  createCanvas(400, 400);
	var num = int(random(2000, 2018));
console.log(num);
}


