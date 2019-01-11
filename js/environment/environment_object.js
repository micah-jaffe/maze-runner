export default class EnvironmentObject {
  // constructor(ctx, width, height, resolution, spacing, fov, range, lightRange) {
  //   this.ctx = ctx;
  //   this.width = width;
  //   this.height = height;
  //   this.resolution = resolution;
  //   this.spacing = spacing;
  //   this.fov = fov;
  //   this.range = range;
  //   this.lightRange = lightRange;
  // };

  constructor(options) {
    this.ctx = options.ctx;
    this.width = options.width;
    this.height = options.height;
    this.resolution = options.resolution;
    this.spacing = options.spacing;
    this.fov = options.fov;
    this.range = options.range;
    this.lightRange = options.lightRange;
  };

  render() {
    throw "Rendering error";
  };
};