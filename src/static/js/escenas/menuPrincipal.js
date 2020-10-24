import { ConfiguracionJuego, APIJuego } from "../main.js";

export default class MenuPrincipal extends Phaser.Scene {
  constructor() {
    super("menuPrincipal");
  }

  preload() {
    APIJuego.setEscena(this);
  }

  create() {
    var fondo = this.add.image(0, 0, "fondo").setOrigin(0);

    this.clickButtonJugar = this.add
      .image(925, 590, "spanish_jugar")
      .setScale(0.4)
      .setInteractive()
      .on("pointerdown", () => this.scene.start("escena2"));

    this.clickButtonTienda = this.add
      .image(615, 410, "spanish_tienda")
      .setScale(0.3);

    this.clickButtonRanking = this.add.image(605, 730, "ranking").setScale(0.3);

    this.clickButtonTutorial = this.add
      .image(1240, 730, "tutorial")
      .setScale(0.3);

    this.clickButtonIdioma = this.add
      .image(925, 855, "gb")
      .setScale(0.2)
      .setInteractive()
      .on("pointerdown", function () {
        let lenguage = APIJuego.setLenguage();
        this.clickButtonJugar.setTexture("english_jugar");
      });
  }
}
