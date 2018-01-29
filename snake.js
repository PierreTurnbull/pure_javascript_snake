// TRANSMIT EVERY SNAKE BLOCK'S VELOCITY TO THE NEXT SNAKE BLOCK
function transmit_snake_direction(sn) {
  for (let i = sn.length - 1; i > 0; i--) {
    sn[i]["velx"] = sn[i - 1]["velx"];
    sn[i]["vely"] = sn[i - 1]["vely"];
  }
}

// CHECK IF SNAKE CAN TURN WITHOUT ENCROACHING ON HIS BODY
function snake_can_turn(dir) {
  let test_snake = [];
  for (let i = 0; i < snake.length; i++) {
    test_snake[i] = {x: snake[i]["x"], y: snake[i]["y"], velx: snake[i]["velx"], vely: snake[i]["vely"]};
  }
  if        (dir == 0) {
    test_snake[0]["vely"] = -snake_speed;
    test_snake[0]["velx"] = 0;
  } else if (dir == 1) {
    test_snake[0]["vely"] = snake_speed;
    test_snake[0]["velx"] = 0;
  } else if (dir == 2) {
    test_snake[0]["vely"] = 0;
    test_snake[0]["velx"] = -snake_speed;
  } else if (dir == 3) {
    test_snake[0]["vely"] = 0;
    test_snake[0]["velx"] = snake_speed;
  }
  for (let j = 0; j < snake_size / snake_speed; j++) {
    if (snake_body_collision(test_snake, snake_size / snake_speed * 3)) {
      return false; // SNAKE CANNOT TURN
    }
    move_snake(test_snake);
    transmit_snake_direction(test_snake, snake_size / snake_speed * 3);
  }
  return true; // SNAKE CAN TURN
}

// CHANGE SNAKE HEAD'S DIRECTION WITH INPUT DIRECTION IF POSSIBLE
function change_snake_direction() {
  if        (next_key == 0 && snake[0]["vely"] == 0 && snake_can_turn(0)) { // UP
    snake[0]["vely"] = -snake_speed;
    snake[0]["velx"] = 0;
  } else if (next_key == 1 && snake[0]["vely"] == 0 && snake_can_turn(1)) { // DOWN
    snake[0]["vely"] = snake_speed;
    snake[0]["velx"] = 0;
  } else if (next_key == 2 && snake[0]["velx"] == 0 && snake_can_turn(2)) { // LEFT
    snake[0]["vely"] = 0;
    snake[0]["velx"] = -snake_speed;
  } else if (next_key == 3 && snake[0]["velx"] == 0 && snake_can_turn(3)) { // RIGHT
    snake[0]["vely"] = 0;
    snake[0]["velx"] = snake_speed;
  } else {
    last_turn++;
    return;
  }
  last_turn = 1;
}

// MOVE SNAKE
function move_snake(sn) {
  for (let i = 0; i < sn.length; i++) {
    sn[i]["x"] += sn[i]["velx"];
    sn[i]["y"] += sn[i]["vely"];
  }
}

// RENDER SNAKE
function render_snake() {
  ctx.fillStyle = colors[Object.keys(colors)[color]]["background"];
  ctx.fillRect(0, 0, 1200, 800);
  ctx.fillStyle = colors[Object.keys(colors)[color]]["snake"];
  for (let i = 0; i < snake.length; i++) {
    ctx.fillRect(snake[i]["x"], snake[i]["y"], snake_size, snake_size);
  }
}

// EXTEND SNAKE'S BODY
function snake_grows() {
  if (new_blocks > 0) {
    snake.push({
      x: snake[snake.length - 1]["x"] - snake[snake.length - 1]["velx"],
      y: snake[snake.length - 1]["y"] - snake[snake.length - 1]["vely"],
      velx: snake[snake.length - 1]["velx"],
      vely: snake[snake.length - 1]["vely"]});
    new_blocks--;
  }
}

// CREATE SNAKE
var next_key;
var snake;
var snake_size;
var snake_speed;
var new_blocks;
var last_turn;
var targets;
var target_size;
var ctx;
var color;
var score;

next_key    = null;
snake       = [];
snake_size  = 50;
snake_speed = 10;
new_blocks  = 0;
last_turn   = 0;
targets     = [];
target_size = 20;
ctx         = game.getContext("2d");
color       = 0;
score       = 0;
for (let i = 0; i < 20; i++) {
  snake[i] = {x: 300 - i * snake_speed, y: 450, velx: snake_speed, vely: 0};
}
