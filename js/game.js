import Map from './map';
import HumanPlayer from './player/human_player';
import DFSPlayer from './player/dfs_player';
import BFSPlayer from './player/bfs_player';
import AStarPlayer from './player/a_star_player';
import Controls from './controls';
import Camera from './environment/camera';
import EasyMaze from '../assets/maze/easy_maze.txt';
import MediumMaze from '../assets/maze/medium_maze.txt';
import HardMaze from '../assets/maze/hard_maze.txt';

export default class Game {
  constructor(display) {
    this.frame = this.frame.bind(this);
    this.lastTime = 0;
    this.callback = function () {};
    this.map = Map.createFromMaze(EasyMaze);
    this.player = new HumanPlayer(1.5, 1.5, 0);
    this.computerPlayers = [
      new DFSPlayer(1.4, 1.5, this.map),
      new BFSPlayer(1.6, 1.5, this.map),
      new AStarPlayer(1.5, 1.5, this.map)
    ];
    this.controls = new Controls();
    this.camera = new Camera(display, 320, Math.PI * 0.4);
  };

  play() {
    this.listenForResize();
    this.listenForDifficulty();
    this.listenForSidebarClicks();

    this.start(seconds => {
      if (this.over()) this.conclude();

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

  conclude() {
    const steps = document.getElementsByClassName('steps');

    Array.from(steps).forEach(
      player => {
        switch (player.id) {
          case "player":
            player.innerHTML = player.innerHTML.replace(/\d+/, this.player.steps);
            break;
          case "dfs":
            player.innerHTML = player.innerHTML.replace(/\d+/, this.computerPlayers[0].steps);
            break;
          case "bfs":
            player.innerHTML = player.innerHTML.replace(/\d+/, this.computerPlayers[1].steps);
            break;
          case "a*":
            player.innerHTML = player.innerHTML.replace(/\d+/, this.computerPlayers[2].steps);
            break;
        }
      }
    );

    document
      .getElementById('game-over')
      .className = 'modal'
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
        break;
      }

      this.resetPlayers();
      this.closeModals();
    };

    this.addListenerToCollection('difficulty-btn', setDifficulty);
  };

  listenForSidebarClicks() {
    this.listenForSettingsChange();

    const openModal = (e) => {
      this.closeModals();

      switch (e.currentTarget.id) {
        case 'about-icon':
          document
            .getElementById('about')
            .classList.remove('hidden');
          break;
        case 'settings-icon':
          document
            .getElementById('settings')
            .classList.remove('hidden');
          break;
      }
    };

    this.addListenerToCollection('sidebar-icon', openModal);

    document
      .getElementById('display')
      .addEventListener("click", this.closeModals)
  };

  listenForSettingsChange() {
    const changeTheme = (e) => {
      this.map.receiveNewTheme(e.target.id);
      this.closeModals();
    };

    const changeWeapon = (e) => {
      this.player.receiveNewWeapon(e.target.id);
      this.closeModals();
    };

    this.addListenerToCollection('theme-btn', changeTheme);
    this.addListenerToCollection('weapon-btn', changeWeapon);
  };

  closeModals() {
    const modals = document.getElementsByClassName('modal');

    Array.from(modals).forEach(modal => {
      if (!modal.className.includes('hidden')) {
        modal.classList.add('hidden');
      }
    });
  };

  resetPlayers() {
    this.player = new HumanPlayer(1.5, 1.5, 0);
    this.computerPlayers = [
      new DFSPlayer(1.4, 1.5, this.map), 
      new BFSPlayer(1.6, 1.5, this.map), 
      new AStarPlayer(1.5, 1.5, this.map)
    ];
  };

  addListenerToCollection(classname, callback) {
    const collection = document.getElementsByClassName(classname);
    
    Array.from(collection).forEach(
      el => el.addEventListener("click", callback)
    );
  };
};