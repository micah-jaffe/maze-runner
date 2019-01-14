import ComputerPlayer from "./computer_player";
import PriorityQueue from "../util/priority_queue";

export default class AStarPlayer extends ComputerPlayer {
  constructor(x, y, map) {
    super(x, y, map);

    const finish = [this.map.size - 1, this.map.size - 2];

    const manhattanDistance = (pos) =>
      Math.abs(pos[0] - finish[0]) + Math.abs(pos[1] - finish[1])
    
    const comparator = (pos1, pos2) =>
      manhattanDistance(pos1) < manhattanDistance(pos2)

    this.pq = new PriorityQueue(comparator);
    this.pq.push([this.x, this.y]);
    this.pq.push([this.x + 1, this.y]);
  };

  algorithmStep() {
    if (this.pq.isEmpty()) return [this.x, this.y];

    const nextMove = this.pq.pop();
    this.visit(nextMove);

    const unvisitedMoves = this.getUnvisitedMoves(nextMove);
    unvisitedMoves.forEach(move => this.pq.push(move));

    return nextMove;
  };
};