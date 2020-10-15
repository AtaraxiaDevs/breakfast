import Configuracion from "./configFunctions.js";
import Escena1 from "./escena1.js";

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
  scene: [Escena1],
};

var game = new Phaser.Game(config);

export default new Configuracion();
