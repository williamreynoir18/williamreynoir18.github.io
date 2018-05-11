var Odell, Odell2;
var NewOdell;
var showEwman = false;
var showEwYork = true;

function setup() {
    createCanvas(1000, 1000);
    Odell = loadImage("beckham-pose.webp")
      Odell2 = loadImage("459482246.jpg");
}

function draw() {

  if (showEwman == false){
    background(255, 255, 255);
    newman();
  }
  else{
    background(255, 0, 0);
    newYork();
  }
}

function newYork() {
  textSize(40);
  text("click here",315,300)
  textSize(150);
  fill(76, 187, 23);
  text("N", 30, 250);
  textSize(150);
  fill(0, 0, 255);
  text("ew York", 139, 250);
  image(Odell2,270, 300, 190, 250)
  showEwman = true;
}

function newman(){
  textSize(40);
  text("click here", 100, 350);
  textSize(150);
  fill(76, 187, 23);
  text("N", 30, 250);
  textSize(150);
  fill(76, 187, 23);
  text("EWMAN", 139, 250);
  image(Odell,270, 300, 190, 250)
}
