// const splash = document.querySelector('.splash');

// document.addEventListener('DOMContentLoaded', (e) => {
//     setTimeout(() => {
//         document.getElementById("splash").style.display = 'none';
//     }, 2000);
//     function mousePressed(){
//       if
//     }
// })




var c = "black";

function setup() {
  createCanvas(400, 400);
	background(240);
}

function draw() {
    
  if (mouseIsPressed) {
		stroke(c);
    line(mouseX, mouseY, pmouseX, pmouseY);
    strokeWeight(5)
  }

	noStroke();
  //draw the first button
  fill("black");
  rect(0, 0, 40, 40);

  //draw the second button
  fill("yellow");
  rect(40, 0, 40, 40);

    //draw the third button
  fill("white");
  rect(80, 0, 40, 40);
}

//this will run whenever the mouse is pressed
function mousePressed() {
  if (mouseX > 0 && mouseX < 40 && mouseY > 0 && mouseY < 40) {
    //set the variables to random values
    c = "black";
  }
  if (mouseX > 40 && mouseX < 80 && mouseY > 0 && mouseY < 40) {
    //set the variables to random values
    c = "yellow";
  }
    if (mouseX > 80 && mouseX < 120 && mouseY > 0 && mouseY < 40) {
    //set the variables to random values
    c = "white";
  }
}