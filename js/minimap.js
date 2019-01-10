export default class MiniMap {
  constructor(ctx, screenWidth, screenHeight) {
    this.ctx = ctx;
    this.width = 0.25 * screenWidth;
    this.height = this.width;
    this.x = 20;
    this.y = 20;
  };

  render(map, humanPlayer) {
    this.drawMap(map);
    this.drawHumanPlayer(humanPlayer, map.size);
  }

  drawMap(map) {
    let blockWidth = this.width / map.size,
      blockHeight = this.height / map.size,
      wallIndex;

    this.ctx.save();

    this.ctx.globalAlpha = 0.3;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.ctx.globalAlpha = 0.4;

    this.ctx.fillStyle = "#ffffff";

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

    this.ctx.save();

    // for (let i = 0; i < map.objects.length; i++) {
    //   if (map.objects[i]) {
    //     this.ctx.fillStyle = map.objects[i].color || "blue";
    //     this.ctx.globalAlpha = 0.8;
    //     this.ctx.fillRect(
    //       x + blockWidth * map.objects[i].x + blockWidth * 0.25,
    //       y + blockHeight * map.objects[i].y + blockWidth * 0.25,
    //       blockWidth * 0.5,
    //       blockHeight * 0.5
    //     );
    //   }
    // }

    this.ctx.restore();    
  };

  drawHumanPlayer(humanPlayer, scale) {
    let playerX = (humanPlayer.x / scale) * this.width,
     playerY = (humanPlayer.y / scale) * this.width,
     triangleX = this.x + playerX,
     triangleY = this.y + playerY;

    this.ctx.globalAlpha = 1;
    this.ctx.fillStyle = "#FF0000";
    this.ctx.moveTo(triangleX, triangleY);
    this.ctx.translate(triangleX, triangleY);

    this.ctx.rotate(humanPlayer.direction - Math.PI * 0.5);
    this.ctx.beginPath();
    this.ctx.lineTo(-2, -3); // bottom left of triangle
    this.ctx.lineTo(0, 2); // tip of triangle
    this.ctx.lineTo(2, -3); // bottom right of triangle
    this.ctx.fill();
    this.ctx.restore();
  };
};