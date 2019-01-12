import ComputerPlayer from "./computer_player";

export default class AStarPlayer extends ComputerPlayer {
  constructor(x, y, map) {
    super(x, y, map);
    this.q = [[this.x, this.y]];
  }

  algorithmStep() {
    return [this.x + 1, this.y]
  }
}
