import Player from './player';
import Map from './map';
import Camera from './camera';
import Game from './game';
import Controls from './controls';
import tiny_maze from '../assets/maze/tiny_maze.txt'

let display = document.getElementById("display"),
  map = Map.createFromMaze(tiny_maze),
  player = new Player(1.5, 6.5, Math.PI * 1.5),
  controls = new Controls(),
  camera = new Camera(display, 320, Math.PI * 0.4),
  game = new Game();

game.start(seconds => {
  map.update(seconds);
  
  // add logic for computer player updates here
  const prevX = player.x, prevY = player.y;
  player.update(controls.states, map, seconds);
  const nextX = player.x, nextY = player.y;

  computerPlayer.update(prevX, prevY, nextX, nextY)
  //
  camera.render(player, map, null);
});

window.addEventListener("resize", function() {
  let fullscreen = camera.fullscreen;
  camera = new Camera(display, 320, Math.PI * 0.4);
  camera.fullscreen = fullscreen;
});

