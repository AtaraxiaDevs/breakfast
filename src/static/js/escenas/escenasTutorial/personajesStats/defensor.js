import { ConfiguracionJuego, APIJuego } from "../../../main.js";

export default class Defensor extends Phaser.Scene {
  constructor() {
    super("defensor");
  }

  preload() {
    APIJuego.setEscena(this);
  }

  create() {
    var fondoDefensor = this.add
      .image(0, 0, "fondoStatsPersonajes")
      .setOrigin(0);

    let cartelDefensor = this.add
      .image(940, 135, APIJuego.lenguage + "_defensor")
      .setScale(0.73);

    let personajeDefensor = this.add.image(700, 500, "tank").setScale(1.5);

    let textoDefensor = this.make.text({
      x: 1020,
      y: 370,
      text:
        "ATK: " +
        bdInfoPersonajes.tank.atk +
        "\n" +
        "HP: " +
        bdInfoPersonajes.tank.hp +
        "\n" +
        "VEL: " +
        bdInfoPersonajes.tank.vel +
        "\n" +
        "DPS: " +
        bdInfoPersonajes.tank.dps +
        "\n" +
        "RANGO: " +
        bdInfoPersonajes.tank.rango +
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
        cartelDefensor.setTexture(lenguage + "_defensor");
        clickButtonIdioma.setTexture(
          lenguage === "spanish" ? "english" : "spanish"
        );
      });
  }
}
