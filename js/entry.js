import HumanPlayer from './player/human_player';
import DFSPlayer from './player/dfs_player';
import BFSPlayer from './player/bfs_player';
import AStarPlayer from './player/a_star_player';
import Map from './map';
import Camera from './environment/camera';
import Game from './game';
import Controls from './controls';
import EasyMaze from '../assets/maze/easy_maze.txt'
// import MediumMaze from '../assets/maze/medium_maze.txt'
// import HardMaze from '../assets/maze/hard_maze.txt'

let display = document.getElementById("display"),
  map = Map.createFromMaze(EasyMaze),
  player = new HumanPlayer(1.5, 1.5, 0),
  computerPlayers = [
    new DFSPlayer(1.4, 1.5, map),
    new BFSPlayer(1.6, 1.5, map),
    new AStarPlayer(1.5, 1.5, map)
  ],
  controls = new Controls(),
  camera = new Camera(display, 320, Math.PI * 0.4),
  game = new Game(map, player, computerPlayers, controls, camera);


window.addEventListener("resize", function() {
  let fullscreen = camera.fullscreen;
  camera = new Camera(display, 320, Math.PI * 0.4);
  camera.fullscreen = fullscreen;
});

window.addEventListener('DOMContentLoaded', () => {
  game.begin();
})
