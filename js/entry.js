// const GameView = require("./game_view.js");
// const bindControls = require("./binds.js");
// import Game from 

// const Player = require("./player.js");
import Player from './player';
import Map from './map';
// import MapObject from './map_object';
import Camera from './camera';
import Bitmap from './bitmap';
import Game from './game';
import Controls from './controls';

var CIRCLE = Math.PI * 2;
var MOBILE = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
  navigator.userAgent
);

function Objects() {
  this.collection = [];
}

Objects.prototype.update = function() {
  map.objects.forEach(function(item) {
    item.logic && item.logic();
  });
};

var display = document.getElementById("display"),
  player = new Player(15.3, -1.2, Math.PI * 0.3),
  map = new Map(32),
  // objects = new Objects(),
  controls = new Controls(),
  camera = new Camera(display, MOBILE ? 160 : 320, Math.PI * 0.4),
  loop = new Game();

map.wallGrid[15] = 1;
map.wallGrid[17] = 1;

map.wallGrid[15 + 32] = 1;
//map.wallGrid[16 + 32] = 1;
map.wallGrid[17 + 32] = 1;

map.addObject(
  {
    color: "brown",
    texture: new Bitmap("img/knife_hand.png", 639, 1500),
    height: 0.7,
    width: 0.225,
    floorOffset: 0,
    speed: 0.1,
    logic: badGuyLogic()
  },
  16.5,
  0.5
);

map.addObject(
  {
    color: "green",
    texture: new Bitmap("img/knife_hand.png", 639, 1500),
    height: 0.7,
    width: 0.225,
    floorOffset: 0,
    speed: 0.1,
    logic: badGuyLogic()
  },
  16.5,
  2
);

// setInterval(function(){
// 	map.objects[0].x +=.01;
// 	//map.objects[0].height +=.01;
// },10)

function badGuyLogic(base) {
  return function() {
    var self = this;

    //console.log('logic!')

    if (self.distanceFromPlayer < 4) {
      //this.x += this.speed * Math.cos(this.render.angleToPlayer);
      //this.y += this.speed * Math.sin(this.render.angleToPlayer);
    }
  };
}

loop.start(function frame(seconds) {
  map.update(seconds);
  // objects.update();
  player.update(controls.states, map, seconds);
  camera.render(player, map, null);
});
// rebuild camera on resize, retain fullscreen property
// somewhat hacky, and duplicates code
window.addEventListener("resize", function() {
  var fullscreen = camera.fullscreen;
  camera = new Camera(display, MOBILE ? 160 : 320, Math.PI * 0.4);
  camera.fullscreen = fullscreen;
});

function removeInstructions() {
  var instructions = document.getElementById("instructions");
  instructions.parentNode.removeChild(instructions);
}

// document.addEventListener("DOMContentLoaded", () => {
//   console.log('hello')
// });
