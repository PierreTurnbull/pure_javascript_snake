function set_new_color() {
  color = Math.floor(Math.random() * 7.99);
  game.style.backgroundColor = colors[Object.keys(colors)[color]]["container"];
  document.body.style.backgroundColor = colors[Object.keys(colors)[color]]["container"];
}

var colors = {
  color_black: {
    container:  "#000",
    background: "#555",
    snake:      "#222",
    target:     "#111"
  },
  color_r: {
    container:  "#F00",
    background: "#FAA",
    snake:      "#F00",
    target:     "#D00"
  },
  color_g: {
    container:  "#0C0",
    background: "#AFA",
    snake:      "#0D0",
    target:     "#0C0"
  },
  color_b: {
    container:  "#00F",
    background: "#CCF",
    snake:      "#00F",
    target:     "#00C"
  },
  color_rg: {
    container:  "#FF0",
    background: "#FFE",
    snake:      "#FF0",
    target:     "#E7E700"
  },
  color_rb: {
    container:  "#F0F",
    background: "#FAF",
    snake:      "#F0F",
    target:     "#D0D"
  },
  color_gb: {
    container:  "#0FF",
    background: "#CFF",
    snake:      "#0FF",
    target:     "#0DD"
  },
  color_rgb: {
    container:  "#EEE",
    background: "#FFF",
    snake:      "#EEE",
    target:     "#CCC"
  }
};
