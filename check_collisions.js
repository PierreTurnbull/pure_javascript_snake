// CHECK IF SNAKE EATS FOOD
function snake_food_collision() {
  for (let i = 0; i < targets.length; i++) {
    if (// FOOD TOP LEFT CORNER IS HIT
        (targets[i]["x"] >= snake[0]["x"] && targets[i]["x"] <= snake[0]["x"] + snake_size &&
        targets[i]["y"] >=  snake[0]["y"] && targets[i]["y"] <= snake[0]["y"] + snake_size) ||
        // FOOD TOP RIGHT CORNER IS HIT
        (targets[i]["x"] +  target_size >= snake[0]["x"] && targets[i]["x"] + target_size <= snake[0]["x"] + snake_size &&
        targets[i]["y"] >=  snake[0]["y"] && targets[i]["y"] <= snake[0]["y"] + snake_size) ||
        // FOOD BOT LEFT CORNER IS HIT
        (targets[i]["x"] >= snake[0]["x"] && targets[i]["x"] <= snake[0]["x"] + snake_size &&
        targets[i]["y"] +   target_size >=  snake[0]["y"] && targets[i]["y"] + target_size <= snake[0]["y"] + snake_size) ||
        // FOOD BOT RIGHT CORNER IS HIT
        (targets[i]["x"] +  target_size >= snake[0]["x"] && targets[i]["x"] + target_size <= snake[0]["x"] + snake_size &&
        targets[i]["y"] +   target_size >= snake[0]["y"] && targets[i]["y"] + target_size <= snake[0]["y"] + snake_size)) {
      score++;
      return i;
    }
  }
  return -1;
}

// CHECK IF SNAKE EATS THE WALL
function snake_wall_collision() {
  if (snake[0]["x"] < 0 || snake[0]["x"] + snake_size > 1199 ||
      snake[0]["y"] < 0 || snake[0]["y"] + snake_size > 599) {
    return true; // SNAKE EATS THE WALL
  }
  return false; // SNAKE DOESN'T EAT THE WALL
}

// CHECK IF SNAKE EATS HIS OWN BODY
function snake_body_collision(sn, limit) {
  for (let i = snake_size / snake_speed * 2; i < limit && i < snake.length; i++) {
    if (Math.sqrt((sn[0]["x"] - sn[i]["x"]) * (sn[0]["x"] - sn[i]["x"])) < snake_size &&
        Math.sqrt((sn[0]["y"] - sn[i]["y"]) * (sn[0]["y"] - sn[i]["y"])) < snake_size) {
      return true; // SNAKE EATS HIS BODY
    }
  }
  return false; // SNAKE DOESN'T EAT HIS BODY
}

function check_collisions() {
  let food_index;

  if (snake_body_collision(snake, snake.length)) {
    end_game();
  } else if (snake_wall_collision()) {
    end_game();
  } else if ((food_index = snake_food_collision()) != -1) {
    destroy_target(food_index);
    new_blocks += snake_size / snake_speed * 2;
  }
}
