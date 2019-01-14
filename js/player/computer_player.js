import Player from './player';

export default class ComputerPlayer extends Player {
  constructor(x, y, map) {
    super(x, y);
    this.map = map;
    this.visited = new Array(map.size * map.size).fill(false);
    this.from = new Array(map.size * map.size).fill(null);
    this.steps = 0;

    this.visit([this.x, this.y]);
  };

  // resetMap(map) {
  //   this.map = map;
  //   this.visited = new Array(map.size * map.size).fill(false);  
  //   this.from = new Array(map.size * map.size).fill(null);
  //   this.steps = 0;

  //   this.visit([this.x, this.y])
  // };

  move() {
    [this.x, this.y] = this.algorithmStep();
    this.steps++;
  };

  update(prevX, prevY, nextX, nextY) {
    if (
      Math.floor(this.x) >= this.map.size - 1 &&
      Math.floor(this.y) >= this.map.size - 2
    ) {
      return;
    }

    if (
      Math.floor(prevX) !== Math.floor(nextX) ||
      Math.floor(prevY) !== Math.floor(nextY)
    ) {
      this.move();
    }
  };

  algorithmStep() {
    throw "No algorithm specified."
  };

  getValidMoves(fromPos = [this.x, this.y]) {
    const possibleMoves = [
      [fromPos[0] + 1, fromPos[1]],
      [fromPos[0], fromPos[1] + 1],
      [fromPos[0] - 1, fromPos[1]],
      [fromPos[0], fromPos[1] - 1]
    ];

    return possibleMoves.filter(
      move => this.map.get(move[0], move[1]) === 0
    );
  };

  getUnvisitedMoves(fromPos = [this.x, this.y]) {
    return this.getValidMoves(fromPos).filter(
      move => !this.visited[this.index(move)]
    );
  };

  visit(pos) {
    this.visited[this.index(pos)] = true;
    this.from[this.index(pos)] = [this.x, this.y];
  };

  index(pos) {
    return pos[1] * this.map.size + pos[0];
  };
};