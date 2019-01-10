export default class Controls {
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

    document.addEventListener("keydown", function (e) {
      if (player && e.keyCode === 73) {
        player.cycleWeapons();
      }
    });
  };

  onKey(val, e) {
    const state = this.codes[e.keyCode];

    this.states.running = e.shiftKey;

    if (typeof state === "undefined") return;
    this.states[state] = val;
    //this.states.crouching = e.ctrlKey;
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

// function Controls() {
//   this.codes = {
//     37: "left", // left arrow
//     39: "right", // right arrow
//     38: "forward", // up arrow
//     40: "backward", // down arrow
//     65: "left", // a
//     68: "right", // d
//     87: "forward", //w
//     83: "backward" // s
//   };
//   this.states = {
//     left: false,
//     right: false,
//     forward: false,
//     backward: false,
//     running: false
//   };
//   document.addEventListener("keydown", this.onKey.bind(this, true), false);
//   document.addEventListener("keyup", this.onKey.bind(this, false), false);

//   document.addEventListener("keydown", function (e) {
//     if (player && e.keyCode === 73) {
//       player.cycleWeapons();
//     }
//   });
//   //document.addEventListener('touchstart', this.onTouch.bind(this), false);
//   //document.addEventListener('touchmove', this.onTouch.bind(this), false);
//   //document.addEventListener('touchend', this.onTouchEnd.bind(this), false);
// }

// Controls.prototype.onKey = function (val, e) {
//   var state = this.codes[e.keyCode];

//   this.states.running = e.shiftKey;

//   if (typeof state === "undefined") return;
//   this.states[state] = val;
//   //this.states.crouching = e.ctrlKey;
//   e.preventDefault && e.preventDefault();
//   e.stopPropagation && e.stopPropagation();
// };

// Controls.prototype.onMouse = function (player, vals) {
//   var maxSpeed = 1000, // fastest possible mouse speed
//     speed = Math.min(vals.x, maxSpeed) / maxSpeed,
//     amount = Math.PI * speed;

//   if (player.direction > CIRCLE) {
//     amount -= CIRCLE;
//   } else if (player.direction < 0) {
//     amount += CIRCLE;
//   }

//   player.direction += amount;
// };