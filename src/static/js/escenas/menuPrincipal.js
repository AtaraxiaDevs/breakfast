import { ConfiguracionJuego, APIJuego } from "../main.js";

export default class MenuPrincipal extends Phaser.Scene {
  constructor() {
    super("menuPrincipal");
  }

  preload() {
    APIJuego.setEscena(this);
  }

  create() {
    APIJuego.inicializarMusica("temaInicio")

    var fondo = this.add.image(0, 0, "fondoMP").setOrigin(0);

    let clickButtonJugar = this.add
      .image(925, 570, APIJuego.lenguage + "_jugar")
      .setScale(0.4)
      .setInteractive()
      .on("pointerdown", () => this.scene.start("login"));

    let clickButtonCreditos = this.add
      .image(1240, 410, APIJuego.lenguage + "_creditos")
      .setScale(0.3)
      .setInteractive()
      .on("pointerdown", () => this.scene.start("creditos"));

    let clickButtonTienda = this.add
      .image(615, 410, APIJuego.lenguage + "_tienda")
      .setScale(0.3)
      .setInteractive()
      .on("pointerdown", () => this.scene.start("tiendaSkins"));

    let clickButtonRanking = this.add
      .image(605, 730, "ranking")
      .setScale(0.3)
      .setInteractive()
      .on("pointerdown", () => this.scene.start("ranking"));

    let clickButtonTutorial = this.add
      .image(1240, 730, "tutorial")
      .setScale(0.3)
      .setInteractive()
      .on("pointerdown", () => this.scene.start("tutorial"));

    let clickButtonSonido = this.add
      .image(750, 870, APIJuego.sonidoActivado ? "sonidoOn" : "sonidoOff")
      .setInteractive()
      .on("pointerdown", function () {
        APIJuego.controlMusica();
        clickButtonSonido.setTexture(
          APIJuego.sonidoActivado ? "sonidoOn" : "sonidoOff"
        );
      });

    let clickButtonIdioma = this.add
      .image(925, 855, APIJuego.lenguage === "spanish" ? "english" : "spanish")
      .setScale(0.2)
      .setInteractive()
      .on("pointerdown", function () {
        let lenguage = APIJuego.setLenguage();
        clickButtonJugar.setTexture(lenguage + "_jugar");
        clickButtonTienda.setTexture(lenguage + "_tienda");
        clickButtonCreditos.setTexture(lenguage + "_creditos");
        clickButtonIdioma.setTexture(
          lenguage === "spanish" ? "english" : "spanish"
        );
      });
  }
}
