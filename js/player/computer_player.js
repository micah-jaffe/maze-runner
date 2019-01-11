import Player from './player';

export default class ComputerPlayer extends Player {
  constructor(x, y, map) {
    super(x, y);
    this.grid = map.wallGrid;
  };

  move() {
    [this.x, this.y] = this.algorithm(this.x, this.y, this.grid);
  };

  update(prevX, prevY, nextX, nextY) {
    if (
      Math.floor(prevX) !== Math.floor(nextX) ||
      Math.floor(prevY) !== Math.floor(nextY)
    ) {
      this.move();
    }
  };

  algorithm(x, y, grid) {
    throw "No algorithm specified."
  };
};