import { ConfiguracionJuego, APIJuego } from "../main.js";
import Personaje from "../classPersonajes.js";

export default class Escena2 extends Phaser.Scene {
  constructor() {
    super("escena2");
  }

  create() {
    APIJuego.setEscena(this);
    APIJuego.cargarCombate();

  //------------------------ UI---------------------------------------
    //TODO -Botón para confirmar compo ?
    //TODO -Botón deshacer

    this.button = this.add.image(500, 500, "s_provisional2").setInteractive(); // BOTÓN PROVISIONAL

    this.button.on("pointerdown", function () {
      APIJuego.añadirPersonaje(1);
      //APIJuego.arrancarPersonajes();
    });

    this.button = this.add.image(800, 500, "s_provisional").setInteractive(); // BOTÓN PROVISIONAL

    this.button.on("pointerdown", function () {
      APIJuego.cambiarTipo();
    });


    // DETECCIÓN DE MÓVIL
    if (ConfiguracionJuego.isMobile) {
      console.log("Era mobile");
      ConfiguracionJuego.resize();
    }
  }

  update() {}
}
