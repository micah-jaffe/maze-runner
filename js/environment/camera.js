import Sky from './sky';
import Columns from './columns';
import Weapon from './weapon';
import MiniMap from './minimap';

export default class Camera {
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

    this.weapon = new Weapon({
      ctx: this.ctx,
      width: this.width,
      height: this.height,
      scale: this.scale
    });

    this.minimap = new MiniMap({
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
