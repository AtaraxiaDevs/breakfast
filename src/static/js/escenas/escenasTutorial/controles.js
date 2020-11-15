import { ConfiguracionJuego, APIJuego } from "../../main.js";

export default class Controles extends Phaser.Scene {
  constructor() {
    super("controles");
  }

  preload() {
    APIJuego.setEscena(this);
  }

  create() {
    var fondoControles = this.add.image(0, 0, "fondoControles").setOrigin(0);

    let cartelControles = this.add
      .image(940, 135, APIJuego.lenguage + "_controles")
      .setScale(0.72);

    let cartelOrdenador = this.add
      .image(660, 350, APIJuego.lenguage + "_ordenador")
      .setScale(0.35);

    let cartelMovil = this.add
      .image(1200, 350, APIJuego.lenguage + "_movil")
      .setScale(0.35);

    let cartelRaton = this.add.image(660, 650, APIJuego.lenguage + "_raton");

    let cartelTactil = this.add.image(1200, 650, APIJuego.lenguage + "_tactil");

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
        cartelControles.setTexture(lenguage + "_controles");
        cartelOrdenador.setTexture(lenguage + "_ordenador");
        cartelMovil.setTexture(lenguage + "_movil");
        cartelRaton.setTexture(lenguage + "_raton");
        cartelTactil.setTexture(lenguage + "_tactil");
        clickButtonIdioma.setTexture(
          lenguage === "spanish" ? "english" : "spanish"
        );
      });
  }
}
