import Player from './player';
import HumanPlayer from './human_player';
import ComputerPlayer from './computer_player';
import Map from './map';
import Camera from './environment/camera';
import Game from './game';
import Controls from './controls';
import EasyMaze from '../assets/maze/easy_maze.txt'
import MediumMaze from '../assets/maze/medium_maze.txt'
import HardMaze from '../assets/maze/hard_maze.txt'

let display = document.getElementById("display"),
  map = Map.createFromMaze(MediumMaze),
  player = new HumanPlayer(0, 1.5, 0),
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

