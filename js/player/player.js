
export default class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  };

  move() {
    throw "Unable to move."
  };

  update() {
    throw "Unable to update."
  };
};