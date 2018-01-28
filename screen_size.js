function new_size() {
  if (window.innerWidth < 1250) {
    if (window.innerWidth * 0.5 > window.innerHeight) {
      game.style.width = window.innerHeight * 2 - 50 + "px";
      game.style.height = window.innerHeight + "px";
      main_container.style.marginTop = 0 + "px";
    } else {
      game.style.width = window.innerWidth - 50 + "px";
      game.style.height = window.innerWidth * 0.5 + "px";
      main_container.style.marginTop = (window.innerHeight - window.innerWidth * 0.5) / 2 + "px";
    }
  } else {
    if (1250 * 0.5 > window.innerHeight) {
      game.style.width = window.innerHeight * 2 - 50 + "px";
      game.style.height = window.innerHeight + "px";
      main_container.style.marginTop = 0 + "px";
    } else {
      game.style.width = 1250 - 50 + "px";
      game.style.height = 1250 * 0.5 + "px";
      main_container.style.marginTop = (window.innerHeight - 1250 * 0.5) / 2 + "px";
    }
  }
}
