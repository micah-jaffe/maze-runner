export default class ComputerPlayer {
  constructor(algorithm) {
    super(x, y);
    this.algorithm = algorithm;
  }

  move() {
    this.y += 1;
    console.log(this.y)
  }

  update(prevX, prevY, nextX, nextY) {
    if (
      Math.floor(prevX) !== Math.floor(nextX) ||
      Math.floor(prevY !== Math.floor(nextY))
    ) {
      this.move();
    }
  }
};