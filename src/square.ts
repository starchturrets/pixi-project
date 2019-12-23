import * as PIXI from 'pixi.js';
// class Square {
//   graphics: PIXI.Graphics;

//   app: PIXI.Application;

//   x: number;

//   y: number;

//   velocityX: number;

//   velocityY: number;

//   size: number;

//   constructor( app: PIXI.Application, size: number) {
//     this.graphics = graphics;
//     this.app = app;
//     this.x = 20;
//     this.y = 10;
//     this.size = size;
//     this.velocityX = 4;
//     this.velocityY = 4;
//     this.graphics = new PIXI.Graphics();
//     this.graphics.beginFill(0xeee);

//     // set the line style to have a width of 5 and set the color to red
//     this.shape.lineStyle(1, 0xffffff);
//     // draw a rectangle
//     this.shape.drawRect(this.x, this.y, size, size);

//     app.stage.addChild(this.shape);
//   }

//   draw = () => {
//     this.shape.y = this.y;
//     this.y += this.velocityY;
//   };

//   jump = () => {
//     this.velocityY = -4;

//     setTimeout(() => {
//       this.velocityY = 4;
//     }, 690);
//   };
// }
class SQUARE extends PIXI.Graphics {
  app: PIXI.Application;

  velocityX: number;

  velocityY: number;

  size: number;

  jumping: boolean;

  constructor(app: PIXI.Application, size: number) {
    super();
    this.app = app;
    this.x = this.app.view.width / 4 - size / 2; // PLace player in the middle of the screen
    this.y = 10;
    this.velocityX = 4;
    this.velocityY = 4;
    this.size = size;
    this.beginFill(0xeee);
    this.jumping = false;
    // set the line style to have a width of 5 and set the color to red
    this.lineStyle(1, 0xffffff);
    // draw a rectangle
    this.drawRect(this.x, this.y, size, size);

    this.app.stage.addChild(this);
  }

  move = () => {
    // this.x = this.jumping === true ? this.x + this.velocityX * -1 : this.x + this.velocityX;
  };

  jump = ev => {
    // this.jumping = true;
  };
}
export default SQUARE;
