import Bitmap from './bitmap';

export default class Player {
  constructor(x, y, direction) {
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.maxStamina = 10;
    this.stamina = this.maxStamina;
    this.inventory = [
      // new Bitmap('assets/img/goo_hand.png', 320, 332),
      new Bitmap("assets/img/knife_hand.png", 319, 320)
    ];
    this.weapon = this.inventory[0];

    this.paces = 0;
  };

  rotate(angle) {
    this.direction = (this.direction + angle + 2 * Math.PI) % (2 * Math.PI);
  };

  walk(distance, map) {
    const dx = Math.cos(this.direction) * distance;
    const dy = Math.sin(this.direction) * distance;
    if (map.get(this.x + dx, this.y) <= 0) this.x += dx;
    if (map.get(this.x, this.y + dy) <= 0) this.y += dy;
    this.paces += distance;
  };

  update(controls, map, seconds) {
    if (controls.left) this.rotate(-Math.PI * seconds);
    if (controls.right) this.rotate(Math.PI * seconds);
    if (controls.forward) this.walk(3 * seconds, map);
    if (controls.backward) this.walk(-3 * seconds, map);
  };

  cycleWeapons() {
    this.weapon = this.inventory[this.inventory.indexOf(this.weapon) + 1] || this.inventory[0];
  };
};

// og version

// function Player(x, y, direction) {
//   this.x = x;
//   this.y = y;
//   this.direction = direction;
//   this.weapon = new Bitmap('assets/knife_hand.png', 319, 320);
//   this.paces = 0;
// };
// Player.prototype.rotate = function (angle) {
//   this.direction = (this.direction + angle + CIRCLE) % (CIRCLE);
// };
// Player.prototype.walk = function (distance, map) {
//   var dx = Math.cos(this.direction) * distance;
//   var dy = Math.sin(this.direction) * distance;
//   if (map.get(this.x + dx, this.y) <= 0) this.x += dx;
//   if (map.get(this.x, this.y + dy) <= 0) this.y += dy;
//   this.paces += distance;
// };
// Player.prototype.update = function (controls, map, seconds) {
//   if (controls.left) this.rotate(-Math.PI * seconds);
//   if (controls.right) this.rotate(Math.PI * seconds);
//   if (controls.forward) this.walk(3 * seconds, map);
//   if (controls.backward) this.walk(-3 * seconds, map);
// };

// moustache version

// function Player(x, y, direction) {
// this.x = x;
// this.y = y;
// this.direction = direction;
// this.maxStamina = 10;
// this.stamina = this.maxStamina;
// this.inventory = [
//   // new Bitmap('img/goo_hand.png', 320, 332),
//   new Bitmap('img/knife_hand.png', 319, 320)
// ];
// this.weapon = this.inventory[0];

// this.paces = 0;
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