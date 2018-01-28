// CREATE STYLE
var style;

style = document.createElement("style");
style.innerHTML = "\
  * {\
    margin: 0;\
    padding: 0;\
  }\
  \
  body {\
    background-color: #F00;\
  }\
  \
  .snake_block {\
    background-color: red;\
    width: 50px;\
    height: 50px;\
    position: absolute;\
    top: 0;\
    left: 0;\
  }\
"
document.head.appendChild(style);

// CREATE DOM STRUCTURE
var main_container;
var game;
var highscores;

main_container = document.createElement("section");
main_container.classList.add("main_container");
game = document.createElement("canvas");
game.classList.add("game");

document.body.appendChild(main_container);
main_container.appendChild(game);

main_container.style.display = "flex";

game.width = 1200;
game.height = 600;
game.style.backgroundColor = "#F00";
game.style.margin = "auto";
