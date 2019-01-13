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
    this.drawExit(map);
  };

  drawMap(map) {
    let blockWidth = this.width / map.size,
      blockHeight = this.height / map.size,
      idx;

    this.ctx.save();

    this.ctx.globalAlpha = 0.3;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.ctx.globalAlpha = 0.4;

    this.ctx.fillStyle = "rgba(255, 255, 255, 1)";

    for (let row = 0; row < map.size; row++) {
      for (let col = 0; col < map.size; col++) {
        idx = row * map.size + col;

        if (map.discovered[idx] && map.wallGrid[idx]) {
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

  drawExit(map) {
    const color = "#00FF00",
      exitX = this.x + ((map.size - 0.5) / map.size) * this.width,
      exitY = this.y + ((map.size - 1.5) / map.size) * this.width,
      r = 0.4 * this.width / map.size,
      m = 0.3;

      this.ctx.moveTo(exitX, exitY);
      this.ctx.translate(exitX, exitY);
      this.ctx.fillStyle = color;

      this.ctx.beginPath();
    
      this.ctx.moveTo(0, 0 - r);
      for (let i = 0; i < 5; i++) {
        this.ctx.rotate(Math.PI / 5);
        this.ctx.lineTo(0, 0 - (r * m));
        this.ctx.rotate(Math.PI / 5);
        this.ctx.lineTo(0, 0 - r);
      }

      this.ctx.fill();
      this.ctx.restore();
      this.ctx.save();
  };

  drawPlayer(type, player, scale, markerIdx = 0) {
    const colors = ["#FF0000", "#048BA8", "#EF798A", "#F18F01"],
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
        // this.ctx.lineTo(0, markerSize / 10);
        this.ctx.lineTo(-markerSize / 6, -markerSize / 10);
        this.ctx.lineTo(0, markerSize / 3);
        this.ctx.lineTo(markerSize / 6, -markerSize / 10);

        this.ctx.fill();

        this.ctx.fillStyle = "rgba(255, 255, 255, 0.2)";

        this.ctx.arc(0, 0, markerSize, 0, 2 * Math.PI)
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