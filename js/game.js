import EasyMaze from '../assets/maze/easy_maze.txt';
import Map from './map';
import MediumMaze from '../assets/maze/medium_maze.txt';
import HardMaze from '../assets/maze/hard_maze.txt';

export default class Game {
  constructor(map, player, computerPlayers, controls, camera) {
    this.frame = this.frame.bind(this);
    this.lastTime = 0;
    this.callback = function () {};
    this.map = map;
    this.player = player;
    this.computerPlayers = computerPlayers;
    this.controls = controls;
    this.camera = camera;
    this.play = this.play.bind(this);
  };

  begin() {
    this.listenForResize();
    this.listenForDifficulty();
    this.play();

  };

  play() {
    this.start(seconds => {
      if (this.over()) {
        return;
      }

      this.map.update(seconds);

      const prevX = this.player.x, prevY = this.player.y;
      this.player.update(this.controls.states, this.map, seconds);
      const nextX = this.player.x, nextY = this.player.y;

      this.computerPlayers.forEach(player =>
        player.update(prevX, prevY, nextX, nextY)
      );

      this.camera.render(this.map, this.player, ...this.computerPlayers);
    });
  };

  start(callback) {
    // alert('start')
    this.callback = callback;
    requestAnimationFrame(this.frame);
  };

  frame(time) {
    const seconds = (time - this.lastTime) / 1000;
    this.lastTime = time;
    if (seconds < 0.2) this.callback(seconds);
    requestAnimationFrame(this.frame);
  };

  over() {
    return (
      this.player.x >= this.map.size - 0.5 ||
      this.player.y >= this.map.size - 1
    );
  };

  listenForResize() {
    window.addEventListener("resize", function () {
      let fullscreen = this.camera.fullscreen;
      this.camera = new Camera(display, 320, Math.PI * 0.4);
      this.camera.fullscreen = fullscreen;
    });
  };

  listenForDifficulty() {
    const setDifficulty = (e) => {
      switch (e.target.innerHTML) {
        case 'Easy':
        this.map = Map.createFromMaze(EasyMaze);
        break;
      case 'Medium': 
        this.map = Map.createFromMaze(MediumMaze);
        break;
      case 'Hard':
        this.map = Map.createFromMaze(HardMaze);
      }
    };

    const btns = document.getElementsByClassName('difficulty-btn');
    Array.from(btns).forEach(
      el => el.addEventListener("click", setDifficulty)
    );
  };
};