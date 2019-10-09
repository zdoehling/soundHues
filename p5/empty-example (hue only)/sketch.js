let mic;
const barWidth = 1;
let lastBar = -1;
let period = 0;
let canvasX = 1000
let canvasY = 720

function setup() {
  //mic
  mic = new p5.AudioIn();
  mic.start();  
  //creating initial canvas
  createCanvas(canvasX, canvasY);
  colorMode(HSB, height, height, height);
  noStroke();
  background(0);
  frameRate(20);
}



function draw() {
  let vol = mic.getLevel();
  let whichBar = period / barWidth;
  if (whichBar !== lastBar) {
    let barX = whichBar * barWidth;
    fill((vol*20000), height, height);
    rect(barX, 0, barWidth, height);
    lastBar = whichBar;
    document.getElementById("position").innerHTML = "Volume Value: " + (vol*20000);
    period++;
    if(period > canvasX){
      noLoop();
    }
  }
}