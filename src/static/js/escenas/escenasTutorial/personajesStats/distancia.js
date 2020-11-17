import { ConfiguracionJuego, APIJuego } from "../../../main.js";

export default class Distancia extends Phaser.Scene {
  constructor() {
    super("distancia");
  }

  preload() {
    APIJuego.setEscena(this);
  }

  create() {
    var fondoDistancia = this.add
      .image(0, 0, "fondoStatsPersonajes")
      .setOrigin(0);

    let cartelDistancia = this.add
      .image(940, 135, APIJuego.lenguage + "_distancia")
      .setScale(0.73);

    let personajeDistancia = this.add
      .image(700, 500, "distancia")
      .setScale(1.5);

    let clickButtonOK = this.add
      .image(940, 780, "OK")
      .setScale(0.3)
      .setInteractive()
      .on("pointerdown", () => this.scene.start("personajes"));

    let clickButtonIdioma = this.add
      .image(520, 780, APIJuego.lenguage === "spanish" ? "english" : "spanish")
      .setScale(0.23)
      .setInteractive()
      .on("pointerdown", function () {
        let lenguage = APIJuego.setLenguage();
        cartelDistancia.setTexture(lenguage + "_distancia");
        clickButtonIdioma.setTexture(
          lenguage === "spanish" ? "english" : "spanish"
        );
      });
  }
}