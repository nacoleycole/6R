let balls = [];
let x, y;
let dy = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
 
  balls.push(new Ballz()); 
}
function draw() {
  background(200);
  balls.forEach(
    (ball) => {
      ball.changeVel(0.25);
      ball.change();  
      ball.drawIt();
      ball.checkLocation();
    }
  );
}

class Ballz {
  constructor(){
    this.x= random(width);
    this.y=0;
    this.dy=0;
  }
  changeVel(v){
    this.dy += v
  }
    negVel(){
      this.dy *= -0.95
    }
    change(){
      this.y += this.dy
    }
    drawIt(){
      circle(this.x, this.y, 50)
    }
    checkLocation(){
      if(this.y >= height){
        this.negVel()
      }
    }
}
// function addBall() {
//   newBall = {
//     x: random(width),
//     y: 0,
//     dy: 0,
//     changeVel(v){this.dy += v},
//     negVel(){this.dy *= -0.95},
//     change(){this.y += this.dy},
//     drawIt(){circle(this.x, this.y, 50)},
//     checkLocation(){if(this.y >= height){this.negVel()}}
//   }
//   balls.push(newBall);
// }