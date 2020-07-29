let img;
function preload() {
  img = loadImage('background.jpg');
};
function setup() {
  createCanvas(1400, 1000);
  noStroke();
  // image(img,0,0);  
  //position of the car
 

}
var x = 10;
var a=10;
var b=10;
var sunSize = 150;
function draw() {
    //all lines of code inside here will be run repeatedly
    image(img,0,0);
    // draw the c body
   
    fill(255, 204, 0);
    ellipse(550, 75, sunSize, sunSize);

     //first car
    fill(255, 0, 115);
    rect(x, 700, 100, 20); //down rectangle
    rect(x + 15, 650, 70, 50);

    // draw the wheels
    fill(77, 66, 66);
    ellipse(x + 25, 715, 24, 24);
    ellipse(x + 75, 715, 24, 24);

    // 2nd car
    fill(255, 242, 115);
    rect(a, 700, 100, 20);
    rect(a + 15, 650, 70, 50);

    // draw the wheels
    fill(77, 66, 66);
    ellipse(a+ 25, 715, 24, 24);
    ellipse(a + 75, 715, 24, 24);
    // The sun, a little circle on the horizon
    
    //3rd car
    fill(255, 50, 15);
    rect(b, 700, 100, 20);
    rect(b + 15, 650, 70, 50);

    // draw the wheels
    fill(77, 66, 66);
    ellipse(b+ 25, 715, 24, 24);
    ellipse(b + 75, 715, 24, 24);

    //snowman
    
    
 

    x = x + 3;
    a=a+2;
    b=b+1;
  
};