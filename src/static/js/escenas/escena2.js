import { ConfiguracionJuego, APIJuego } from "../main.js";
import Personaje from "../classPersonajes.js";

export default class Escena2 extends Phaser.Scene {
  constructor() {
    super("escena2");
  }

  create() {
    var fondo = this.add.image(0, 0, "fondoJuego").setOrigin(0);


    APIJuego.setEscena(this);
    APIJuego.reiniciarCombate();
    APIJuego.cargarCombate();

    APIJuego.activarMusica("temaCombate")

    APIJuego.arrancarPersonajes();

 
   
  }

  update() {
    APIJuego.actualizar();
  }
}
