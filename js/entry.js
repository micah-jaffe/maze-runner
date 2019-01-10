import Player from './player';
import HumanPlayer from './human_player';
import ComputerPlayer from './computer_player';
import Map from './map';
import Camera from './camera';
import Game from './game';
import Controls from './controls';
import tiny_maze from '../assets/maze/tiny_maze.txt'

let display = document.getElementById("display"),
  map = Map.createFromMaze(tiny_maze),
  player = new HumanPlayer(1.5, 6.5, Math.PI * 1.5),
  computerPlayer = new ComputerPlayer(1.5, 6.5, 'hello'),
  controls = new Controls(),
  camera = new Camera(display, 320, Math.PI * 0.4),
  game = new Game();

game.start(seconds => {
  map.update(seconds);

  const prevX = player.x, prevY = player.y;
  player.update(controls.states, map, seconds);
  const nextX = player.x, nextY = player.y;
  computerPlayer.update(prevX, prevY, nextX, nextY);

  camera.render(player, map, null);
});

window.addEventListener("resize", function() {
  let fullscreen = camera.fullscreen;
  camera = new Camera(display, 320, Math.PI * 0.4);
  camera.fullscreen = fullscreen;
});

