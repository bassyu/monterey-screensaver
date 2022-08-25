import { GorgePoint } from "./gorgePoint.js";

export class Gorge {
  constructor(index, totalGorges, totalPoints, color){
    this.index = index;
    this.totalGorges = totalGorges;
    this.totalPoints = totalPoints;
    this.color = color;
    this.points = [];
  }

  resize(stageWidth, stageHeight) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;

    this.centerX = stageWidth / 2;
    this.centerY = stageHeight / 2;

    this.gorgeGap = stageHeight / (this.totalGorges);
    this.pointGap = this.stageWidth / (this.totalPoints - 1);

    const startY = this.gorgeGap * this.index
    this.init(startY);
  }

  init(startY) {
    this.points = [];
    for (let i = 0; i < this.totalPoints; i++) {
      const point = new GorgePoint(
        i,
        this.centerX,
        this.centerY + startY,
        this.gorgeGap,
        this.pointGap
      );

      this.points[i] = point;
    }
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;

    let prevX = this.points[0].x;
    let prevY = this.points[0].y;

    ctx.moveTo(prevX, prevY);

    for (let i = 0; i < this.totalPoints; i++) {
      this.points[i].update()

      const cx = (prevX + this.points[i].x) / 2;
      const cy = (prevY + this.points[i].y) / 2;

      ctx.quadraticCurveTo(prevX, prevY, cx, cy);
      //ctx.lineTo(cx, cy);

      prevX = this.points[i].x;
      prevY = this.points[i].y;
    }

    ctx.lineTo(prevX, prevY);
    ctx.lineTo(this.stageWidth, this.stageHeight);
    ctx.lineTo(this.points[0].x, this.stageHeight);
    ctx.fill();
    ctx.closePath();

    if (this.points[0].y >= this.stageHeight) {
      this.init(0)
    }
  }
}