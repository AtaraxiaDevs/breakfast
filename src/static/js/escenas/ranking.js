import {ConfiguracionJuego, APIJuego} from "../main.js"

export default class Ranking extends Phaser.Scene {
    constructor() {
        super("ranking");
    }

    preload() {
        APIJuego.setEscena(this)
    }

    create() {
        var fondo = this.add.image(0, 0, "fondoRanking").setOrigin(0);

        let clickButtonIdioma = this.add
        .image(925, 855, "english")
        .setScale(0.2)
        .setInteractive()
        .on("pointerdown", function () {
          let lenguage = APIJuego.setLenguage();
          clickButtonIdioma.setTexture(
            lenguage === "spanish" ? "english" : "spanish"
          );
        });
    }
}