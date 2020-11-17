import { ConfiguracionJuego, APIJuego } from "../../main.js";

export default class Fases extends Phaser.Scene {
    constructor() {
        super("fases")
    }

    preload() {
        APIJuego.setEscena(this);
    }

    create() {
        var fondoFases = this.add.image(0, 0, APIJuego.lenguage + "_fondoFases").setOrigin(0)

        let clickButtonOK = this.add
        .image(930, 920, "OK")
        .setScale(0.3)
        .setInteractive()
        .on("pointerdown", () => this.scene.start("tutorial"));

        let clickButtonIdioma = this.add
        .image(350, 920, APIJuego.lenguage === "spanish" ? "english" : "spanish")
        .setScale(0.23)
        .setInteractive()
        .on("pointerdown", function () {
          let lenguage = APIJuego.setLenguage();
          fondoFases.setTexture(lenguage + "_fondoFases")
          clickButtonIdioma.setTexture(
            lenguage === "spanish" ? "english" : "spanish"
          );
        });
    }
}