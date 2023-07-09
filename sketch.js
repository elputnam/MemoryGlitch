//A dynamic collage, I am my father's daughter; another version at the market

let squares = [];
let base;
let EL;
let dad;
let x = 0;
let y = 0;
let num;
let alp = 0;
let MIN = 0;
let MAX = 100;
let g;
let tileCount;

//preload assets: base photo, EL, 25 squares (in array)
function preload(){
  base = loadImage('assets/DadEL_Market_base.png');
  EL = loadImage('assets/DadEL_Market_EL.png');
  dad = loadImage('assets/DadEL_Market_Dad.png')
  for (let i = 0; i < 25; i++){
    squares[i] = loadImage("assets/Grid_" + i + ".png");
  }  
}


function setup() {
  createCanvas(base.width/2, base.height/2);
  colorMode(HSB, 360, 100, 100, 100);
  frameRate(8);
  
}

function draw() {
  //image(base, 0, 0, base.width/2, base.height/2); 
  tileCount = random(20);
  //Grid
   for (j = 0; j < squares.length; j++){
    image(squares[j], x, y, width/5, height/5);
    //move down
    x += width/5;
    if (x >= width){
      x = 0;
      y += height/5;
    }
    if (y >= height){
      y = 0;
    }
  }
  // if (frameCount%5==0){
  num = int(random(25));
  squares[num].filter(INVERT);
    
  // }
  if (frameCount%3==0){
  grid();
  }
    //background rect/overall flicker of the universe
    // fill(0, random(40, 100));
    // rect(0, 0, width, height);
  
    //EL
    image(EL, 0, 0, EL.width/2, EL.height/2)

    //dad

      push();
      if (frameCount%10==0){
      tint(255, random(50,100));
      }
      image(dad, 0, 0, dad.width/2, dad.height/2);
      pop();
    
    //flickering EL and dad
    if (frameCount%int(random(20))==0){
      EL.filter(INVERT);
     
    }
  }

  function mousePressed(){
    let fs = fullscreen();
    fullscreen(!fs);
  }

  function grid(){
    for (let gridY = 0; gridY < tileCount; gridY++) {
      for (let gridX = 0; gridX < tileCount; gridX++) {
        let posX = (width / tileCount) * gridX;
        let posY = (height / tileCount) * gridY;
        noStroke();
        rectMode(CORNER);
        //fill(0);
        //rect(posX, posY, width/tileCount, height/tileCount);
        
        var toggle = floor(random(2));
        if (toggle == 1){
           fill(0);
            rect(posX, posY, width/tileCount, height/tileCount);
      } else {
        fill(random(360), random(100), random(100), random(100)) ;
        rect(posX, posY, width/tileCount, height/tileCount);
        }
        }
      }
  }