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
  if (event.keyCode == 80 || event.keyCode == 32 || event.keyCode == 27) {
    if        (start == true && end == false && pause == false) {
      start = false;
    } else if (start == false && end == true && pause == false) {
      end = false;
      start = true;
    } else if (start == false && end == false && pause == true) {
      pause = false;
    } else if (start == false && end == false && pause == false) {
      pause = true;
    } else {
      console.log("FATAL ERROR, KEY CANNOT BE HANDLED");
    }
    time_stamp_pause = 0;
  }
});
