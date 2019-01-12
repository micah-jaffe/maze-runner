import EnvironmentObject from './environment_object';

export default class MiniMap extends EnvironmentObject {
  constructor(options) {
    super(options);
    this.width = 0.25 * options.width;
    this.height = this.width;
    this.x = 20;
    this.y = options.height - this.height - 20;
  };

  render(map, humanPlayer, ...computerPlayers) {
    this.drawMap(map);
    computerPlayers.forEach(
      (player, markerIdx) => this.drawPlayer('computer', player, map.size, markerIdx + 1)
    );
    this.drawPlayer('human', humanPlayer, map.size);
  }

  drawMap(map) {
    let blockWidth = this.width / map.size,
      blockHeight = this.height / map.size,
      wallIndex;

    this.ctx.save();

    this.ctx.globalAlpha = 0.3;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.ctx.globalAlpha = 0.4;

    // this.ctx.fillStyle = "#ffffff";
    // this.ctx.fillStyle = "#000000";
    this.ctx.fillStyle = "rgba(255, 255, 255, 1)";

    for (let row = 0; row < map.size; row++) {
      for (let col = 0; col < map.size; col++) {
        wallIndex = row * map.size + col;

        if (map.wallGrid[wallIndex]) {
          this.ctx.fillRect(
            this.x + blockWidth * col,
            this.y + blockHeight * row,
            blockWidth,
            blockHeight
          );
        }
      }
    }

    this.ctx.fillStyle = "rgba(255, 255, 255, 0.3)";

    this.ctx.save();
    this.ctx.restore();    
  };

  drawPlayer(type, player, scale, markerIdx = 0) {
    const colors = ["#FF0000", "#00FF00", "#0000FF"],
      markerSize = 1.5 * this.width / scale,
      playerX = (player.x / scale) * this.width,
      playerY = (player.y / scale) * this.width,
      markerX = this.x + playerX,
      markerY = this.y + playerY;

    this.ctx.moveTo(markerX, markerY);
    this.ctx.translate(markerX, markerY);
    this.ctx.globalAlpha = 1;
    this.ctx.fillStyle = colors[markerIdx];

    if (type === 'human') {
      this.ctx.rotate(player.direction - Math.PI * 0.5);
    }

    this.ctx.beginPath();

    switch (type) {
      case 'human':
        // this.ctx.lineTo(0, markerSize / 10); // 
        this.ctx.lineTo(-markerSize / 5, -markerSize / 10);
        this.ctx.lineTo(0, markerSize / 3);
        this.ctx.lineTo(markerSize / 5, -markerSize / 10);

        this.ctx.fill();

        this.ctx.fillStyle = "rgba(255, 255, 255, 0.2)";

        this.ctx.arc(0, 0, 1.5 * markerSize, 0, 2 * Math.PI)
        this.ctx.fill();
        break
      case 'computer':
        this.ctx.arc(0, 0, markerSize / 5, 0, 2 * Math.PI)
        break
    }

    this.ctx.fill();
    this.ctx.restore();
    this.ctx.save();
  };
};