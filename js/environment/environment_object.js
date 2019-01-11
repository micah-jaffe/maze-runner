export default class EnvironmentObject {
  constructor(ctx, width, height, fov) {
    // this.player = player;
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.fov = fov;
    // this.map = map;
  };

  render() {
    throw "Rendering error";
  };
};