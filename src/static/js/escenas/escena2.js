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

  //------------------------ UI---------------------------------------
    //TODO -Botón para confirmar compo ?
    //TODO -Botón deshacer


    this.button = this.add.image(0, 0, "s_provisional2").setInteractive(); // BOTÓN PROVISIONAL
    
    this.button.on("pointerdown", function () {
      APIJuego.añadirPersonaje(1);
      //APIJuego.arrancarPersonajes();
    });

    this.button = this.add.image(0, 1000, "s_provisional").setInteractive(); // BOTÓN PROVISIONAL

    this.button.on("pointerdown", function () {
      APIJuego.cambiarTipo();
    });

    this.button = this.add.image(1000, 0, "s_provisional").setInteractive(); // BOTÓN PROVISIONAL

    this.button.on("pointerdown", function () {
      APIJuego.deshacer();
    });

    this.button = this.add.image(1000, 1000, "s_provisional").setInteractive(); // BOTÓN PROVISIONAL

    this.button.on("pointerdown", function () {
      APIJuego.arrancarPersonajes();
      console.log("arrancado")
    });


    // DETECCIÓN DE MÓVIL
    if (ConfiguracionJuego.isMobile) {
      console.log("Era mobile");
      ConfiguracionJuego.resize();
    }
  }

  update() {
    APIJuego.actualizar();
  }
}
