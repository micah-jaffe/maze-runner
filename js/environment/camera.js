import MiniMap from './minimap';
import Sky from './sky';
import Columns from './columns';

export default class Camera {
  constructor(canvas, resolution, fov) {
    this.ctx = canvas.getContext("2d");
    this.width = canvas.width = window.innerWidth;
    this.height = canvas.height = window.innerHeight;
    this.resolution = resolution;
    this.spacing = this.width / resolution;
    this.fov = fov;
    // this.range = MOBILE ? 8 : 14;
    this.range = 14;
    this.lightRange = 5;
    this.scale = (this.width + this.height) / 1200;

    this.minimap = new MiniMap({ 
      ctx: this.ctx, 
      width: this.width, 
      height: this.height 
    });

    this.sky = new Sky({ 
      ctx: this.ctx, 
      width: this.width, 
      height: this.height, 
      fov: this.fov 
    });

    this.columns = new Columns({ 
      ctx: this.ctx, 
      resolution: this.resolution, 
      fov: this.fov, 
      range: this.range 
    });

    document.addEventListener("keyup", this.onKey.bind(this, false), false);
  };

  onKey(val, e) {
    if (e.keyCode === 70) {
      this.toggleFullscreen();
    }
  };

  render(player, map, objects) {
    this.drawSky(player, map)
    // this.drawColumns(player, map, objects);
    this.drawColumns(player, map);
    this.drawWeapon(player.weapon, player.paces);
    this.drawMiniMap(map, player);
  };

  drawSky(player, map) {
    this.sky.render(player.direction, map.skybox, map.light);
  };

  // drawColumns(player, map) {
  //   this.columns.render(player, map);
  // }

  drawColumns(player, map) {
    this.ctx.save();

    for (let column = 0; column < this.resolution; column++) {
      let angle = this.fov * (column / this.resolution - 0.5);
      let ray = map.cast(player, player.direction + angle, this.range);
      let columnProps = this.drawColumn(column, ray, angle, map);
    }

    this.ctx.restore();
    this.ctx.save();
    this.ctx.restore();
  };

  drawWeapon(weapon, paces) {
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

  drawColumn(column, ray, angle, map) {
    let ctx = this.ctx,
      wallTexture = map.wallTexture,
      floorTexture = map.floorTexture,
      left = Math.floor(column * this.spacing),
      width = Math.ceil(this.spacing),
      hit = -1,
      objects = [],
      hitDistance;

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

      ctx.fillStyle = '#ffffff';
      ctx.globalAlpha = 0.15;
      while (--rainDrops > 0) ctx.fillRect(left, Math.random() * rain.top, 1, rain.height);
    }
    return {
      objects: objects,
      hit: hitDistance
    };
  };

  drawMiniMap(map, player) {
    this.minimap.render(map, player)
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
