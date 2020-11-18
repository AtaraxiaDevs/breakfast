import { ConfiguracionJuego, APIJuego } from "../main.js";

export default class Tutorial extends Phaser.Scene {
  constructor() {
    super("tutorial");
  }

  preload() {
    APIJuego.setEscena(this);
  }

  create() {
      var fondo = this.add.image(0, 0, "fondoTutorial").setOrigin(0);

      let clickButtonDescripcion = this.add
      .image(675, 420, APIJuego.lenguage + "_descripcion")
      .setScale(0.35)
      .setInteractive()
      .on("pointerdown", () => this.scene.start("descripcion"))

      let clickButtonControles = this.add
      .image(1200, 420, APIJuego.lenguage + "_controles")
      .setScale(0.35)
      .setInteractive()
      .on("pointerdown", () => this.scene.start("controles"))

      let clickButtonPersonajes = this.add
      .image(925, 570, APIJuego.lenguage + "_personajes")
      .setScale(0.35)
      .setInteractive()
      .on("pointerdown", () => this.scene.start("personajes"))

      let clickButtonHabilidades = this.add
      .image(675, 710, APIJuego.lenguage + "_habilidades")
      .setScale(0.35)
      .setInteractive()
      .on("pointerdown", () => this.scene.start("habilidades"))

      let clickButtonFases = this.add
      .image(1200, 710, APIJuego.lenguage + "_fases")
      .setScale(0.35)
      .setInteractive()
      .on("pointerdown", () => this.scene.start("fases"))

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
        clickButtonDescripcion.setTexture(lenguage + "_descripcion")
        clickButtonControles.setTexture(lenguage + "_controles")
        clickButtonPersonajes.setTexture(lenguage + "_personajes")
        clickButtonHabilidades.setTexture(lenguage + "_habilidades")
        clickButtonFases.setTexture(lenguage + "_fases")
        clickButtonIdioma.setTexture(
          lenguage === "spanish" ? "english" : "spanish"
        );
      });
  }
}
