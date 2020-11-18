import { ConfiguracionJuego, APIJuego } from "../main.js";

export default class PrePartida extends Phaser.Scene {
    constructor() {
      super("prePartida");
    }

    preload() {
        APIJuego.setEscena(this);
    }

    create() {
        var fondoPrePartida = this.add.image(0, 0, "fondoPrepartida").setOrigin(0)
    }
}  