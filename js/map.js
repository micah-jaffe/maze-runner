import Bitmap from './util/bitmap';

export default class Map {
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
    this.skybox = new Bitmap("assets/img/deathvalley_panorama.jpg", 4000, 1290);
    this.wallTexture = new Bitmap("assets/img/stone_wall.jpg", 1024, 1024);
    this.light = 0;
    this.objects = [];
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
        this.skybox = new Bitmap("assets/img/deathvalley_panorama.jpg", 4000, 1290);
        this.wallTexture = new Bitmap("assets/img/stone_wall.jpg", 1024, 1024);
        break;
      case "underwater":
        this.skybox = new Bitmap("assets/img/underwater.jpg", 4000, 1290);
        this.wallTexture = new Bitmap("assets/img/blue_wall.jpg", 1024, 1024);
        break;
      case "space":
        this.skybox = new Bitmap("assets/img/space.jpg", 4000, 1290);
        this.wallTexture = new Bitmap("assets/img/moon_wall.jpg", 1024, 1024);
        break;
      case "mario":
        this.skybox = new Bitmap("assets/img/mario.jpg", 4000, 1290);
        this.wallTexture = new Bitmap("assets/img/brick_wall.jpg", 1024, 1024);
        break;
      case "aa":
        this.skybox = new Bitmap("assets/img/aa_panorama.jpg", 4000, 1290);
        this.wallTexture = new Bitmap("assets/img/white_wall.jpg", 1024, 1024);
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
      // step.object = self.getObject(step.x - dx, step.y - dy);
      if (shiftX) step.shading = cos < 0 ? 2 : 0;
      else step.shading = sin < 0 ? 2 : 1;
      step.offset = offset - Math.floor(offset);
      return step;
    }
  };

  update(seconds) {
    if (this.light > 0) this.light = Math.max(this.light - 10 * seconds, 0);
    else if (Math.random() * 5 < seconds) this.light = 2;
  };
};