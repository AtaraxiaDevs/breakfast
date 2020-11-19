import GameAPI from "../gameAPI.js";
import { ConfiguracionJuego, APIJuego } from "../main.js";

export default class ModoJugadores extends Phaser.Scene {
  constructor() {
    super("modoJugadores");
  }

  preload() {
    APIJuego.setEscena(this);
  }

  create() {
    var fondoPrepartida = this.add.image(0, 0, "fondoPrePartida2").setOrigin(0);

    APIJuego.reiniciarInfoJugadores()

    let mermelada = this.add.image(1075, 650, "mermelada").setScale(2);

    let mantequilla = this.add.image(1275, 650, "mantequilla").setScale(2);

    let tank = this.add.image(700, 650, "tank").setScale(0.7)

    let clickButtonUnJugador = this.add
      .image(700, 450, APIJuego.lenguage + "_unJugador")
      .setScale(0.45)
      .setInteractive()
      .on("pointerdown",function(){
        APIJuego.nJugadores = 1;
        APIJuego.escena.scene.start("login")
      })

    let clickButtonDosJugadores = this.add
      .image(1175, 450, APIJuego.lenguage + "_dosJugadores")
      .setScale(0.45)
      .setInteractive()
      .on("pointerdown",function(){
        APIJuego.nJugadores = 2;
        APIJuego.escena.scene.start("login")
      })

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
        clickButtonIdioma.setTexture(
          lenguage === "spanish" ? "english" : "spanish"
        );
      });
  }
}
