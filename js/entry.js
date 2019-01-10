import Player from './player';
import Map from './map';
import Camera from './camera';
import Game from './game';
import Controls from './controls';
import tiny_maze from '../assets/maze/tiny_maze.txt'
// let maze = Map.createFromMaze(tiny_maze)

let display = document.getElementById("display"),
  player = new Player(1.5, 6.5, Math.PI * 0.3),
  // map = new Map(8),
  map = Map.createFromMaze(tiny_maze),
  controls = new Controls(),
  camera = new Camera(display, 320, Math.PI * 0.4),
  game = new Game();

map.wallGrid[0] = 1;
map.wallGrid[1] = 1;
map.wallGrid[2] = 1;
map.wallGrid[15] = 1;
console.log(map.wallGrid)

game.start(seconds => {
  map.update(seconds);
  player.update(controls.states, map, seconds);
  camera.render(player, map, null);
});

window.addEventListener("resize", function() {
  let fullscreen = camera.fullscreen;
  camera = new Camera(display, 320, Math.PI * 0.4);
  camera.fullscreen = fullscreen;
});

