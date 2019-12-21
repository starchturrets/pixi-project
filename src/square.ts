class Square {
  graphics: PIXI.Graphics;

  app: PIXI.Application;

  x: number;

  y: number;

  velocityX: number;

  velocityY: number;

  size: number;

  constructor(graphics: PIXI.Graphics, app: PIXI.Application, size: number) {
    this.graphics = graphics;
    this.app = app;
    this.x = 20;
    this.y = 10;
    this.size = size;
    this.velocityX = 4;
    this.velocityY = 4;
  }

  draw = () => {
    const { graphics, app, size } = this;
    graphics.beginFill(0xeee);

    // set the line style to have a width of 5 and set the color to red
    graphics.lineStyle(1, 0xffffff);
    // draw a rectangle
    graphics.drawRect(this.x, this.y, size, size);

    app.stage.addChild(graphics);
    this.y += this.velocityY;
  };

  jump = () => {
    this.velocityY = -4;
    setTimeout(() => {
      this.velocityY = 4;
    }, 690);
  };
}
export default Square;
