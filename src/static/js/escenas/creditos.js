import { ConfiguracionJuego, APIJuego } from "../main.js";

export default class Creditos extends Phaser.Scene {
  constructor() {
    super("creditos");
  }

  preload() {
    APIJuego.setEscena(this);
  }

  create() {
    var fondo = this.add.image(0, 0, "fondoCreditos").setOrigin(0);

    let cartelCreditos = this.add
      .image(940, 160, APIJuego.lenguage + "_creditos")
      .setScale(0.62);

    let cartelDesarrolladores = this.add
      .image(650, 360, APIJuego.lenguage + "_desarrolladores")
      .setScale(0.3);

    let cartelContacto = this.add
      .image(1250, 360, APIJuego.lenguage + "_contacto")
      .setScale(0.3);

    let cartelYoutube = this.add.image(1250, 500, "youtube").setScale(0.3);

    let cartelTwitter = this.add.image(1250, 625, "twitter").setScale(0.3);

    let cartelWeb = this.add.image(1250, 750, "web").setScale(0.3);

    let clickButtonSonido = this.add
      .image(750, 870, "sonidoOn")
      .setInteractive()
      .on("pointerdown", function () {
        clickButtonSonido.setTexture("sonidoOff");
      });

    let clickButtonSalir = this.add
      .image(1100, 870, "salir")
      .setScale(1.2)
      .setInteractive()
      .on("pointerdown", () => this.scene.start("menuPrincipal"));

    let clickButtonIdioma = this.add
      .image(925, 855, APIJuego.lenguage === "spanish" ? "english" : "spanish")
      .setScale(0.2)
      .setInteractive()
      .on("pointerdown", function () {
        let lenguage = APIJuego.setLenguage();
        cartelDesarrolladores.setTexture(lenguage + "_desarrolladores");
        cartelContacto.setTexture(lenguage + "_contacto");
        cartelCreditos.setTexture(lenguage + "_creditos");
        clickButtonIdioma.setTexture(
          lenguage === "spanish" ? "english" : "spanish"
        );
      });
  }
}
