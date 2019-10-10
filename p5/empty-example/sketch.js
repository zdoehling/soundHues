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
  fft.setInput(mic);
  
  //creating initial canvas
  createCanvas(canvasX, canvasY);
  colorMode(HSB, height, height, height);
  noStroke();
  background(0);
  frameRate(20);
}



function draw() {
  let vol = mic.getLevel();
  let freq = fft.analyze();
  let whichBar = period / barWidth;
  if (whichBar !== lastBar) {
    let barX = whichBar * barWidth;
    
    fill((freq[17]*4), height, (vol*20000));
    rect(barX, 0, barWidth, height);
    lastBar = whichBar;
    document.getElementById("position").innerHTML = "Frequency Value: " + (freq[17]*4) + " Volume Value: " + (vol*10000);
    period++;
    if(period > canvasX){
      noLoop();
    }
  }
}