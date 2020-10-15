import ConfiguracionJuego from "./phaserConfig.js";

export default class Escena1 extends Phaser.Scene {
  constructor() {
    super("escena1");
  }

  preload() {
    this.load.image("s_provisional", "resources/s_provisional.png");
  }

  create() {
    this.add.image(200, 400, "s_provisional");

    console.log(ConfiguracionJuego.isMobile);
    if (ConfiguracionJuego.isMobile) {
      console.log("Era mobile");
      ConfiguracionJuego.resize();
    }
  }

  update() {}
}
