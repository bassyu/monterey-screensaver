export class GorgePoint {
  constructor(index, x, a, p, q) {
    this.x = x;
    this.y = a*(x-p)**2 + q;
    this.fixedY = 0;
    this.speed = 0;
    this.cur = index;
    this.max = Math.random() * 100 + 150;
  }

  update() {
    this.cur += this.speed;
    this.y = this.fixedY + (Math.sin(this.cur) * this.max);
  }
}