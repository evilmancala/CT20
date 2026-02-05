let fruits = ["apple", "banana", "pear"];

let balloons = [];

function setup() {
  print(random(fruits));
  createCanvas(400, 400);
  for (let b=0; b<22; b++){
  balloons.push(new Balloon());
  }
  print(balloons[17]);
}

function draw() {
  background(220);
  for(let b of balloons){
  b.draw();
  
  }
}




function Balloon() {
  this.x = random(0,width);
  this.y = 0;
  colorMode(HSB);
  this.hue = random(0,255);
  this.speed = random(0.5,4);
  this.draw = function() {
    fill(this.hue,255,255);
    circle(this.x,this.y,50);
    this.y = this.y + this.speed;
    this.speed = this.speed + 1;
    if (this.y > height) {
    this.hue = (this.hue + 25) % 225;
    this.speed = this.speed * -0.9;
    }
  };
}