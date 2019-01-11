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
      height: this.height,
      resolution: this.resolution,
      spacing: this.spacing,
      fov: this.fov, 
      range: this.range,
      lightRange: this.lightRange
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

  drawColumns(player, map) {
    this.columns.render(player, map);
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

  drawMiniMap(map, player) {
    this.minimap.render(map, player)
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
