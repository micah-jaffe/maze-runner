import Player from './player';
import Bitmap from "../util/bitmap";

export default class HumanPlayer extends Player {
  constructor(x, y, direction) {
    super(x, y);
    this.direction = direction;
    this.inventory = [
      // new Bitmap('assets/img/goo_hand.png', 320, 332),
      new Bitmap("assets/img/knife_hand.png", 319, 320)
      // new Bitmap("assets/img/ctci.png", 320, 220)
    ];
    this.weapon = this.inventory[0];
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
        map.index(this.x, this.y)
    ) {
      this.steps++;
    }
  };

  cycleWeapons() {
    this.weapon =
      this.inventory[this.inventory.indexOf(this.weapon) + 1] ||
      this.inventory[0];
  };
}
