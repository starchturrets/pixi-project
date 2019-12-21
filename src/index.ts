import * as PIXI from 'pixi.js';
import scaleToWindow from './scaleToWindow';
import Bump from './bump';
import Square from './square';

PIXI.settings.SPRITE_MAX_TEXTURES = Math.min(
  PIXI.settings.SPRITE_MAX_TEXTURES,
  16,
);

class Game {
  app: PIXI.Application;

  graphics: PIXI.Graphics;

  player: Square;

  constructor() {
    this.app = new PIXI.Application({
      height: 800,
      width: 800,
    });
    this.app.renderer.backgroundColor = 0x3cb371;
    window.addEventListener('resize', () => {
      scaleToWindow(this.app.view, 0x3cb371);
    });

    document.body.appendChild(this.app.view);
    scaleToWindow(this.app.view, 0x061639);
    this.graphics = new PIXI.Graphics();
    this.player = new Square(this.graphics, this.app, 20);
  }

  loop = () => {
    const gameOver = false;
    this.graphics.clear();
    this.player.draw();
    this.collisionDetection();
    if (!gameOver) requestAnimationFrame(this.loop);
  };

  collisionDetection = () => {
    if (
      this.player.x + this.player.size > this.app.view.width
      || this.player.x < 0
    ) {
      this.player.dx = -this.player.dx;
    }
    if (
      this.player.y + this.player.size > this.app.view.height
      || this.player.y < 0
    ) {
      this.player.dy = -this.player.dy;
    }
  };
}

const canvas = new Game();
canvas.loop();
canvas.app.view.addEventListener('click', canvas.player.jump);
