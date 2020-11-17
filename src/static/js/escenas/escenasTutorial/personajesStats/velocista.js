import { ConfiguracionJuego, APIJuego } from "../../../main.js";

export default class Velocista extends Phaser.Scene {
  constructor() {
    super("velocista");
  }

  preload() {
    APIJuego.setEscena(this);
  }

  create() {
    var fondoVelocista = this.add
      .image(0, 0, "fondoStatsPersonajes")
      .setOrigin(0);

    let cartelVelocista = this.add
      .image(940, 135, APIJuego.lenguage + "_velocista")
      .setScale(0.73);

    let personajeVelocista = this.add
      .image(700, 500, "velocista")
      .setScale(1.5);

    let textoDistancia = this.make.text({
      x: 1020,
      y: 370,
      text:
        "ATK: " +
        bdInfoPersonajes.veloz.atk +
        "\n" +
        "HP: " +
        bdInfoPersonajes.veloz.hp +
        "\n" +
        "VEL: " +
        bdInfoPersonajes.veloz.vel +
        "\n" +
        "DPS: " +
        bdInfoPersonajes.veloz.dps +
        "\n" +
        "RANGO: " +
        bdInfoPersonajes.veloz.rango +
        "\n",
      style: {
        color: "black",
        font: "45px 'Sigmar One'",
      },
    });

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
        cartelVelocista.setTexture(lenguage + "_velocista");
        clickButtonIdioma.setTexture(
          lenguage === "spanish" ? "english" : "spanish"
        );
      });
  }
}
