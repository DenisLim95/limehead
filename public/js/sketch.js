// var canvas;
// console.log("sketch connected!");


function windowResized() {
	resizeCanvas(windowWidth,windowHeight);
}



// function setup() {
  
//   canvas = createCanvas(windowWidth, windowHeight);
//   canvas.position(0,0);
//   // canvas.class("lemon");
//   canvas.style('z-index','-1');
// }

// function draw() {
// 	fill(100);
// 	var newEllipse = ellipse(mouseX,mouseY,100,100);

// }


// // function draw() {
// //  if (mouseIsPressed) {
// //    // fill(0);
// //  } else {
// //    // fill(255);
// //  }

// //  ellipse(mouseX, mouseY, 20, 20);
// //  // background(220);
// // }

var xvals = [];
var yvals = [];
var bvals = [];

function setup() 
{
   canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
//   // canvas.class("lemon");
  canvas.style('z-index','-1');
  strokeWeight(20);
}

function draw()
{
  // background(230, 233, 239);
  background(255);
  
  for(var i = 1; i < width; i++) { 
    xvals[i-1] = xvals[i]; 
    yvals[i-1] = yvals[i];
    bvals[i-1] = bvals[i];
  } 
  // Add the new values to the end of the array 
  xvals[width-1] = mouseX;
  yvals[width-1] = mouseY;

  if(mouseIsPressed) {
    bvals[width-1] = 0;
  } else {
    bvals[width-1] = 255;
  }
  
  fill(255);
  noStroke();
  // rect(0, height/3, width, height/3+1);

  stroke(100);
  // point(mouseX,mouseY);
  ellipse(mouseX,mouseY,100,100);

  // for(var i=1; i<width; i = i + 15) {
  //   // stroke(255);
  //   // point(i, xvals[i]/3);
  //   stroke(100);
  //   // point(i, height/3+yvals[i]/3);
  //   point(i,yvals[i]);
  //   // stroke(255);
  //   // line(i, 2*height/3+bvals[i]/3, i, (2*height/3+bvals[i-1]/3));
  // }
}


function mousePressed() {
	
}








