import EnvironmentObject from './environment_object';

export default class Sky extends EnvironmentObject {
  constructor(options) {
    super(options);
  };

  render(direction, sky, ambient) {
    const width = this.width * (2 * Math.PI / this.fov);
    const left = (-width * direction) / (2 * Math.PI);

    this.ctx.save();
    this.ctx.drawImage(sky.image, left, 0, width, this.height);

    if (left < width - this.width) {
      this.ctx.drawImage(sky.image, left + width, 0, width, this.height);
    }

    if (ambient > 0) {
      this.ctx.fillStyle = "#ffffff";
      this.ctx.globalAlpha = ambient * 0.1;
      this.ctx.fillRect(0, this.height * 0.5, this.width, this.height * 0.5);
    }

    this.ctx.restore();
  };
};