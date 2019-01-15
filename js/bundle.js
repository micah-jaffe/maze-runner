/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/maze/easy_maze.txt":
/*!***********************************!*\
  !*** ./assets/maze/easy_maze.txt ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "+-+-+-+-+-+\n|   |     |\n+-+ + +-+ +\n|     |   |\n+ +-+-+ +-+\n| |     | |\n+ + +-+-+ +\n| | |     |\n+ + + + --+\n| |   |    \n+-+-+-+-+-+"

/***/ }),

/***/ "./assets/maze/hard_maze.txt":
/*!***********************************!*\
  !*** ./assets/maze/hard_maze.txt ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|   | |   |   |           |   |     |   |\n+ + + + + + + + +-+-+-+-+ +-+ + +-+ +-+ +\n| |     | | |   |         |   | |       |\n+ +-+-+-+ + +-+-+ +-+-+-+-+ +-+ +-+-+-+ +\n|       |   |   | |       |   | |       |\n+-+-+-+ +-+ + + + + +-+-+ + + + + +-+-+-+\n|   |   |   | | | | |     | |   |       |\n+ + +-+-+ +-+ + + + + +-+-+ + +-+-+-+-+ +\n| |     |     | | | | |     | |   |     |\n+ +-+-+ +-+-+-+ + + + + +-+-+ + + + +-+-+\n| |   | |   |   | | | | |     | | | |   |\n+ +-+ + +-+ + +-+ + + + + +-+-+-+ +-+ + +\n| |   |   |   |   | | | |   |   | |   | |\n+ + +-+-+ +-+-+ +-+ + + +-+ + + + + +-+ +\n| | | |   |     |   | | |   | | |   |   |\n+ + + + +-+ +-+-+ +-+ + + +-+ + +-+-+-+ +\n|   | |       |   |   | |     |         |\n+-+-+ +-+-+ + + +-+ +-+ +-+-+-+ +-+-+ +-+\n|     |     |     |     |   |   |   | | |\n+ +-+-+ +-+-+-+-+-+-+-+-+-+ +-+-+ +-+ + +\n|     | |   |     |   |     |     |     |\n+ +-+ + + + +-+-+ + + + +-+ + +-+ + +-+-+\n|   | |   |       | |   | |   |     |   |\n+-+ + + +-+-+ +-+-+ + +-+ +-+ + + +-+ + +\n|   |   |   | |     | |   |   | |   | | |\n+ +-+-+-+-+ +-+ +-+-+-+ +-+ +-+ +-+ + + +\n|         | |   |       |   |   |   | | |\n+-+-+-+-+ + + +-+ +-+-+-+-+-+ +-+ +-+ + +\n| |   |   | |   |         |     | |   | |\n+ + + + +-+ +-+ +-+-+-+-+ +-+-+ + + +-+ +\n|   |   | |     |   |   |     | |   |   |\n+ +-+-+-+ +-+-+-+ + + + +-+-+ + +-+-+ +-+\n|   |       |   | |   |     |   |   | | |\n+-+ + +-+-+ +-+ + +-+-+-+-+ +-+-+-+ + + +\n|   |     |   | | |   | |     |     |   |\n+ +-+-+-+ +-+ + + + + + + + + + + +-+-+ +\n| |   |   |   | | | | |   | | | |     | |\n+ + + + +-+-+ + + + +-+ + + +-+ + +-+-+ +\n|   |   |     |   |     | |     |        \n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+"

/***/ }),

/***/ "./assets/maze/medium_maze.txt":
/*!*************************************!*\
  !*** ./assets/maze/medium_maze.txt ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "+-+-+-+-+-+-+-+-+-+-+\n|   | |   |       | |\n+ + + + + + +-+-+ + +\n| |     |   |   |   |\n+ +-+-+-+-+-+ + +-+-+\n| |   |   |   | |   |\n+ + + +-+ + +-+ +-+ +\n|   |   |   |     | |\n+-+-+-+ + +-+-+-+ + +\n|     | |       | | |\n+ +-+-+ +-+-+-+ + + +\n|   |     |     |   |\n+ +-+ + + +-+ + +-+-+\n| |   | |     | |   |\n+ + +-+ +-+-+-+-+ + +\n|   |   |         | |\n+-+-+ +-+ +-+-+-+ + +\n|   |     |     | | |\n+ +-+ +-+-+ +-+ + +-+\n|             | |    \n+-+-+-+-+-+-+-+-+-+-+"

/***/ }),

/***/ "./js/controls.js":
/*!************************!*\
  !*** ./js/controls.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Controls; });
class Controls {
  constructor(player) {
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
  };

  onKey(val, e) {
    const state = this.codes[e.keyCode];

    if (typeof state === "undefined") return;
    this.states[state] = val;
    e.preventDefault && e.preventDefault();
    e.stopPropagation && e.stopPropagation();
  };

  onMouse(player, vals) {
    const maxSpeed = 1000, // fastest possible mouse speed
      speed = Math.min(vals.x, maxSpeed) / maxSpeed,
      amount = Math.PI * speed;

    if (player.direction > CIRCLE) {
      amount -= CIRCLE;
    } else if (player.direction < 0) {
      amount += CIRCLE;
    }

    player.direction += amount;
  };
};

/***/ }),

/***/ "./js/entry.js":
/*!*********************!*\
  !*** ./js/entry.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _environment_camera__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environment/camera */ "./js/environment/camera.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./js/game.js");



window.addEventListener("resize", function() {
  let fullscreen = camera.fullscreen;
  camera = new _environment_camera__WEBPACK_IMPORTED_MODULE_0__["default"](display, 320, Math.PI * 0.4);
  camera.fullscreen = fullscreen;
});

window.addEventListener('DOMContentLoaded', () => {
  const display = document.getElementById('display');

  const game = new _game__WEBPACK_IMPORTED_MODULE_1__["default"](display);
  game.play();
})


/***/ }),

/***/ "./js/environment/camera.js":
/*!**********************************!*\
  !*** ./js/environment/camera.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Camera; });
/* harmony import */ var _sky__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sky */ "./js/environment/sky.js");
/* harmony import */ var _columns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./columns */ "./js/environment/columns.js");
/* harmony import */ var _weapon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weapon */ "./js/environment/weapon.js");
/* harmony import */ var _minimap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./minimap */ "./js/environment/minimap.js");





class Camera {
  constructor(canvas, resolution, fov) {
    this.ctx = canvas.getContext("2d");
    this.width = canvas.width = window.innerWidth;
    this.height = canvas.height = window.innerHeight;
    this.resolution = resolution;
    this.spacing = this.width / resolution;
    this.fov = fov;
    this.range = 14;
    this.lightRange = 5;
    this.scale = (this.width + this.height) / 1200;

    this.sky = new _sky__WEBPACK_IMPORTED_MODULE_0__["default"]({ 
      ctx: this.ctx, 
      width: this.width, 
      height: this.height, 
      fov: this.fov 
    });

    this.columns = new _columns__WEBPACK_IMPORTED_MODULE_1__["default"]({ 
      ctx: this.ctx,
      height: this.height,
      resolution: this.resolution,
      spacing: this.spacing,
      fov: this.fov, 
      range: this.range,
      lightRange: this.lightRange
    });

    this.weapon = new _weapon__WEBPACK_IMPORTED_MODULE_2__["default"]({
      ctx: this.ctx,
      width: this.width,
      height: this.height,
      scale: this.scale
    });

    this.minimap = new _minimap__WEBPACK_IMPORTED_MODULE_3__["default"]({
      ctx: this.ctx,
      width: this.width,
      height: this.height
    });

    document.addEventListener("keyup", this.onKey.bind(this, false), false);
  };

  onKey(val, e) {
    if (e.keyCode === 70) {
      this.toggleFullscreen();
    }
  };

  render(map, player, ...computerPlayers) {
    this.drawSky(map, player)
    this.drawColumns(map, player);
    this.drawWeapon(player);
    this.drawMiniMap(map, player, ...computerPlayers);
  };

  drawSky(map, player) {
    this.sky.render(player.direction, map.skybox, map.light);
  };

  drawColumns(map, player) {
    this.columns.render(player, map);
  };

  drawWeapon(player) {
    this.weapon.render(player.weapon, player.paces);
  };

  drawMiniMap(map, player, ...computerPlayers) {
    this.minimap.render(map, player, ...computerPlayers)
  };

  toggleFullscreen() {
    if (this.fullscreen) {
      pointerRelease();
      this.fullscreen = false;
    } else {
      lockPointer(display, controls.onMouse.bind(controls, player));
      this.fullscreen = true;
    }
  };

};


/***/ }),

/***/ "./js/environment/columns.js":
/*!***********************************!*\
  !*** ./js/environment/columns.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Columns; });
/* harmony import */ var _environment_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environment_object */ "./js/environment/environment_object.js");


class Columns extends _environment_object__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(options) {
    super(options);
  };

  render(player, map) {
    this.ctx.save();

    for (let column = 0; column < this.resolution; column++) {
      let angle = this.fov * (column / this.resolution - 0.5);
      let ray = map.cast(player, player.direction + angle, this.range);
      this.drawColumn(column, ray, angle, map);
    }

    this.ctx.restore();
    this.ctx.save();
    this.ctx.restore();
  };

  drawColumn(column, ray, angle, map) {
    let wallTexture = map.wallTexture,
      floorTexture = map.floorTexture,
      left = Math.floor(column * this.spacing),
      width = Math.ceil(this.spacing),
      hit = -1;

    while (++hit < ray.length && ray[hit].height <= 0);

    for (let s = ray.length - 1; s >= 0; s--) {
      const step = ray[s];
      let textureX,
        wall,
        rainDrops,
        rain;

      if (map.weather) {
        rainDrops = Math.pow(Math.random(), 3) * s;
        rain = rainDrops > 0 && this.project(0.1, angle, step.distance);
      }

      if (s === hit) {
        textureX = Math.floor(wallTexture.width * step.offset);
        wall = this.project(step.height, angle, step.distance);

        this.ctx.globalAlpha = 1;
        this.ctx.drawImage(
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

        this.ctx.fillStyle = "#000000";
        this.ctx.globalAlpha = Math.max(
          (step.distance + step.shading) / this.lightRange - map.light,
          0
        );
        this.ctx.fillRect(left, wall.top, width, wall.height);
      }


      this.ctx.fillStyle = '#ffffff';
      this.ctx.globalAlpha = 0.15;

      if (map.weather) {
        while (--rainDrops > 0) this.ctx.fillRect(left, Math.random() * rain.top, 1, rain.height);
      }  
    }
  };

  project(height, angle, distance) {
    const z = distance * Math.cos(angle);
    const wallHeight = (this.height * height) / z;
    const bottom = (this.height / 2) * (1 + 1 / z);

    return {
      top: bottom - wallHeight,
      height: wallHeight
    };
  };
};

/***/ }),

/***/ "./js/environment/environment_object.js":
/*!**********************************************!*\
  !*** ./js/environment/environment_object.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EnvironmentObject; });
class EnvironmentObject {
  constructor(options) {
    this.ctx = options.ctx;
    this.width = options.width;
    this.height = options.height;
    this.resolution = options.resolution;
    this.spacing = options.spacing;
    this.fov = options.fov;
    this.range = options.range;
    this.lightRange = options.lightRange;
    this.scale = options.scale;
  };

  render() {
    throw "Rendering error";
  };
};

/***/ }),

/***/ "./js/environment/minimap.js":
/*!***********************************!*\
  !*** ./js/environment/minimap.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MiniMap; });
/* harmony import */ var _environment_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environment_object */ "./js/environment/environment_object.js");


class MiniMap extends _environment_object__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(options) {
    super(options);
    this.width = 0.3 * options.width;
    this.height = this.width;
    this.x = 20;
    this.y = options.height - this.height - 20;
  };

  render(map, humanPlayer, ...computerPlayers) {
    this.drawMap(map);
    this.drawExit(map);
    computerPlayers.forEach(
      (player, markerIdx) => this.drawPlayer('computer', player, map.size, markerIdx + 1)
    );
    this.drawPlayer('human', humanPlayer, map.size);
  };

  drawMap(map) {
    let blockWidth = this.width / map.size,
      blockHeight = this.height / map.size,
      idx;

    this.ctx.save();

    this.ctx.globalAlpha = 0.3;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.ctx.globalAlpha = 0.4;

    this.ctx.fillStyle = "rgba(255, 255, 255, 1)";

    for (let row = 0; row < map.size; row++) {
      for (let col = 0; col < map.size; col++) {
        idx = row * map.size + col;

        if (map.discovered[idx] && map.wallGrid[idx]) {
          this.ctx.fillRect(
            this.x + blockWidth * col,
            this.y + blockHeight * row,
            blockWidth,
            blockHeight
          );
        }
      }
    }

    this.ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
    this.ctx.save();
    this.ctx.restore();    
  };

  drawExit(map) {
    const color = "#00FF00",
      exitX = this.x + ((map.size - 0.5) / map.size) * this.width,
      exitY = this.y + ((map.size - 1.5) / map.size) * this.width,
      r = 0.4 * this.width / map.size,
      m = 0.3;

      this.ctx.moveTo(exitX, exitY);
      this.ctx.translate(exitX, exitY);
      this.ctx.globalAlpha = 1;
      this.ctx.fillStyle = color;

      this.ctx.beginPath();
    
      this.ctx.moveTo(0, 0 - r);
      for (let i = 0; i < 5; i++) {
        this.ctx.rotate(Math.PI / 5);
        this.ctx.lineTo(0, 0 - (r * m));
        this.ctx.rotate(Math.PI / 5);
        this.ctx.lineTo(0, 0 - r);
      }

      this.ctx.fill();
      this.ctx.restore();
      this.ctx.save();
  };

  drawPlayer(type, player, scale, markerIdx = 0) {
    const colors = ["#FF0000", "#048BA8", "#EF798A", "#F18F01"],
      markerSize = 1.5 * this.width / scale,
      playerX = (player.x / scale) * this.width,
      playerY = (player.y / scale) * this.width,
      markerX = this.x + playerX,
      markerY = this.y + playerY;

    this.ctx.moveTo(markerX, markerY);
    this.ctx.translate(markerX, markerY);
    this.ctx.globalAlpha = 1;
    this.ctx.fillStyle = colors[markerIdx];

    if (type === 'human') {
      this.ctx.rotate(player.direction - Math.PI * 0.5);
    }

    this.ctx.beginPath();

    switch (type) {
      case 'human':
        // this.ctx.lineTo(0, markerSize / 10);
        this.ctx.lineTo(-markerSize / 6, -markerSize / 10);
        this.ctx.lineTo(0, markerSize / 3);
        this.ctx.lineTo(markerSize / 6, -markerSize / 10);

        this.ctx.fill();

        this.ctx.fillStyle = "rgba(255, 255, 255, 0.2)";

        this.ctx.arc(0, 0, markerSize, 0, 2 * Math.PI)
        this.ctx.fill();
        break
      case 'computer':
        this.ctx.arc(0, 0, markerSize / 5, 0, 2 * Math.PI)
        break
    }

    this.ctx.fill();
    this.ctx.restore();
    this.ctx.save();
  };

 
};

/***/ }),

/***/ "./js/environment/sky.js":
/*!*******************************!*\
  !*** ./js/environment/sky.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sky; });
/* harmony import */ var _environment_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environment_object */ "./js/environment/environment_object.js");


class Sky extends _environment_object__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(options) {
    super(options);
  };

  render(direction, sky, ambient) {
    const width = this.width * (2 * Math.PI / this.fov);
    const left = (-width * direction) / (2 * Math.PI);

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
};

/***/ }),

/***/ "./js/environment/weapon.js":
/*!**********************************!*\
  !*** ./js/environment/weapon.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Weapon; });
/* harmony import */ var _environment_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environment_object */ "./js/environment/environment_object.js");


class Weapon extends _environment_object__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(options) {
    super(options);
  };

  render(weapon, paces) {
    const bobX = Math.cos(paces * 2) * this.scale * 6;
    const bobY = Math.sin(paces * 4) * this.scale * 6;
    const left = this.width * 0.55 + bobX;
    const top = this.height * 0.6 + bobY;

    this.ctx.drawImage(
      weapon.image,
      left,
      top,
      weapon.width * this.scale,
      weapon.height * this.scale
    );
  };
};


/***/ }),

/***/ "./js/game.js":
/*!********************!*\
  !*** ./js/game.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map */ "./js/map.js");
/* harmony import */ var _player_human_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player/human_player */ "./js/player/human_player.js");
/* harmony import */ var _player_dfs_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player/dfs_player */ "./js/player/dfs_player.js");
/* harmony import */ var _player_bfs_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player/bfs_player */ "./js/player/bfs_player.js");
/* harmony import */ var _player_a_star_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./player/a_star_player */ "./js/player/a_star_player.js");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controls */ "./js/controls.js");
/* harmony import */ var _environment_camera__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./environment/camera */ "./js/environment/camera.js");
/* harmony import */ var _assets_maze_easy_maze_txt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/maze/easy_maze.txt */ "./assets/maze/easy_maze.txt");
/* harmony import */ var _assets_maze_easy_maze_txt__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_maze_easy_maze_txt__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_maze_medium_maze_txt__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/maze/medium_maze.txt */ "./assets/maze/medium_maze.txt");
/* harmony import */ var _assets_maze_medium_maze_txt__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_maze_medium_maze_txt__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_maze_hard_maze_txt__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/maze/hard_maze.txt */ "./assets/maze/hard_maze.txt");
/* harmony import */ var _assets_maze_hard_maze_txt__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_maze_hard_maze_txt__WEBPACK_IMPORTED_MODULE_9__);











class Game {
  constructor(display) {
    this.frame = this.frame.bind(this);
    this.lastTime = 0;
    this.callback = function () {};
    this.map = _map__WEBPACK_IMPORTED_MODULE_0__["default"].createFromMaze(_assets_maze_easy_maze_txt__WEBPACK_IMPORTED_MODULE_7___default.a);
    this.player = new _player_human_player__WEBPACK_IMPORTED_MODULE_1__["default"](1.5, 1.5, 0);
    this.computerPlayers = [
      new _player_dfs_player__WEBPACK_IMPORTED_MODULE_2__["default"](1.4, 1.5, this.map),
      new _player_bfs_player__WEBPACK_IMPORTED_MODULE_3__["default"](1.6, 1.5, this.map),
      new _player_a_star_player__WEBPACK_IMPORTED_MODULE_4__["default"](1.5, 1.5, this.map)
    ];
    this.controls = new _controls__WEBPACK_IMPORTED_MODULE_5__["default"]();
    this.camera = new _environment_camera__WEBPACK_IMPORTED_MODULE_6__["default"](display, 320, Math.PI * 0.4);
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
      this.camera = new _environment_camera__WEBPACK_IMPORTED_MODULE_6__["default"](display, 320, Math.PI * 0.4);
      this.camera.fullscreen = fullscreen;
    });
  };

  listenForDifficulty() {
    const setDifficulty = (e) => {
      switch (e.target.innerHTML) {
        case 'Easy':
        this.map = _map__WEBPACK_IMPORTED_MODULE_0__["default"].createFromMaze(_assets_maze_easy_maze_txt__WEBPACK_IMPORTED_MODULE_7___default.a);
        break;
      case 'Medium': 
        this.map = _map__WEBPACK_IMPORTED_MODULE_0__["default"].createFromMaze(_assets_maze_medium_maze_txt__WEBPACK_IMPORTED_MODULE_8___default.a);
        break;
      case 'Hard':
        this.map = _map__WEBPACK_IMPORTED_MODULE_0__["default"].createFromMaze(_assets_maze_hard_maze_txt__WEBPACK_IMPORTED_MODULE_9___default.a);
        break;
      }

      this.resetPlayers();
      this.closeModals();
    };

    this.addListenerToCollection('difficulty-btn', setDifficulty);
  };

  listenForSidebarClicks() {
    this.listenForSettingsChange();
    this.listenForMute();

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
      console.log(e.currentTarget)
      this.map.receiveNewTheme(e.currentTarget.id);
      this.closeModals();
    };

    const changeWeapon = (e) => {
      this.player.receiveNewWeapon(e.currentTarget.id);
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

  listenForMute() {
    const toggleAudio = (e) => {
      if (audio.muted) {
        audio.muted = false;
        icon.classList.remove("fa-volume-up");
        icon.classList.add('fa-volume-mute')
      } else {
        audio.muted = true;
        icon.classList.remove('fa-volume-mute');
        icon.classList.add('fa-volume-up');
      }
    };

    const audio = document.getElementById('audio');
    const icon = document.getElementById('volume-icon');
    icon.addEventListener("click", toggleAudio);
  };

  resetPlayers() {
    this.player = new _player_human_player__WEBPACK_IMPORTED_MODULE_1__["default"](1.5, 1.5, 0);
    this.computerPlayers = [
      new _player_dfs_player__WEBPACK_IMPORTED_MODULE_2__["default"](1.4, 1.5, this.map), 
      new _player_bfs_player__WEBPACK_IMPORTED_MODULE_3__["default"](1.6, 1.5, this.map), 
      new _player_a_star_player__WEBPACK_IMPORTED_MODULE_4__["default"](1.5, 1.5, this.map)
    ];
  };

  addListenerToCollection(classname, callback) {
    const collection = document.getElementsByClassName(classname);
    
    Array.from(collection).forEach(
      el => el.addEventListener("click", callback)
    );
  };
};

/***/ }),

/***/ "./js/map.js":
/*!*******************!*\
  !*** ./js/map.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Map; });
/* harmony import */ var _util_bitmap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/bitmap */ "./js/util/bitmap.js");


class Map {
  static createFromMaze(maze) {
    const wallGrid = maze
      .split('')
      .filter(char => ['+','-', '|', ' '].includes(char))
      .map(char => char === ' ' ? 0 : 1);

    return new Map(Uint8Array.from(wallGrid));
  };

  constructor(wallGrid) {
    this.wallGrid = wallGrid;
    this.size = Math.sqrt(wallGrid.length);
    this.skybox = new _util_bitmap__WEBPACK_IMPORTED_MODULE_0__["default"]("assets/img/deathvalley_panorama.jpg", 4000, 1290);
    this.wallTexture = new _util_bitmap__WEBPACK_IMPORTED_MODULE_0__["default"]("assets/img/stone_wall.jpg", 1024, 1024);
    this.weather = true;
    this.light = 0;
    this.discovered = new Array(wallGrid.length).fill(false);
  };

  index(x, y) {
    x = Math.floor(x);
    y = Math.floor(y);
    if (x > this.size || y > this.size) return null;
    return y * this.size + x;
  };

  get(x, y) {
    x = Math.floor(x);
    y = Math.floor(y);
    if (x < 0 || x > this.size - 1 || y < 0 || y > this.size - 1) return -1;
    return this.wallGrid[this.index(x, y)];
  };

  discover(x, y) {
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (this.get(x + i, y + j) !== -1) {
          this.discovered[this.index(x + i, y + j)] = true;
        }
      }
    }
  };

  receiveNewTheme(theme) {
    switch (theme) {
      case "ancient-ruins":
        this.skybox = new _util_bitmap__WEBPACK_IMPORTED_MODULE_0__["default"]("assets/img/deathvalley_panorama.jpg", 4000, 1290);
        this.wallTexture = new _util_bitmap__WEBPACK_IMPORTED_MODULE_0__["default"]("assets/img/stone_wall.jpg", 1024, 1024);
        this.weather = true;
        this.setAudio("ominous.mp3");
        break;
      case "underwater":
        this.skybox = new _util_bitmap__WEBPACK_IMPORTED_MODULE_0__["default"]("assets/img/underwater.jpg", 4000, 1290);
        this.wallTexture = new _util_bitmap__WEBPACK_IMPORTED_MODULE_0__["default"]("assets/img/blue_wall.jpg", 1024, 1024);
        this.weather = false;
        this.setAudio("ominous.mp3");
        break;
      case "space":
        this.skybox = new _util_bitmap__WEBPACK_IMPORTED_MODULE_0__["default"]("assets/img/space.jpg", 4000, 1290);
        this.wallTexture = new _util_bitmap__WEBPACK_IMPORTED_MODULE_0__["default"]("assets/img/moon_wall.jpg", 1024, 1024);
        this.weather = false;
        this.setAudio("space.mp3");
        break;
      case "mario":
        this.skybox = new _util_bitmap__WEBPACK_IMPORTED_MODULE_0__["default"]("assets/img/mario.jpg", 4000, 1290);
        this.wallTexture = new _util_bitmap__WEBPACK_IMPORTED_MODULE_0__["default"]("assets/img/brick_wall.jpg", 1024, 1024);
        this.weather = false;
        this.setAudio("mario.mp3");
        break;
      case "aa":
        this.skybox = new _util_bitmap__WEBPACK_IMPORTED_MODULE_0__["default"]("assets/img/aa_panorama.jpg", 4000, 1290);
        this.wallTexture = new _util_bitmap__WEBPACK_IMPORTED_MODULE_0__["default"]("assets/img/white_wall.jpg", 1024, 1024);
        this.weather = false;
        this.setAudio("ominous.mp3");
        break;
    }
  };

  cast(point, angle, range) {
    let self = this,
      sin = Math.sin(angle),
      cos = Math.cos(angle),
      noWall = {
        length2: Infinity
      };

    return ray({
      x: point.x,
      y: point.y,
      height: 0,
      distance: 0
    });

    function ray(origin) {
      const stepX = step(sin, cos, origin.x, origin.y);
      const stepY = step(cos, sin, origin.y, origin.x, true);
      const nextStep =
        stepX.length2 < stepY.length2
          ? inspect(stepX, 1, 0, origin.distance, stepX.y)
          : inspect(stepY, 0, 1, origin.distance, stepY.x);

      if (nextStep.distance > range) return [origin];
      return [origin].concat(ray(nextStep));
    }

    function step(rise, run, x, y, inverted) {
      if (run === 0) return noWall;
      const dx = run > 0 ? Math.floor(x + 1) - x : Math.ceil(x - 1) - x;
      const dy = dx * (rise / run);
      return {
        x: inverted ? y + dy : x + dx,
        y: inverted ? x + dx : y + dy,
        length2: dx * dx + dy * dy
      };
    }

    function inspect(step, shiftX, shiftY, distance, offset) {
      const dx = cos < 0 ? shiftX : 0;
      const dy = sin < 0 ? shiftY : 0;
      step.height = self.get(step.x - dx, step.y - dy);
      step.distance = distance + Math.sqrt(step.length2);
      if (shiftX) step.shading = cos < 0 ? 2 : 0;
      else step.shading = sin < 0 ? 2 : 1;
      step.offset = offset - Math.floor(offset);
      return step;
    }
  };

  update(seconds) {
    if (this.weather) {
      if (this.light > 0) this.light = Math.max(this.light - 10 * seconds, 0);
      else if (Math.random() * 5 < seconds) this.light = 2;
    }
  };

  setAudio(audio) {
    document.getElementById("audio").src = "./assets/audio/" + audio;
  };
};

/***/ }),

/***/ "./js/player/a_star_player.js":
/*!************************************!*\
  !*** ./js/player/a_star_player.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AStarPlayer; });
/* harmony import */ var _computer_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./computer_player */ "./js/player/computer_player.js");
/* harmony import */ var _util_priority_queue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/priority_queue */ "./js/util/priority_queue.js");



class AStarPlayer extends _computer_player__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(x, y, map) {
    super(x, y, map);

    const finish = [this.map.size - 1, this.map.size - 2];

    const manhattanDistance = (pos) =>
      Math.abs(pos[0] - finish[0]) + Math.abs(pos[1] - finish[1])
    
    const comparator = (pos1, pos2) =>
      manhattanDistance(pos1) < manhattanDistance(pos2)

    this.pq = new _util_priority_queue__WEBPACK_IMPORTED_MODULE_1__["default"](comparator);
    this.pq.push([this.x, this.y]);
    this.pq.push([this.x + 1, this.y]);
  };

  algorithmStep() {
    if (this.pq.isEmpty()) return [this.x, this.y];

    const nextMove = this.pq.pop();
    this.visit(nextMove);

    const unvisitedMoves = this.getUnvisitedMoves(nextMove);
    unvisitedMoves.forEach(move => this.pq.push(move));

    return nextMove;
  };
};

/***/ }),

/***/ "./js/player/bfs_player.js":
/*!*********************************!*\
  !*** ./js/player/bfs_player.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BFSPlayer; });
/* harmony import */ var _computer_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./computer_player */ "./js/player/computer_player.js");


class BFSPlayer extends _computer_player__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(x, y, map) {
    super(x, y, map);
    this.q = [];
    this.q.push([this.x, this.y]);
    this.q.push([this.x + 1, this.y]);
  };

  algorithmStep() {
    if (this.q.length === 0) return [this.x, this.y];

    const nextMove = this.q.shift();
    this.visit(nextMove);

    const unvisitedMoves = this.getUnvisitedMoves(nextMove);
    unvisitedMoves.forEach(
      move => this.q.push(move)
    );

    return nextMove;
  };
};

/***/ }),

/***/ "./js/player/computer_player.js":
/*!**************************************!*\
  !*** ./js/player/computer_player.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ComputerPlayer; });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./js/player/player.js");


class ComputerPlayer extends _player__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(x, y, map) {
    super(x, y);
    this.map = map;
    this.visited = new Array(map.size * map.size).fill(false);
    this.from = new Array(map.size * map.size).fill(null);
    this.steps = 0;

    this.visit([this.x, this.y]);
  };

  move() {
    [this.x, this.y] = this.algorithmStep();
    this.steps++;
  };

  update(prevX, prevY, nextX, nextY) {
    if (
      Math.floor(this.x) >= this.map.size - 1 &&
      Math.floor(this.y) >= this.map.size - 2
    ) {
      return;
    }

    if (
      Math.floor(prevX) !== Math.floor(nextX) ||
      Math.floor(prevY) !== Math.floor(nextY)
    ) {
      this.move();
    }
  };

  algorithmStep() {
    throw "No algorithm specified."
  };

  getValidMoves(fromPos = [this.x, this.y]) {
    const possibleMoves = [
      [fromPos[0] + 1, fromPos[1]],
      [fromPos[0], fromPos[1] + 1],
      [fromPos[0] - 1, fromPos[1]],
      [fromPos[0], fromPos[1] - 1]
    ];

    return possibleMoves.filter(
      move => this.map.get(move[0], move[1]) === 0
    );
  };

  getUnvisitedMoves(fromPos = [this.x, this.y]) {
    return this.getValidMoves(fromPos).filter(
      move => !this.visited[this.index(move)]
    );
  };

  visit(pos) {
    this.visited[this.index(pos)] = true;
    this.from[this.index(pos)] = [this.x, this.y];
  };

  index(pos) {
    return pos[1] * this.map.size + pos[0];
  };
};

/***/ }),

/***/ "./js/player/dfs_player.js":
/*!*********************************!*\
  !*** ./js/player/dfs_player.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DFSPlayer; });
/* harmony import */ var _computer_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./computer_player */ "./js/player/computer_player.js");


class DFSPlayer extends _computer_player__WEBPACK_IMPORTED_MODULE_0__["default"] {  
  algorithmStep() {
    const unvisitedMoves = this.getUnvisitedMoves();

    if (unvisitedMoves.length > 0) {
      const randomMove = unvisitedMoves[Math.floor(Math.random() * unvisitedMoves.length)];
      this.visit(randomMove);
      return randomMove;
    } else {
      return this.backtrack();
    }
  };

  backtrack() {
    return this.from[(this.index([this.x, this.y]))];
  };
};

/***/ }),

/***/ "./js/player/human_player.js":
/*!***********************************!*\
  !*** ./js/player/human_player.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HumanPlayer; });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./js/player/player.js");
/* harmony import */ var _util_bitmap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/bitmap */ "./js/util/bitmap.js");



class HumanPlayer extends _player__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(x, y, direction) {
    super(x, y);
    this.direction = direction;
    this.weapon = new _util_bitmap__WEBPACK_IMPORTED_MODULE_1__["default"]("assets/img/knife_hand.png", 320, 320);
    this.paces = 0;
    this.prevX = this.x;
    this.prevY = this.y;
    this.steps = 0;
  };

  rotate(angle) {
    this.direction = (this.direction + angle + 2 * Math.PI) % (2 * Math.PI);
  };

  move(distance, map) {
    this.prevX = this.x;
    this.prevY = this.y;    
    const dx = Math.cos(this.direction) * distance;
    const dy = Math.sin(this.direction) * distance;

    if (map.get(this.x + dx, this.y) <= 0) this.x += dx;
    if (map.get(this.x, this.y + dy) <= 0) this.y += dy;

    this.paces += distance;
    this.incrementSteps(map);
    this.discover(map);
  };

  update(controls, map, seconds) {
    if (controls.left) this.rotate(-Math.PI * seconds);
    if (controls.right) this.rotate(Math.PI * seconds);
    if (controls.forward) this.move(3 * seconds, map);
    if (controls.backward) this.move(-3 * seconds, map);
  };

  discover(map) {
    map.discover(this.x, this.y);
  };

  incrementSteps(map) {
    if (
      (
        Math.floor(this.x) !== Math.floor(this.prevX) ||
        Math.floor(this.y) !== Math.floor(this.prevY)
      ) &&
        map.index(Math.ceil(this.x), Math.ceil(this.y))
    ) {
      this.steps++;
    }
  };

  receiveNewWeapon(weapon) {
    switch (weapon) {
      case 'knife':
        this.weapon = new _util_bitmap__WEBPACK_IMPORTED_MODULE_1__["default"]("assets/img/knife_hand.png", 320, 320);
        break;
      case 'sniper':
        this.weapon = new _util_bitmap__WEBPACK_IMPORTED_MODULE_1__["default"]("assets/img/sniper.png", 320, 320);
        break;
      case 'raygun':
        this.weapon = new _util_bitmap__WEBPACK_IMPORTED_MODULE_1__["default"]("assets/img/ray_gun.png", 320, 320);
        break;
      case 'ctci':
        this.weapon = new _util_bitmap__WEBPACK_IMPORTED_MODULE_1__["default"]("assets/img/ctci.png", 400, 320);
        break;
    }
  };
};


/***/ }),

/***/ "./js/player/player.js":
/*!*****************************!*\
  !*** ./js/player/player.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });

class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  };

  move() {
    throw "Unable to move."
  };

  update() {
    throw "Unable to update."
  };
};

/***/ }),

/***/ "./js/util/bitmap.js":
/*!***************************!*\
  !*** ./js/util/bitmap.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Bitmap; });
class Bitmap {
  constructor(src, width, height) {
    this.image = new Image();
    this.image.src = src;
    this.width = width;
    this.height = height;
  };
};


/***/ }),

/***/ "./js/util/priority_queue.js":
/*!***********************************!*\
  !*** ./js/util/priority_queue.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PriorityQueue; });
const top = 0;
const parent = i => ((i + 1) >>> 1) - 1;
const left = i => (i << 1) + 1;
const right = i => (i + 1) << 1;

class PriorityQueue {
  constructor(comparator = (a, b) => a > b) {
    this._heap = [];
    this._comparator = comparator;
  };

  size() {
    return this._heap.length;
  };

  isEmpty() {
    return this.size() == 0;
  };

  peek() {
    return this._heap[top];
  };

  push(...values) {
    values.forEach(value => {
      this._heap.push(value);
      this._siftUp();
    });
    return this.size();
  };

  pop() {
    const poppedValue = this.peek();
    const bottom = this.size() - 1;

    if (bottom > top) {
      this._swap(top, bottom);
    }

    this._heap.pop();
    this._siftDown();
    return poppedValue;
  };

  replace(value) {
    const replacedValue = this.peek();
    this._heap[top] = value;
    this._siftDown();
    return replacedValue;
  };

  _greater(i, j) {
    return this._comparator(this._heap[i], this._heap[j]);
  };

  _swap(i, j) {
    [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
  };

  _siftUp() {
    let node = this.size() - 1;
    while (node > top && this._greater(node, parent(node))) {
      this._swap(node, parent(node));
      node = parent(node);
    }
  };

  _siftDown() {
    let node = top;
    while (
      (left(node) < this.size() && this._greater(left(node), node)) ||
      (right(node) < this.size() && this._greater(right(node), node))
    ) {
      let maxChild =
        right(node) < this.size() && this._greater(right(node), left(node))
          ? right(node)
          : left(node);
      this._swap(node, maxChild);
      node = maxChild;
    }
  };
};


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map