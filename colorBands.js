const barWidth = 1;
let lastBar = -1;
let period = 0;
let canvasX = 5000
let canvasY = 400

function setup() {
  //creating initial canvas
  createCanvas(canvasX, canvasY);
  colorMode(HSB, 500, 500);
  noStroke();
  background(0);
  frameRate(60);
}



function draw() {
  let whichBar = period / barWidth;
  if (whichBar !== lastBar) {
    let barX = whichBar * barWidth;
    fill(mouseY, 500, 500);
    rect(barX, 0, barWidth, 500);
    lastBar = whichBar;
    document.getElementById("position").innerHTML = period;
    period++;
    if(period > canvasX){
      noLoop();
    }
  }
}