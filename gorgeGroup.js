import { Gorge } from "./gorge.js";

export class GorgeGroup {
  constructor() {
    this.totalGorges = 1;
    this.totalPoints = 12;

    this.color = ['rgb(200,100,160)', 'rgba(0,146,199,0.4)', 'rgba(0,87,158,0.4)'];

    this.gorges = [];

    for (let i = 0; i < this.totalGorges; i++) {
      const gorge = new Gorge(
        i,
        this.totalGorges,
        this.totalPoints,
      );
      this.gorges[i] = gorge;
    }
  }

  resize(stageWidth, stageHeight) {
    for (let i = 0; i < this.totalGorges; i++) {
      const gorge = this.gorges[i];
      gorge.resize(stageWidth, stageHeight);
    }
  }

  draw(ctx) {
    for (let i = 0; i < this.totalGorges; i++) {
      const gorge = this.gorges[i];
      gorge.draw(ctx);
    }
  }
}