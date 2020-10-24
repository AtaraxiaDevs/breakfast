import { ConfiguracionJuego, APIJuego } from "../main.js";
import Personaje from "../classPersonajes.js";

export default class Escena1 extends Phaser.Scene {
  constructor() {
    super("escena1");
  }

  preload() {
    APIJuego.setEscena(this);
    APIJuego.cargarAssets();
  }

  create() {
    APIJuego.setEscena(this);
    APIJuego.cargarAnims();

    // DETECCIÓN DE MÓVIL
    if (ConfiguracionJuego.isMobile) {
      console.log("Era mobile");
      ConfiguracionJuego.resize();
    }

    this.scene.start("menuPrincipal");
  }
}
