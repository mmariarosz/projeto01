function setup() {
    createCanvas(700, 700);
    background("#DFFABF");
  }
  
  function draw() {
    fill("#F7EA65");
    stroke("yellow");
    
    if(mouseIsPressed){
    arc(mouseX,mouseY,80,80,0,PI+HALF_PI);
    }
  }