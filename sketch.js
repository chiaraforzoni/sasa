var dresda;
var moon;
var bombs = [];

function preload() {
dresda = loadImage("assets/dresda2.png");
moon = loadImage("assets/moon.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
 background(0,10,45);
 //imageMode(CENTER);
 image(moon, width/7, height/3, 80, 80); //come fare a ridimensionare la luna se si ridimensiona la finestra?
 image(dresda, width/2-850, height/2+60,1700,310); //come impostare l'immagine di modo che sia proporzionata + come fare se si fa un resize della finestra a far ridimensionare anche l'img?
  //iterate on the array
  for(var i=0; i< bombs.length; i++) {
    
    // Increase the single bomb y position
    bombs[i].y ++;
    
    // Create a new ellipse using the x and y properties of the bomb object
    // as defined in line #34.
    ellipse(bombs[i].x, bombs[i].y, 10.10);
    
  if (bombs[i].y > height/1.1  ) { 
    fill(0,0,0);
    noStroke()
    ellipse(bombs[i].x, windowHeight, i++,i++);
      
      
  }
  }
}

function mouseReleased() {
  
  // Create a new position
  var newx = random()*width;
  
  // Create an object representing bomb properties.
  // object properties are defined by name : value
  // and are comma saeparated.
  var obj = {x: newx, y: 0 };
  
  // The object is added to the array.
  bombs.push(obj);
 //come velocizzare la caduta delle bombe?
    //come colorare l'ascesa della bomba quando passa sopra lo skyline?
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  }

function backgroundImage(dresda2) {
    
    var x = 0;
    var y = 0;
    var w = width;
    var h = height;
    // default offset is center
    var offsetX = 0.5;
    var offsetY = 0.5;

    var iw = img.width,
        ih = img.height,
        r = Math.min(w / iw, h / ih),
        nw = iw * r,   // new prop. width
        nh = ih * r,   // new prop. height
        cx, cy, cw, ch, ar = 1;

    // decide which gap to fill    
    if (nw < w) ar = w / nw;                             
    if (Math.abs(ar - 1) < 1e-14 && nh < h) ar = h / nh;  // updated
    nw *= ar;
    nh *= ar;

    // calc source rectangle
    cw = iw / (nw / w);
    ch = ih / (nh / h);

    cx = (iw - cw) * offsetX;
    cy = (ih - ch) * offsetY;

    // make sure source rectangle is valid
    if (cx < 0) cx = 0;
    if (cy < 0) cy = 0;
    if (cw > iw) cw = iw;
    if (ch > ih) ch = ih;

    // fill image in dest. rectangle
    image(img, cx, cy, cw, ch,  x, y, w, h);
}