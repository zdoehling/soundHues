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
  //frequency
  fft = new p5.FFT();
  //creating initial canvas
  createCanvas(canvasX, canvasY);
  colorMode(HSB, height, height, height);
  noStroke();
  background(0);
  frameRate(20);
}



function draw() {
  let vol = mic.getLevel();
  let freq = fft.waveform();
  let whichBar = period / barWidth;
  if (whichBar !== lastBar) {
    let barX = whichBar * barWidth;
    fill(height, height, (vol*100000));
    rect(barX, 0, barWidth, height);
    lastBar = whichBar;
    document.getElementById("position").innerHTML = period;
    period++;
    if(period > canvasX){
      noLoop();
    }
  }
}