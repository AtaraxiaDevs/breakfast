import ConfiguracionJuego from "./phaserConfig.js";
import GameFunctions from "./gameFunctions.js";

let sprite
let sprite2

export default class Escena1 extends Phaser.Scene {
  constructor() {
    super("escena1");
  }

  preload() {
  }

  create() {
    //this.button = this.add.image(500, 500, 's_provisional').setInteractive();
    //this.button.on('pointerdown', dibujarSprite(this))
    /*sprite2 = this.physics.add.sprite(200, 600, 's_provisional2')
    sprite2.setScale(0.5)
    sprite2.setVelocityX(50)*/
    if (ConfiguracionJuego.isMobile) {
      console.log("Era mobile");
      ConfiguracionJuego.resize();
    }
  }

  update() {
  }
}
