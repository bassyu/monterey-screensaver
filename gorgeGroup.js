import { Gorge } from "./gorge.js";

export class GorgeGroup {
  constructor() {
    console.log('group.init')
    this.totalPoints = 12;
    this.gorges = [];

    const firstGorge = new Gorge(this.totalPoints);
    this.gorges.push(firstGorge);
  }

  init(stageWidth, stageHeight) {
    console.log('gorgeGroup.init')

    for (let i = 0; i < this.gorges.length; i++) {
      const gorge = this.gorges[i];
      gorge.init(stageWidth, stageHeight);
    }
  }

  draw() {
    /*
    if (this.gorges.length == 0) {
      return;
    }
    const topGorge = this.gorges[this.gorges.length - 1];
    const topY = topGorge.points[0].y;
    const appendPoint = topGorge.stageHeight / 5;
    
    if (topY > appendPoint) {
      const newGorge = new Gorge(this.totalPoints);
      newGorge.resize();
      this.gorges.push(newGorge);
      this.init();
      console.log(this.gorges)
    }*/

    for (let i = 0; i < this.gorges.length; i++) {
      const gorge = this.gorges[i];
      gorge.draw();
    }

    /*

    const bottomGorge = this.gorges[0];
    const bottomY = bottomGorge.points[0].y;
    
    if (bottomY > this.stageHeight) {
      console.log('shift')
      this.gorges.shift();
    }*/
  }
}