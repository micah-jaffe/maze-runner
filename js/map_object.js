export default class MapObject {
  constructor(object, x, y) {
    for (const prop in object) {
      this[prop] = object[prop];
    }
    this.x = x;
    this.y = y;
  };
};
