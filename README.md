# Maze Runner


## Background and Overview
[Maze Runner](https://micah-jaffe.github.io/maze-runner/) is an interactive first-person game that pits human against computer, benchmarking maze solving performance against classic algorithms DFS, BFS, and A*. Maze Runner was built entirely in vanilla JavaScript, HTML, and CSS.

3D effects were achieved using raycasting, a technique that uses conditional trigonometric logic to render only the objects with the player's point of view. This avoids the sluggishness of loading the whole world at once and rerendering based on position. A debt of gratitude is owed to [Hunter Loftis](https://github.com/hunterloftis) for his informative and accessible work on raycasting.

![opener](https://github.com/micah-jaffe/maze-runner/blob/master/assets/readme/opener.png)


## Image Gallery

![galaxia](https://github.com/micah-jaffe/maze-runner/blob/master/assets/readme/galaxia.png)


![game_over](https://github.com/micah-jaffe/maze-runner/blob/master/assets/readme/game_over.png)


![settings](https://github.com/micah-jaffe/maze-runner/blob/master/assets/readme/settings.png)


## Key Features

### Map Creation

In order that the game be extensible, a dynamic way of creating rich, interactive mazes was desired. The `Map` class was given a static method `createFromMaze` that allows text files from an online [maze generator](http://www.delorie.com/game-room/mazes/genmaze.cgi) to be transformed into interactive maps. The `Game` class then uses this static method to set the map based on difficulty level selection. With this design, additional mazes can be added trivially.

```js
import EasyMaze from '../assets/maze/easy_maze.txt';

class Game {
  constructor() {
    this.map = Map.createFromMaze(EasyMaze);
  };
};
```

```js
class Map {
  static createFromMaze(maze) {
    const wallGrid = maze
      .split('')
      .filter(char => ['+','-', '|', ' '].includes(char))
      .map(char => char === ' ' ? 0 : 1);

    return new Map(Uint8Array.from(wallGrid));
  };

  constructor(wallGrid) {
    this.wallGrid = wallGrid;
    this.size = Math.sqrt(wallGrid.length);
    this.discovered = new Array(wallGrid.length).fill(false);
  };
};
```

![ancient_ruins](https://github.com/micah-jaffe/maze-runner/blob/master/assets/readme/ancient_ruins.png)


### Algorithm Implementation

The DFS, BFS, and A* players were created using polymorphic classes that inherit from an abstract `ComputerPlayer` class (this, in turn, inherits from the `Player` abstract class, which delegates to both `HumanPlayer` and `ComputerPlayer`). In this way, additional computer players can be added with most of their logic already handled in the parent class. An example using `DFSPlayer` is shown below.

```js
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

  move() {
    [this.x, this.y] = this.algorithmStep();
    this.steps++;
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
```

```js
import ComputerPlayer from "./computer_player";

export default class DFSPlayer extends ComputerPlayer {  
  algorithmStep() {
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
```

## Future Work

Priorities for future extensions to this game include:
*  Weighting of graph with attendant features (tar pits, booster pads, etc.)
*  Rendering of algorithm players on first-person canvas
*  Additional themes and weapons
