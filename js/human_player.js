import Player from './player';
import Bitmap from "./bitmap";

export default class HumanPlayer extends Player {
  constructor(x, y, direction) {
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.inventory = [
      // new Bitmap('assets/img/goo_hand.png', 320, 332),
      new Bitmap("assets/img/knife_hand.png", 319, 320)
    ];
    this.weapon = this.inventory[0];
    this.paces = 0;
  }

  rotate(angle) {
    this.direction = (this.direction + angle + 2 * Math.PI) % (2 * Math.PI);
  }

  move(distance, map) {
    const dx = Math.cos(this.direction) * distance;
    const dy = Math.sin(this.direction) * distance;
    if (map.get(this.x + dx, this.y) <= 0) this.x += dx;
    if (map.get(this.x, this.y + dy) <= 0) this.y += dy;
    this.paces += distance;
  }

  update(controls, map, seconds) {
    if (controls.left) this.rotate(-Math.PI * seconds);
    if (controls.right) this.rotate(Math.PI * seconds);
    if (controls.forward) this.move(3 * seconds, map);
    if (controls.backward) this.move(-3 * seconds, map);
  }

  cycleWeapons() {
    this.weapon =
      this.inventory[this.inventory.indexOf(this.weapon) + 1] ||
      this.inventory[0];
  }
}
