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
    background-color: #B99;\
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

game.style.backgroundColor = "#CCBFBF";
game.style.margin = "auto";
game.style.boxSizing = "border-box";
game.style.border = "1px solid grey";

// CREATE SNAKE
var snake;
var ctx;

ctx = game.getContext("2d");
ctx.fillStyle = "red";
snake = [];
snake[0] = {x:0, y:0, dir:0};
