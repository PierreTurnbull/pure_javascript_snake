new_size();

// ON WINDOW RESIZE, RESIZE DOM
window.addEventListener("resize", function(){
  new_size();
});

// MAKES CHANGES EVERY 15ms (60fps)
var time;
var time_stamp;
var time_stamp_pause;

time = 0;
time_stamp = 0;
time_stamp_pause = 0;
set_new_color();
render_snake();
render_targets();
setInterval(function(){
  if        (end) {
    if (time_stamp_pause < 30) {
      render_end();
      time_stamp_pause++;
    }
  } else if (start) {
    if (time_stamp_pause == 0) {
      snake.splice(0, snake.length);
      for (let i = 0; i < 20; i++) {
        snake[i] = {x: 300 - i * snake_speed, y: 450, velx: snake_speed, vely: 0};
      }
      next_key = null;
      score = 0;
      targets.splice(0, targets.length);
      render_snake();
      render_targets();
    }
    if (time_stamp_pause < 30) {
      render_start();
      time_stamp_pause++;
    }
  } else if (pause) {
    if (time_stamp_pause < 30) {
      render_pause();
      time_stamp_pause++;
    }
  } else if (!pause) {
    create_target();
    change_snake_direction();
    move_snake(snake);
    transmit_snake_direction(snake);
    check_collisions();
    snake_grows();
    render_snake();
    render_targets();
  }
}, 15);
