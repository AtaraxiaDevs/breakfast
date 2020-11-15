import { ConfiguracionJuego, APIJuego } from "../../main.js";

export default class Habilidades extends Phaser.Scene {
    constructor() {
        super("habilidades")
    }

    preload() {
        APIJuego.setEscena(this)
    }

    create () {
        var fondoHabilidades = this.add.image(0, 0, APIJuego.lenguage + "_fondoHabilidades").setOrigin(0)

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
          fondoHabilidades.setTexture(lenguage + "_fondoHabilidades")
          clickButtonIdioma.setTexture(
            lenguage === "spanish" ? "english" : "spanish"
          );
        });
    }
}