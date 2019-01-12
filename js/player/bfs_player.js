import ComputerPlayer from "./computer_player";

export default class BFSPlayer extends ComputerPlayer {
  constructor(x, y, map) {
    super(x, y, map);
    this.q = [[this.x + 1, this.y]];
  };

  algorithmStep() {
    if (this.q.length === 0) return [this.x, this.y];

    const nextMove = this.q.shift();
    this.visit(nextMove);

    const unvisitedMoves = this.getUnvisitedMoves(nextMove);
    unvisitedMoves.forEach(
      move => this.q.push(move)
    );

    return nextMove;
  };
};