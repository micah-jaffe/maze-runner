import HumanPlayer from './player/human_player';
import DFSPlayer from './player/dfs_player';
import BFSPlayer from './player/bfs_player';
import Map from './map';
import Camera from './environment/camera';
import Game from './game';
import Controls from './controls';
import EasyMaze from '../assets/maze/easy_maze.txt'
import MediumMaze from '../assets/maze/medium_maze.txt'
import HardMaze from '../assets/maze/hard_maze.txt'

let display = document.getElementById("display"),
  map = Map.createFromMaze(EasyMaze),
  player = new HumanPlayer(0, 1.5, 0),
  // computerPlayer = new ComputerPlayer(0.5, 1.5, 'hello'),
  dfsPlayer = new DFSPlayer(0.5, 1.5, map),
  bfsPlayer = new BFSPlayer(0.5, 1.5, map),
  controls = new Controls(),
  camera = new Camera(display, 320, Math.PI * 0.4),
  game = new Game();

game.start(seconds => {
  map.update(seconds);

  const prevX = player.x, prevY = player.y;
  player.update(controls.states, map, seconds);
  const nextX = player.x, nextY = player.y;
  // computerPlayer.update(prevX, prevY, nextX, nextY);
  dfsPlayer.update(prevX, prevY, nextX, nextY);
  bfsPlayer.update(prevX, prevY, nextX, nextY);

  camera.render(map, player, dfsPlayer, bfsPlayer);
});

window.addEventListener("resize", function() {
  let fullscreen = camera.fullscreen;
  camera = new Camera(display, 320, Math.PI * 0.4);
  camera.fullscreen = fullscreen;
});

