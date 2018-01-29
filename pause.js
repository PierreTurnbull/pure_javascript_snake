var start;
var end;
var pause;

function end_game() {
  end = true;
}

function render_start() {
  ctx.fillStyle = colors[Object.keys(colors)[color]]["menu"];
  ctx.globalAlpha = 0.01;
  ctx.fillRect(300, 200, 600, 200);
  ctx.fillStyle = colors[Object.keys(colors)[color]]["menu_text"];
  ctx.globalAlpha = 1;
  ctx.font = "50px Arial";
  ctx.fillText("PRESS SPACE OR", 380, 285);
  ctx.fillText("ENTER TO PLAY", 410, 350);
}

function render_end() {
  ctx.fillStyle = colors[Object.keys(colors)[color]]["menu"];
  ctx.globalAlpha = 0.01;
  ctx.fillRect(300, 200, 600, 200);
  ctx.fillStyle = colors[Object.keys(colors)[color]]["menu_text"];
  ctx.globalAlpha = 1;
  ctx.font = "100px Arial";
  ctx.fillText("GGWP", 450, 300);
  ctx.font = "45px Arial";
  ctx.fillText("YOUR SCORE: " + score, 420, 360);
}

function render_pause() {
  ctx.fillStyle = colors[Object.keys(colors)[color]]["menu"];
  ctx.globalAlpha = 0.01;
  ctx.fillRect(300, 200, 600, 200);
  ctx.fillStyle = colors[Object.keys(colors)[color]]["menu_text"];
  ctx.globalAlpha = 1;
  ctx.font = "150px Arial";
  ctx.fillText("PAUSE", 350, 350);
}

start = true;
end   = false;
pause = false;
