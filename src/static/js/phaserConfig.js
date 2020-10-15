var config = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    parent: "phaser-example",
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1920,
    height: 1080,
  },
  backgroundColor: 0x444444,
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

var game = new Phaser.Game(config);

function preload() {
  this.load.image("s_provisional", "resources/s_provisional.png");
}

function create() {
  this.add.image(200, 400, "s_provisional");
  if (isMobile) {
    scene.scale.lockOrientation("landscape");
    resize();
    console.log("Me he reajustao");
  }
}

function update() {}

function resize() {
  let canvas = document.querySelector("canvas");
  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;
  let windwRatio = windowWidth / windowHeight;
  let gameRatio = game.config.width / game.config.height;

  if (windwRatio < gameRatio) {
    canvas.style.width = windowWidth + "px";
    canvas.style.height = windowHeight + "px";
  } else {
    canvas.style.width = windowHeight * gameRatio + "px";
    canvas.style.height = windowHeight + "px";
  }

  console.log("He hecho resize");
}

let isMobile = false;
addEventListener("touchstart", tareasMovil, false);

function tareasMovil() {
  alert("Soy Un Móvil");
  isMobile = true;
  resize();

  // Element.removeEventListener("touchstart", tareasMovil, true);
}
