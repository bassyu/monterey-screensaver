export class GorgePoint {
  constructor(index, centerX, centerY, gorgeGap, pointGap) {
    this.index = index;
    this.centerX = centerX;
    this.centerY = centerY;
    this.gorgeGap = gorgeGap;
    this.pointGap = pointGap;
    
    this.x = this.pointGap * this.index;
    this.y = this.centerY - Math.abs(this.x - this.centerX) + Math.random()*200;
    this.speed = 0.8;
    console.log(this.x, this.y);
  }

  update() {
    this.speed *= 1.001;
    this.y += this.speed;
    //console.log(this.x, this.y);
  }
}