import { GorgeGroup } from "./gorgeGroup.js";

class App {
  constructor() {
    this.gorgeGroup = new GorgeGroup();

    window.addEventListener('resize', this.resize.bind(this), false);
    this.init();

    window.requestAnimationFrame(this.animate.bind(this));
  }

  init() {
    console.log('app.resize');
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.gorgeGroup.init(this.stageWidth, this.stageHeight);
  }

  animate(t) {
    this.gorgeGroup.draw();

    requestAnimationFrame(this.animate.bind(this));
  }
}

window.onload = () => {
  new App();
}