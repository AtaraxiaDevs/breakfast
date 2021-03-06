import { ConfiguracionJuego, APIJuego } from "../../../main.js";

export default class Atacante extends Phaser.Scene {
  constructor() {
    super("atacante");
  }

  preload() {
    APIJuego.setEscena(this);
  }

  create() {
    var fondoAtacante = this.add
      .image(0, 0, "fondoStatsPersonajes")
      .setOrigin(0);

    let cartelAtacante = this.add
      .image(940, 135, APIJuego.lenguage + "_atacante")
      .setScale(0.73);

    let personajeAtacante = this.add.image(700, 500, "atacante").setScale(1.5);

    let textoAtacante = this.make.text({
      x: 1020,
      y: 370,
      text:
        "ATK: " +
        bdInfoPersonajes.atacante.atk +
        "\n" +
        "HP: " +
        bdInfoPersonajes.atacante.hp +
        "\n" +
        "VEL: " +
        bdInfoPersonajes.atacante.vel +
        "\n" +
        "DPS: " +
        bdInfoPersonajes.atacante.dps +
        "\n" +
        "RANGO: " +
        bdInfoPersonajes.atacante.rango +
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
        cartelAtacante.setTexture(lenguage + "_atacante");
        clickButtonIdioma.setTexture(
          lenguage === "spanish" ? "english" : "spanish"
        );
      });
  }
}
