export class Point {
  constructor(index, centerX, centerY, pointGap) {
    this.index = index;
    this.centerX = centerX;
    this.centerY = centerY;
    this.pointGap = pointGap;
    
    this.x = this.pointGap * this.index;
    this.y = this.centerY - Math.abs(this.x - this.centerX) + Math.random()*200;
    this.speed = 0.8;
  }

  update() {
    this.y += this.speed;
    //console.log(this.x, this.y);
  }
}