import ComputerPlayer from "./computer_player";

export default class DFSPlayer extends ComputerPlayer {  
  algorithm() {
    const unvisitedMoves = this.getUnvisitedMoves();

    if (unvisitedMoves.length > 0) {
      const randomMove = unvisitedMoves[Math.floor(Math.random() * unvisitedMoves.length)];
      this.visit(randomMove);
      return randomMove;
    } else {
      return this.backtrack();
    }
  };

  backtrack() {
    return this.from[(this.index([this.x, this.y]))];
  };
};