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
      ball.changeVel(.25);
      ball.change();  
      ball.drawIt();
      ball.checkLocation();
    }
  );
}

class Ballz {
  constructor(){
    this.x= 0;//random(width);
    this.y=random(width)//0;
    this.dx=20;
  }
  changeVel(v){
    this.dx += v
  }
    negVel(){
      this.dx *= -1
    }
    change(){
      this.x += this.dx
    }
    drawIt(){
      circle(this.x, this.y, 50)
    }
    checkLocation(){
      if(this.x >= width){
        this.negVel()
      }
      if(this.x <=0){
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