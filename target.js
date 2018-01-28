// DESTROY TARGET
function destroy_target(index) {
  targets.splice(index, 1);
}

// RENDER TARGETS
function render_targets() {
  ctx.fillStyle = colors[Object.keys(colors)[color]]["target"];
  for (let i = 0; i < targets.length; i++) {
    ctx.fillRect(targets[i]["x"], targets[i]["y"], target_size, target_size);
  }
}

// CREATE A NEW TARGET
function create_target() {
  time += 15;
  if (time > time_stamp + 1500) {
    time_stamp = time;
    targets[targets.length] = {x: Math.floor(Math.random() * (1200 - target_size * 4)) + target_size * 2, y: Math.floor(Math.random() * (600 - target_size * 4)) + target_size * 2};
  }
}
