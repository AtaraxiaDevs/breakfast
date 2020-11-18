import { ConfiguracionJuego, APIJuego } from "../main.js";

export default class ElegirModosEscenario extends Phaser.Scene {
  constructor() {
    super("elegirModosEscenario");
  }

  preload() {
      APIJuego.setEscena(this);
  }

  create() {
      
  }
}