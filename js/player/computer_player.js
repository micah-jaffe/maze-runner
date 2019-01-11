import Player from './player';

export default class ComputerPlayer extends Player {
  constructor(x, y, map) {
    super(x, y);
    this.map = map;
    this.visited = new Array(map.size * map.size).fill(false);
    this.from = new Array(map.size * map.size).fill(null);
  };

  move() {
    [this.x, this.y] = this.algorithm(this.x, this.y, this.map);
  };

  update(prevX, prevY, nextX, nextY) {
    if (
      Math.floor(prevX) !== Math.floor(nextX) ||
      Math.floor(prevY) !== Math.floor(nextY)
    ) {
      this.move();
    }
  };

  algorithm() {
    throw "No algorithm specified."
  };

  getValidMoves() {
    const possibleMoves = [
      [this.x + 1, this.y],
      [this.x, this.y + 1],
      [this.x - 1, this.y],
      [this.x, this.y - 1]
    ];

    return possibleMoves.filter(
      move => this.map.get(move[0], move[1]) === 0
    );
  };

  getUnvisitedMoves() {
    return this.getValidMoves().filter(
      move => !this.visited[this.index(move)]
    );
  };

  index(pos) {
    return pos[1] * this.map.size + pos[0];
  };

  visit(pos) {
    this.visited[this.index(pos)] = true;
    this.from[this.index(pos)] = [this.x, this.y];
  };
};