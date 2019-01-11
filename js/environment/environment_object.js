export default class EnvironmentObject {
  constructor(options) {
    this.ctx = options.ctx;
    this.width = options.width;
    this.height = options.height;
    this.resolution = options.resolution;
    this.spacing = options.spacing;
    this.fov = options.fov;
    this.range = options.range;
    this.lightRange = options.lightRange;
    this.scale = options.scale;
  };

  render() {
    throw "Rendering error";
  };
};