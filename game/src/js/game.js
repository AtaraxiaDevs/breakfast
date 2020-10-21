import { ConfiguracionJuego, APIJuego } from "../main.js";

export default class Game extends Phaser.Scene {
  constructor() {
    super("game");
  }

  preload() {
    APIJuego.setEscena(this);
    APIJuego.cargarSprites();
  }

  create() {
    APIJuego.setEscena(this);
    APIJuego.cargarAnims();

    this.button = this.add.image(500, 500, "s_provisional2").setInteractive(); // BOTÓN PROVISIONAL

    this.button.on("pointerdown", function () {
      //APIJuego.añadirPersonaje("placeHolder");
      //APIJuego.añadirPersonaje("placeHolder2")
      APIJuego.añadirPersonaje("veloz");
      APIJuego.arrancarPersonajes();
    });

    // DETECCIÓN DE MÓVIL
    if (ConfiguracionJuego.isMobile) {
      console.log("Era mobile");
      ConfiguracionJuego.resize();
    }
  }

  update() {}
}
