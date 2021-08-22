var h, m, s, hourark, minuteark, secondark;

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES)
}

function draw() {
  background(0,0,0);  
  h=hour()
  m=minute()
  s=second()
  translate(200,200)
  rotate(-90)
  secondark=map(s,0,60,0,360)
  minuteark=map(m,0,60,0,360)
  hourark=map(h%12,0,12,0,360)
  push()
  rotate(secondark)
  stroke(255,0,0)
  strokeWeight(7)
  line(0,0,100,0)
  pop()
  push()
  rotate(minuteark)
  stroke(0,255,0)
  strokeWeight(7)
  line(0,0,75,0)
  pop()
  push()
  rotate(hourark)
  stroke(0,0,255)
  strokeWeight(7)
  line(0,0,50,0)
  pop()
  stroke(255,0,255)
  point(0,0)
  strokeWeight(10)
  noFill()
  stroke(255,0,0)
  arc(0,0,300,300,0,secondark)
  stroke(0,255,0)
  arc(0,0,280,280,0,minuteark)
  stroke(0,0,255)
  arc(0,0,260,260,0,hourark)
}