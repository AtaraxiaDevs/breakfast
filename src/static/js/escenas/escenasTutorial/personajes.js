import { ConfiguracionJuego, APIJuego } from "../../main.js";

export default class Personajes extends Phaser.Scene {
  constructor() {
    super("personajes");
  }

  preload() {
    APIJuego.setEscena(this);
  }

  create() {
    var fondoPersonajes = this.add.image(0, 0, "fondoPersonajes").setOrigin(0);

    let cartelPersonajes = this.add
    .image(940, 135, APIJuego.lenguage + "_personajes")
    .setScale(0.73)

    let clickButtonJefe = this.add
    .image(660, 380, APIJuego.lenguage + "_jefe")
    .setScale(0.3)
    .setInteractive()
    .on("pointerdown", () => this.scene.start("jefe"))

    let clickButtonDistancia = this.add
    .image(1210, 380, APIJuego.lenguage + "_distancia")
    .setScale(0.3)
    .setInteractive()
    .on("pointerdown", () => this.scene.start("distancia"))

    let clickButtonDefensor = this.add
    .image(940, 520, APIJuego.lenguage + "_defensor")
    .setScale(0.3)
    .setInteractive()
    .on("pointerdown", () => this.scene.start("defensor"))

    let clickButtonVelocista = this.add
    .image(660, 640, APIJuego.lenguage + "_velocista")
    .setScale(0.3)
    .setInteractive()
    .on("pointerdown", () => this.scene.start("velocista"))

    let clickButtonAtacante = this.add
    .image(1210, 640, APIJuego.lenguage + "_atacante")
    .setScale(0.3)
    .setInteractive()
    .on("pointerdown", () => this.scene.start("atacante"))

    let clickButtonOK = this.add
      .image(940, 780, "OK")
      .setScale(0.3)
      .setInteractive()
      .on("pointerdown", () => this.scene.start("tutorial"));

    let clickButtonIdioma = this.add
      .image(520, 780, APIJuego.lenguage === "spanish" ? "english" : "spanish")
      .setScale(0.23)
      .setInteractive()
      .on("pointerdown", function () {
        let lenguage = APIJuego.setLenguage();
        cartelPersonajes.setTexture(lenguage + "_personajes")
        clickButtonJefe.setTexture(lenguage + "_jefe")
        clickButtonDistancia.setTexture(lenguage + "_distancia")
        clickButtonDefensor.setTexture(lenguage + "_defensor")
        clickButtonVelocista.setTexture(lenguage + "_velocista")
        clickButtonAtacante.setTexture(lenguage + "_atacante")
        clickButtonIdioma.setTexture(
            lenguage === "spanish" ? "english" : "spanish"
          );
      });
  }
}
