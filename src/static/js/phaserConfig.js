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
let isMobile = getDeviceName();

function preload() {
  this.load.image("s_provisional", "resources/s_provisional.png");
}

function create() {
  this.add.image(200, 400, "s_provisional");
  if (isMobile) {
    //scene.scale.lockOrientation("landscape");
    console.log(isMobile);
    resize();
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
}

function tareasMovil() {
  if (isMobile == undefined) {
    // alert("Soy Un Móvil");
    isMobile = true;
    resize();
  }
}

function checkUserAgent(name) {
  if (navigator.userAgent.indexOf(name) != -1) {
    return true;
  } else {
    return false;
  }
}

function getDeviceName() {
  "use strict";

  let device = "n/a";

  if (
    checkUserAgent("Android") ||
    (checkUserAgent("iPhone") && !window.MSStream)
  ) {
    device = true;
  } else if (
    checkUserAgent("Mac OS") ||
    checkUserAgent("Macintosh") ||
    checkUserAgent("Windows")
  ) {
    device = false;
  } else {
    device = undefined;
  }

  return device;
}
