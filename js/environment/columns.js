import EnvironmentObject from './environment_object';

export default class Columns extends EnvironmentObject {
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
      // objects = [],
      // hitDistance;

    while (++hit < ray.length && ray[hit].height <= 0);

    for (let s = ray.length - 1; s >= 0; s--) {
      const step = ray[s];
      let rainDrops = Math.pow(Math.random(), 3) * s;
      let rain = rainDrops > 0 && this.project(0.1, angle, step.distance),
        textureX,
        wall;

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
        // hitDistance = step.distance;
      }
      // } else if (step.object) {
      //   objects.push({
      //     object: step.object,
      //     distance: step.distance,
      //     offset: step.offset,
      //     angle: angle
      //   });
      // }

      this.ctx.fillStyle = '#ffffff';
      this.ctx.globalAlpha = 0.15;
      while (--rainDrops > 0) this.ctx.fillRect(left, Math.random() * rain.top, 1, rain.height);
    }
    // return {
    //   objects: objects,
    //   hit: hitDistance
    // };
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