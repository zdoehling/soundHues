const barWidth = 1;
let lastBar = -1;
let period = 0;
let canvasX = 720

function setup() {
  createCanvas(canvasX, 400);
  colorMode(HSB, height, height);
  noStroke();
  background(0);
  frameRate(100);
}



function draw() {
  let whichBar = period / barWidth;
  if (whichBar !== lastBar) {
    let barX = whichBar * barWidth;
    fill(mouseY, height, height);
    rect(barX, 0, barWidth, height);
    lastBar = whichBar;
    document.getElementById("position").innerHTML = period;
    period++;
  }
  if(period == canvasX){
    noLoop();
  }
}