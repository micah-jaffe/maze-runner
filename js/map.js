class Map {
  constructor(size) {
    this.size = size;
    this.wallGrid = new Uint8Array(size * size); // replace with maze here
  }
}

module.exports = Map;
