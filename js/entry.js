import Camera from './environment/camera';
import Game from './game';

window.addEventListener("resize", function() {
  let fullscreen = camera.fullscreen;
  camera = new Camera(display, 320, Math.PI * 0.4);
  camera.fullscreen = fullscreen;
});

window.addEventListener('DOMContentLoaded', () => {
  const display = document.getElementById('display');

  const game = new Game(display);
  game.play();
})
