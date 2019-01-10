// const GameView = require("./game_view.js");
// const bindControls = require("./binds.js");
// import Game from 

// const Player = require("./player.js");
import Player from './player';
import Map from './map';

var CIRCLE = Math.PI * 2;
var MOBILE = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
  navigator.userAgent
);

function Controls() {
  this.codes = {
    37: "left", // left arrow
    39: "right", // right arrow
    38: "forward", // up arrow
    40: "backward", // down arrow
    65: "left", // a
    68: "right", // d
    87: "forward", //w
    83: "backward" // s
  };
  this.states = {
    left: false,
    right: false,
    forward: false,
    backward: false,
    running: false
  };
  document.addEventListener("keydown", this.onKey.bind(this, true), false);
  document.addEventListener("keyup", this.onKey.bind(this, false), false);

  document.addEventListener("keydown", function(e) {
    if (player && e.keyCode === 73) {
      player.cycleWeapons();
    }
  });
  //document.addEventListener('touchstart', this.onTouch.bind(this), false);
  //document.addEventListener('touchmove', this.onTouch.bind(this), false);
  //document.addEventListener('touchend', this.onTouchEnd.bind(this), false);
}

//Controls.prototype.onTouch = function(e) {
//  var t = e.touches[0];
//  this.onTouchEnd(e);
//  if (t.pageY < window.innerHeight * 0.5) this.onKey(true, { keyCode: 38 });
//  else if (t.pageX < window.innerWidth * 0.5) this.onKey(true, { keyCode: 37 });
//  else if (t.pageY > window.innerWidth * 0.5) this.onKey(true, { keyCode: 39 });
//};
//
//Controls.prototype.onTouchEnd = function(e) {
//  this.states = { 'left': false, 'right': false, 'forward': false, 'backward': false };
//  e.preventDefault();
//  e.stopPropagation();
//};

Controls.prototype.onKey = function(val, e) {
  var state = this.codes[e.keyCode];

  this.states.running = e.shiftKey;

  if (typeof state === "undefined") return;
  this.states[state] = val;
  //this.states.crouching = e.ctrlKey;
  e.preventDefault && e.preventDefault();
  e.stopPropagation && e.stopPropagation();
};

Controls.prototype.onMouse = function(player, vals) {
  var maxSpeed = 1000, // fastest possible mouse speed
    speed = Math.min(vals.x, maxSpeed) / maxSpeed,
    amount = Math.PI * speed;

  if (player.direction > CIRCLE) {
    amount -= CIRCLE;
  } else if (player.direction < 0) {
    amount += CIRCLE;
  }

  player.direction += amount;
};

function Bitmap(src, width, height) {
  this.image = new Image();
  this.image.src = src;
  this.width = width;
  this.height = height;
}

// function Player(x, y, direction) {
//   this.x = x;
//   this.y = y;
//   this.direction = direction;
//   this.maxStamina = 10;
//   this.stamina = this.maxStamina;
//   this.inventory = [
//     // new Bitmap('img/goo_hand.png', 320, 332),
//     new Bitmap('img/knife_hand.png', 319, 320)
//   ];
//   this.weapon = this.inventory[0];

//   this.paces = 0;
// }

// Player.prototype.rotate = function (angle) {
//   this.direction = (this.direction + angle + CIRCLE) % (CIRCLE);
// };

// Player.prototype.walk = function (distance, angle, map) {
//   var dx = Math.cos(this.direction + angle) * distance;
//   var dy = Math.sin(this.direction + angle) * distance;
//   if (map.get(this.x + dx, this.y) <= 0) this.x += dx;
//   if (map.get(this.x, this.y + dy) <= 0) this.y += dy;
//   this.paces += distance;
// };

// Player.prototype.update = function (controls, map, seconds) {

//   var speed = controls.running && player.stamina > 0 ? 3 : 1.5;

//   if (controls.forward) this.walk(speed * seconds, 0, map);
//   if (controls.backward) this.walk(-speed * seconds, 0, map);

//   if (!camera.fullscreen) { //todo: make this not rely on globals
//     if (controls.left) this.rotate(-Math.PI * seconds);
//     if (controls.right) this.rotate(Math.PI * seconds);
//   } else {
//     if (controls.left) this.walk(-speed / 2 * seconds, Math.PI * .5, map);
//     if (controls.right) this.walk(speed / 2 * seconds, Math.PI * .5, map);
//   }

//   if (controls.running && player.stamina > -1) {
//     player.stamina -= .1;
//   } else if (player.stamina < 10) {
//     player.stamina += .5;
//   }
// };

// Player.prototype.cycleWeapons = function () {
//   this.weapon = this.inventory[this.inventory.indexOf(this.weapon) + 1] || this.inventory[0];
// }

// function Map(size) {
//   this.size = size;
//   this.wallGrid = new Uint8Array(size * size);
//   this.skybox = new Bitmap("img/deathvalley_panorama.jpg", 4000, 1290);
//   this.wallTexture = new Bitmap("img/wall_texture.jpg", 1024, 1024);
//   // this.floorTexture = new Bitmap('img/floor_texture.jpg', 391, 392);
//   this.light = 0;
//   this.objects = [];
// }

// Map.prototype.get = function(x, y) {
//   x = Math.floor(x);
//   y = Math.floor(y);
//   if (x < 0 || x > this.size - 1 || y < 0 || y > this.size - 1) return -1;
//   return this.wallGrid[y * this.size + x];
// };

// Map.prototype.getObject = function(x, y) {
//   x = Math.floor(x);
//   y = Math.floor(y);
//   return this.objects[y * this.size + x];
// };

// Map.prototype.randomize = function() {
//   for (var i = 0; i < this.size * this.size; i++) {
//     this.wallGrid[i] = Math.random() < 0.3 ? 1 : 0;
//   }
// };

// Map.prototype.cast = function(point, angle, range, objects) {
//   var self = this,
//     sin = Math.sin(angle),
//     cos = Math.cos(angle),
//     noWall = {
//       length2: Infinity
//     };

//   return ray({
//     x: point.x,
//     y: point.y,
//     height: 0,
//     distance: 0
//   });

//   function ray(origin) {
//     var stepX = step(sin, cos, origin.x, origin.y);
//     var stepY = step(cos, sin, origin.y, origin.x, true);
//     var nextStep =
//       stepX.length2 < stepY.length2
//         ? inspect(stepX, 1, 0, origin.distance, stepX.y)
//         : inspect(stepY, 0, 1, origin.distance, stepY.x);

//     if (nextStep.distance > range) return [origin];
//     return [origin].concat(ray(nextStep));
//   }

//   function step(rise, run, x, y, inverted) {
//     if (run === 0) return noWall;
//     var dx = run > 0 ? Math.floor(x + 1) - x : Math.ceil(x - 1) - x;
//     var dy = dx * (rise / run);
//     return {
//       x: inverted ? y + dy : x + dx,
//       y: inverted ? x + dx : y + dy,
//       length2: dx * dx + dy * dy
//     };
//   }

//   function inspect(step, shiftX, shiftY, distance, offset) {
//     var dx = cos < 0 ? shiftX : 0;
//     var dy = sin < 0 ? shiftY : 0;
//     step.height = self.get(step.x - dx, step.y - dy);
//     step.distance = distance + Math.sqrt(step.length2);
//     step.object = self.getObject(step.x - dx, step.y - dy);
//     if (shiftX) step.shading = cos < 0 ? 2 : 0;
//     else step.shading = sin < 0 ? 2 : 1;
//     step.offset = offset - Math.floor(offset);
//     return step;
//   }
// };

// Map.prototype.update = function(seconds) {
//   if (this.light > 0) this.light = Math.max(this.light - 10 * seconds, 0);
//   else if (Math.random() * 5 < seconds) this.light = 2;
// };

// Map.prototype.addObject = function(object, x, y) {
//   this.objects.push(new MapObject(object, x, y));
// };

function MapObject(object, x, y) {
  for (var prop in object) {
    this[prop] = object[prop];
  }
  this.x = x;
  this.y = y;
}

function Camera(canvas, resolution, fov) {
  this.ctx = canvas.getContext("2d");
  this.width = canvas.width = window.innerWidth;
  this.height = canvas.height = window.innerHeight;
  this.resolution = resolution;
  this.spacing = this.width / resolution;
  this.fov = fov;
  this.range = MOBILE ? 8 : 14;
  this.lightRange = 5;
  this.scale = (this.width + this.height) / 1200;

  document.addEventListener("keyup", this.onKey.bind(this, false), false);
}

Camera.prototype.onKey = function(val, e) {
  if (e.keyCode === 70) {
    this.toggleFullscreen();
  }
};

Camera.prototype.render = function(player, map, objects) {
  this.drawSky(player.direction, map.skybox, map.light);
  this.drawColumns(player, map, objects);
  this.drawWeapon(player.weapon, player.paces);
  this.drawMiniMap(map, player);
};

Camera.prototype.drawSky = function(direction, sky, ambient) {
  var width = this.width * (CIRCLE / this.fov);
  var left = (-width * direction) / CIRCLE;

  this.ctx.save();
  this.ctx.drawImage(sky.image, left, 0, width, this.height);
  if (left < width - this.width) {
    this.ctx.drawImage(sky.image, left + width, 0, width, this.height);
  }
  if (ambient > 0) {
    this.ctx.fillStyle = "#ffffff";
    this.ctx.globalAlpha = ambient * 0.1;
    this.ctx.fillRect(0, this.height * 0.5, this.width, this.height * 0.5);
  }
  this.ctx.restore();
};

Camera.prototype.drawSpriteColumn = function(
  player,
  map,
  column,
  columnProps,
  sprites
) {
  var ctx = this.ctx,
    left = Math.floor(column * this.spacing),
    width = Math.ceil(this.spacing),
    angle = this.fov * (column / this.resolution - 0.5),
    columnWidth = this.width / this.resolution,
    sprite,
    props,
    obj,
    textureX,
    height,
    projection,
    mappedColumnObj,
    spriteIsInColumn,
    top;

  //todo: make rays check for objects, and return those that it actually hit

  //check if ray hit an object
  //if(!columnProps.objects.length){return;}

  sprites = sprites.filter(function(sprite) {
    return !columnProps.hit || sprite.distanceFromPlayer < columnProps.hit;
  });

  for (var i = 0; i < sprites.length; i++) {
    sprite = sprites[i];

    //mappedColumnObj = columnProps.objects.filter(function(obj){
    //	return sprite === obj.object;
    //})[0];

    //if(!mappedColumnObj)return;

    //determine if sprite should be drawn based on current column position and sprite width
    spriteIsInColumn =
      left > sprite.render.cameraXOffset - sprite.render.width / 2 &&
      left < sprite.render.cameraXOffset + sprite.render.width / 2;

    //console.log(spriteIsInColumn);

    if (spriteIsInColumn) {
      textureX = Math.floor(
        (sprite.texture.width / sprite.render.numColumns) *
          (column - sprite.render.firstColumn)
      );

      this.ctx.fillStyle = "black";
      this.ctx.globalAlpha = 1;
      //ctx.fillRect(left, top , 10, sprite.render.height);

      var brightness =
        Math.max(sprite.distanceFromPlayer / this.lightRange - map.light, 0) *
        100;

      sprite.texture.image.style.webkitFilter =
        "brightness(" + brightness + "%)";
      sprite.texture.image.style.filter = "brightness(" + brightness + "%)";

      ctx.drawImage(
        sprite.texture.image,
        textureX,
        0,
        1,
        sprite.texture.height,
        left,
        sprite.render.top,
        width,
        sprite.render.height
      );

      //debugger;

      //ctx.fillRect(left, sprite.render.top, columnWidth, sprite.render.height);
      //debugger;
    }
  }
};

Camera.prototype.drawSprites = function(player, map, columnProps) {
  var screenWidth = this.width,
    screenHeight = this.height,
    screenRatio = screenWidth / this.fov,
    resolution = this.resolution;

  //probably should get these and pass them in, but modifying originals for now
  // also this limits size of world

  // calculate each sprite distance to player
  this.setSpriteDistances(map.objects, player);

  var sprites = Array.prototype.slice
    .call(map.objects)
    .map(function(sprite) {
      var distX = sprite.x - player.x,
        distY = sprite.y - player.y,
        width = (sprite.width * screenWidth) / sprite.distanceFromPlayer,
        height = (sprite.height * screenHeight) / sprite.distanceFromPlayer,
        renderedFloorOffset = sprite.floorOffset / sprite.distanceFromPlayer,
        angleToPlayer = Math.atan2(distY, distX),
        angleRelativeToPlayerView = player.direction - angleToPlayer,
        top = (screenHeight / 2) * (1 + 1 / sprite.distanceFromPlayer) - height;

      if (angleRelativeToPlayerView >= CIRCLE / 2) {
        angleRelativeToPlayerView -= CIRCLE;
      }

      var cameraXOffset =
          camera.width / 2 - screenRatio * angleRelativeToPlayerView,
        numColumns = (width / screenWidth) * resolution,
        firstColumn = Math.floor(
          ((cameraXOffset - width / 2) / screenWidth) * resolution
        );

      sprite.distanceFromPlayer = Math.sqrt(
        Math.pow(distX, 2) + Math.pow(distY, 2)
      );
      sprite.render = {
        width: width,
        height: height,
        angleToPlayer: angleRelativeToPlayerView,
        cameraXOffset: cameraXOffset,
        distanceFromPlayer: sprite.distanceFromPlayer,
        numColumns: numColumns,
        firstColumn: firstColumn,
        top: top
      };

      // temp render red dot at item position
      //camera.ctx.fillStyle = 'red';
      //camera.ctx.fillRect(sprite.render.cameraXOffset, camera.height / 2, 3, 3);

      return sprite;
    })
    // sort sprites in distance order
    .sort(function(a, b) {
      if (a.distanceFromPlayer < b.distanceFromPlayer) {
        return 1;
      }
      if (a.distanceFromPlayer > b.distanceFromPlayer) {
        return -1;
      }
      return 0;
    });

  if (sprites.length > 1) {
    //debugger;
  }

  this.ctx.save();
  for (var column = 0; column < this.resolution; column++) {
    this.drawSpriteColumn(player, map, column, columnProps[column], sprites);
  }
  this.ctx.restore();
};

Camera.prototype.setSpriteDistances = function(objects, player) {
  for (let i = 0; i < objects.length; i++) {
    let obj = objects[i];
    //if(obj) obj.distanceFromPlayer =
  }
};

Camera.prototype.drawColumns = function(player, map, objects) {
  this.ctx.save();
  var allObjects = [];
  for (var column = 0; column < this.resolution; column++) {
    var angle = this.fov * (column / this.resolution - 0.5);
    var ray = map.cast(player, player.direction + angle, this.range);
    var columnProps = this.drawColumn(column, ray, angle, map);

    allObjects.push(columnProps);
  }
  this.ctx.restore();
  this.ctx.save();
  this.drawSprites(player, map, allObjects);
  this.ctx.restore();
};

Camera.prototype.drawWeapon = function(weapon, paces) {
  var bobX = Math.cos(paces * 2) * this.scale * 6;
  var bobY = Math.sin(paces * 4) * this.scale * 6;
  var left = this.width * 0.55 + bobX;
  var top = this.height * 0.6 + bobY;
  this.ctx.drawImage(
    weapon.image,
    left,
    top,
    weapon.width * this.scale,
    weapon.height * this.scale
  );
};

Camera.prototype.drawMiniMap = function(map, player) {
  var ctx = this.ctx,
    mapWidth = this.width * 0.25,
    mapHeight = mapWidth,
    x = this.width - mapWidth - 20,
    y = 20,
    blockWidth = mapWidth / map.size,
    blockHeight = mapHeight / map.size,
    playerX = (player.x / map.size) * mapWidth, // coords on map
    playerY = (player.y / map.size) * mapWidth,
    origFillStyle = ctx.fillStyle,
    wallIndex,
    triangleX = x + playerX,
    triangleY = y + playerY;

  ctx.save();

  ctx.globalAlpha = 0.3;
  ctx.fillRect(x, y, mapWidth, mapHeight);
  ctx.globalAlpha = 0.4;

  ctx.fillStyle = "#ffffff";

  for (var row = 0; row < map.size; row++) {
    for (var col = 0; col < map.size; col++) {
      wallIndex = row * map.size + col;

      if (map.wallGrid[wallIndex]) {
        ctx.fillRect(
          x + blockWidth * col,
          y + blockHeight * row,
          blockWidth,
          blockHeight
        );
      }
    }
  }

  ctx.save();

  for (var i = 0; i < map.objects.length; i++) {
    if (map.objects[i]) {
      ctx.fillStyle = map.objects[i].color || "blue";
      ctx.globalAlpha = 0.8;
      ctx.fillRect(
        x + blockWidth * map.objects[i].x + blockWidth * 0.25,
        y + blockHeight * map.objects[i].y + blockWidth * 0.25,
        blockWidth * 0.5,
        blockHeight * 0.5
      );
    }
  }

  ctx.restore();

  //player triangle
  ctx.globalAlpha = 1;
  ctx.fillStyle = "#FF0000";
  ctx.moveTo(triangleX, triangleY);
  ctx.translate(triangleX, triangleY);

  ctx.rotate(player.direction - Math.PI * 0.5);
  ctx.beginPath();
  ctx.lineTo(-2, -3); // bottom left of triangle
  ctx.lineTo(0, 2); // tip of triangle
  ctx.lineTo(2, -3); // bottom right of triangle
  ctx.fill();

  ctx.restore();
};

Camera.prototype.drawColumn = function(column, ray, angle, map) {
  var ctx = this.ctx,
    wallTexture = map.wallTexture,
    floorTexture = map.floorTexture,
    left = Math.floor(column * this.spacing),
    width = Math.ceil(this.spacing),
    hit = -1,
    objects = [],
    hitDistance;

  while (++hit < ray.length && ray[hit].height <= 0);

  for (var s = ray.length - 1; s >= 0; s--) {
    var step = ray[s];
    var rainDrops = Math.pow(Math.random(), 3) * s;
    var rain = rainDrops > 0 && this.project(0.1, angle, step.distance),
      textureX,
      wall;

    if (s === hit) {
      textureX = Math.floor(wallTexture.width * step.offset);
      wall = this.project(step.height, angle, step.distance);

      ctx.globalAlpha = 1;
      ctx.drawImage(
        wallTexture.image,
        textureX,
        0,
        1,
        wallTexture.height,
        left,
        wall.top,
        width,
        wall.height
      );

      ctx.fillStyle = "#000000";
      ctx.globalAlpha = Math.max(
        (step.distance + step.shading) / this.lightRange - map.light,
        0
      );
      ctx.fillRect(left, wall.top, width, wall.height);
      hitDistance = step.distance;
    } else if (step.object) {
      objects.push({
        object: step.object,
        distance: step.distance,
        offset: step.offset,
        angle: angle
      });
    }

    //ctx.fillStyle = '#ffffff';
    //ctx.globalAlpha = 0.15;
    //while (--rainDrops > 0) ctx.fillRect(left, Math.random() * rain.top, 1, rain.height);
  }
  return {
    objects: objects,
    hit: hitDistance
  };
};

Camera.prototype.project = function(height, angle, distance) {
  var z = distance * Math.cos(angle);
  var wallHeight = (this.height * height) / z;
  var bottom = (this.height / 2) * (1 + 1 / z);
  return {
    top: bottom - wallHeight,
    height: wallHeight
  };
};

Camera.prototype.projectSprite = function(height, distance) {
  var z = distance;
  var wallHeight = (this.height * height) / z;
  var bottom = (this.height / 2) * (1 + 1 / z);
  return {
    top: bottom - wallHeight,
    height: wallHeight
  };
};

Camera.prototype.toggleFullscreen = function() {
  if (this.fullscreen) {
    pointerRelease();
    this.fullscreen = false;
  } else {
    //todo: make this not rely on globals
    lockPointer(display, controls.onMouse.bind(controls, player));
    this.fullscreen = true;
  }
};

function GameLoop() {
  this.frame = this.frame.bind(this);
  this.lastTime = 0;
  this.callback = function() {};
}

GameLoop.prototype.start = function(callback) {
  this.callback = callback;
  requestAnimationFrame(this.frame);
};

GameLoop.prototype.frame = function(time) {
  var seconds = (time - this.lastTime) / 1000;
  this.lastTime = time;
  if (seconds < 0.2) this.callback(seconds);
  requestAnimationFrame(this.frame);
};

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
  objects = new Objects(),
  controls = new Controls(),
  camera = new Camera(display, MOBILE ? 160 : 320, Math.PI * 0.4),
  loop = new GameLoop();

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
  objects.update();
  player.update(controls.states, map, seconds);
  camera.render(player, map, objects);
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
