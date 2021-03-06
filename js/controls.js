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