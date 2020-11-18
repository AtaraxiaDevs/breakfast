import { ConfiguracionJuego, APIJuego } from "../main.js";

export default class PrePartida extends Phaser.Scene {
  constructor() {
    super("prePartida");
  }

  preload() {
    APIJuego.setEscena(this);
  }

  create() {
    var fondoPrePartida = this.add.image(0, 0, "fondoPrePartida").setOrigin(0);

    let cartelModoEscenario = this.add.image(
      750,
      550,
      APIJuego.lenguage + "_ModoJuegoEscenario"
    );

    let cartelModoJuego = this.add.image(1250, 450, "iconoNorm");

    let cartelEscenario = this.add.image(1250, 625, "iconoEscenarioCocina");

    let flechaDerModo = this.add.image(1400, 450, "flechaDer");

    let flechaDerEscenario = this.add.image(1400, 625, "flechaDer");

    let flechaIzqModo = this.add.image(1100, 450, "flechaIzq");

    let flechaIzqEscenario = this.add.image(1100, 625, "flechaIzq");

    let clickButtonJugar = this.add
      .image(925, 820, APIJuego.lenguage + "_jugar")
      .setScale(0.35)
      .setInteractive()
      .on("pointerdown", function () {
        APIJuego.eliminarCancion();
        APIJuego.escena.scene.start("preparacion");
      });

    let clickButtonSalir = this.add
      .image(1400, 850, "salir")
      .setInteractive()
      .on("pointerdown", function () {
        APIJuego.escena.scene.start("menuPrincipal");
      });

    let clickButtonIdioma = this.add
      .image(520, 850, APIJuego.lenguage === "spanish" ? "english" : "spanish")
      .setScale(0.25)
      .setInteractive()
      .on("pointerdown", function () {
        let lenguage = APIJuego.setLenguage();
        cartelModoEscenario.setTexture(lenguage + "_ModoJuegoEscenario");
        clickButtonJugar.setTexture(lenguage + "_jugar");
        clickButtonIdioma.setTexture(
          lenguage === "spanish" ? "english" : "spanish"
        );
      });
  }
}
