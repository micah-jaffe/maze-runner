import EnvironmentObject from "./environment_object";

export default class Weapon extends EnvironmentObject {
  constructor(options) {
    super(options);
  };

  render(weapon, paces) {
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
};
