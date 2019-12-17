import * as PIXI from 'pixi.js';
import scaleToWindow from './scaleToWindow';

PIXI.settings.SPRITE_MAX_TEXTURES = Math.min(
  PIXI.settings.SPRITE_MAX_TEXTURES,
  16,
);

class Game {
  app: PIXI.Application;

  graphics: PIXI.Graphics;

  constructor() {
    this.app = new PIXI.Application({
      height: window.innerHeight,
    });
    this.app.renderer.backgroundColor = 0x061639;
    window.addEventListener('resize', () => {
      scaleToWindow(this.app.view, 0x061639);
    });

    document.body.appendChild(this.app.view);
    scaleToWindow(this.app.view, 0x061639);
    this.graphics = new PIXI.Graphics();
  }

  drawSquare = () => {
    const { graphics, app } = this;
    graphics.beginFill(0xffff00);

    // set the line style to have a width of 5 and set the color to red
    graphics.lineStyle(1, 0xff0000);

    // draw a rectangle
    graphics.drawRect(0, 0, 300, 200);

    app.stage.addChild(graphics);
  };
}

const canvas = new Game();
canvas.drawSquare();
