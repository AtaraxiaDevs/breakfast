import { ConfiguracionJuego, APIJuego } from "../main.js";
import Personaje from "../classPersonajes.js";

export default class Escena2 extends Phaser.Scene {
  constructor() {
    super("escena2");
  }

  create() {
    var fondo = this.add.image(0, 0, APIJuego.escenarioActual).setOrigin(0);

    APIJuego.setEscena(this);
    APIJuego.reiniciarCombate();
    APIJuego.cargarCombate();

    APIJuego.inicializarMusica("temaCombate")

    APIJuego.arrancarPersonajes();

    let flecha1 = this.add.image(100, 500, "flecha2").setScale(0.25)
    let flecha2 = this.add.image(100, 680, "flecha1").setScale(0.25)
    let flecha3 = this.add.image(100, 880, "flecha2").setScale(0.25)

    let flechaReverse1 = this.add.image(1820, 500, "flecha1").setScale(0.25)
    flechaReverse1.rotation = Math.PI
    let flechaReverse2 = this.add.image(1820, 680, "flecha2").setScale(0.25)
    flechaReverse2.rotation = Math.PI
    let flechaReverse3 = this.add.image(1820, 880, "flecha1").setScale(0.25)
    flechaReverse3.rotation = Math.PI
  }

  update() {
    APIJuego.actualizar();
  }
}
