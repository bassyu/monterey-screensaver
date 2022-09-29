import { Point } from "./gorgePoint.js";

export class Gorge {
  constructor(ctx, totalPoints) {
    console.log('gorge.const')

    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    document.body.append(this.canvas);

    this.totalPoints = totalPoints;
    this.points = [];

    this.resize();
    console.log(this.points);
  }

  init(stageWidth, stageHeight) {
    console.log('gorge.init')

    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;

    console.log(this.stageWidth, this.stageHeight);

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;

    this.centerX = this.stageWidth / 2;
    this.centerY = this.stageHeight / 2;

    this.pointGap = this.stageWidth / (this.totalPoints - 1);

    this.points = [];
    for (let i = 0; i < this.totalPoints; i++) {
      const point = new Point(
        i,
        this.centerX,
        this.centerY,
        this.pointGap
      );

      this.points[i] = point;
    }
  }

  getRGB(y) {
    let startRGB, endRGB;
    let a = 1;
    const fadePoint = this.stageHeight / 4;
    if (y <= fadePoint) {
      a = y / fadePoint;
    }

    startRGB = [228, 76, 164];
    endRGB = [16,	4, 52];
    const getColor = (i) => {
      const color = startRGB[i] - parseInt(y * (startRGB[i] - endRGB[i]) / this.stageHeight);
      return color;
    }

    const r = getColor(0);
    const g = getColor(1);
    const b = getColor(2);

    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }

  draw() {
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
    this.ctx.beginPath();
    this.ctx.fillStyle = this.getRGB(this.points[0].y);

    let prevX = this.points[0].x;
    let prevY = this.points[0].y;

    this.ctx.moveTo(prevX, prevY);

    for (let i = 0; i < this.totalPoints; i++) {
      this.points[i].update();

      const cx = (prevX + this.points[i].x) / 2;
      const cy = (prevY + this.points[i].y) / 2;

      this.ctx.quadraticCurveTo(prevX, prevY, cx, cy);
      //this.ctx.lineTo(cx, cy);

      prevX = this.points[i].x;
      prevY = this.points[i].y;
    }

    this.ctx.lineTo(prevX, prevY);
    this.ctx.lineTo(this.stageWidth, this.stageHeight);
    this.ctx.lineTo(this.points[0].x, this.stageHeight);
    this.ctx.fill();
    this.ctx.closePath();
    
    //
    console.log(this.points[0].y);
  }
}