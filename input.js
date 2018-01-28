// ON KEY DOWN, REGISTER A NEW DIRECTION
window.addEventListener("keydown", function(event){
  if (!pause) {
    switch (event.keyCode) {
      case 38: // UP ARROW
      case 90: // Z
        next_key = 0;
        break;
      case 40: // DOWN ARROW
      case 83: // S
        next_key = 1;
        break;
      case 37: // LEFT ARROW
      case 81: // Q
        next_key = 2;
        break;
      case 39: // RIGHT ARROW
      case 68: // D
        next_key = 3;
        break;
    }
  }
});

// PAUSE OR UNPAUSE THE GAME
window.addEventListener("keydown", function(event) {
  if (pause == 0 && (event.keyCode == 80 || event.keyCode == 32)) {
    pause = 1;
  } else if (pause == 1 && (event.keyCode == 80 || event.keyCode == 32)) {
    pause = 0;
  }
});
