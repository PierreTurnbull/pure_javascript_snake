new_size();

// ON WINDOW RESIZE, RESIZE DOM
window.addEventListener("resize", function(){
  new_size();
});

// MAKES CHANGES EVERY 15ms (60fps)
var time;
var time_stamp;

time = 0;
time_stamp = 0;
set_new_color();
setInterval(function(){
  if (!pause) {
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
