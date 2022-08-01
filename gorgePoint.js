export class GorgePoint {
  constructor(index, centerX, centerY, pointGap, gorgeGap) {
    this.index = index;
    this.centerX = centerX;
    this.centerY = centerY;
    this.pointGap = pointGap;
    this.gorgeGap = gorgeGap;
    this.init();
  }

  init(){
    this.x = this.pointGap * this.index;
    this.y = this.centerY - Math.abs(this.x - this.centerX) + Math.random()*200;
    this.speed = 0.4;
    console.log(this.x, this.y);
  }

  update() {
    this.speed *= 1.001;
    //this.x += (this.x < this.centerX && -1 || 1) * this.speed / 10;
    this.y += this.speed;
    //console.log(this.x, this.y);

  }
}