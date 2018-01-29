function set_new_color() {
  color = Math.floor(Math.random() * 7.99);
  game.style.backgroundColor = colors[Object.keys(colors)[color]]["container"];
  document.body.style.backgroundColor = colors[Object.keys(colors)[color]]["container"];
}

var colors = {
  color_black: {
    container:  "#000",
    background: "#555",
    menu:       "#000",
    menu_text:  "#000",
    snake:      "#222",
    target:     "#111"
  },
  color_r: {
    container:  "#F00",
    background: "#FAA",
    menu:       "#F22",
    menu_text:  "#D00",
    snake:      "#F00",
    target:     "#D00"
  },
  color_g: {
    container:  "#0C0",
    background: "#AFA",
    menu:       "#3F3",
    menu_text:  "#0B0",
    snake:      "#0D0",
    target:     "#0C0"
  },
  color_b: {
    container:  "#00F",
    background: "#CCF",
    menu:       "#33F",
    menu_text:  "#009",
    snake:      "#00F",
    target:     "#00C"
  },
  color_rg: {
    container:  "#FF0",
    background: "#FFE",
    menu:       "#FF2",
    menu_text:  "#EE0",
    snake:      "#FF0",
    target:     "#E7E700"
  },
  color_rb: {
    container:  "#F0F",
    background: "#FAF",
    menu:       "#F3F",
    menu_text:  "#D0D",
    snake:      "#F0F",
    target:     "#D0D"
  },
  color_gb: {
    container:  "#0FF",
    background: "#CFF",
    menu:       "#0DD",
    menu_text:  "#0DD",
    snake:      "#0FF",
    target:     "#0DD"
  },
  color_rgb: {
    container:  "#EEE",
    background: "#FFF",
    menu:       "#000",
    menu_text:  "#FFF",
    snake:      "#EEE",
    target:     "#CCC"
  }
};
