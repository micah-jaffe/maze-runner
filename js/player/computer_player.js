import Player from './player';

export default class ComputerPlayer extends Player {
  constructor(x, y, algorithm) {
    super(x, y);
    this.algorithm = algorithm;
  };

  move() {
    this.x += 1;
    console.log(this.x, this.y)
  };

  update(prevX, prevY, nextX, nextY) {
    if (
      Math.floor(prevX) !== Math.floor(nextX) ||
      Math.floor(prevY) !== Math.floor(nextY)
    ) {
      this.move();
    }
  };
};