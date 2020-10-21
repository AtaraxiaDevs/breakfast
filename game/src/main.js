import Configuracion from "js/configFunctions.js"
import GameAPI from "js/gameAPI.js";
import Game from "js/game.js";

var config = {
  type: Phaser.AUTO,
  physics: {
    default: "arcade",
  },
  scale: {
    mode: Phaser.Scale.FIT,
    orientation: Phaser.Scale.Orientation.LANDSCAPE,
    parent: "phaser-example",
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1920,
    height: 1080,
  },
  backgroundColor: 0x444444,
  scene: [Game],
  parent: "canvas",
};

var game = new Phaser.Game(config);

export let ConfiguracionJuego = new Configuracion(game);
export let APIJuego = new GameAPI();