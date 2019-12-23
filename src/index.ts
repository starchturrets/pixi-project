import * as PIXI from 'pixi.js';
import scaleToWindow from './scaleToWindow';
import Bump from './bump';
import SQUARE from './square';

PIXI.settings.SPRITE_MAX_TEXTURES = Math.min(PIXI.settings.SPRITE_MAX_TEXTURES, 16);

class GAME extends PIXI.Application {
  player: SQUARE;

  background: PIXI.Graphics;

  constructor() {
    super({ height: 800, width: 800 });
    this.renderer.backgroundColor = 0x3cb371;

    window.addEventListener('resize', () => {
      scaleToWindow(this.view, 0x3cb371);
    });
    scaleToWindow(this.view, 0x061639);

    document.body.appendChild(this.view);
    this.background = new PIXI.Graphics();
    this.drawBackground();
    this.player = new SQUARE(this, 20);
  }

  drawBackground = () => {
    const { background }: { background: PIXI.Graphics } = this;
    background.beginFill(0x454545);
    // draw a rectangle
    background.drawRect(0, 0, this.view.width, this.view.height);
    background.interactive = true;
    background.on('click', console.log);
    this.stage.addChild(background);
  };

  loop = () => {
    const gameOver = false;
    this.player.move();
    this.collisionDetection();
    if (!gameOver) requestAnimationFrame(this.loop);
  };

  collisionDetection = () => {
    const {
      player: { y, velocityY, size },
    } = this;
    if (y + size + velocityY >= this.view.height || y <= 0) {
      this.player.velocityY = 0;
    }
  };
}

const canvas = new GAME();
requestAnimationFrame(canvas.loop);
