import Personaje from "./classPersonajes.js";
export default class GameAPI {
  //-------------------------- UTILES PARA EL RENDERIZADO ---------------------------------------
  cargarSprites = function () {
    for (let i in dbAnimations) {
    }
  };

  // Función encargada de cargar todos las imágenes  de la pantalla de partida.
  cargarAssets = function () {
    this.escena.load.image("s_provisional", "assets/images/s_provisional.png");
    this.escena.load.image("s_provisional2", "assets/images/s_provisional2.png");

    // --------------- ASSETS MENU PRINCIPAL -----------------
    this.escena.load.image("fondo", "assets/images/MenuFinalSinBotones.png");
    this.escena.load.image("espanya", "assets/misc/ESPAÑA.png");
    this.escena.load.image("gb", "assets/misc/GB.png");
    this.escena.load.image("jugar", "assets/misc/JUGAR.png");
    this.escena.load.image("play", "assets/misc/PLAY.png");
    this.escena.load.image("ranking", "assets/misc/RANKING.png");
    this.escena.load.image("shop", "assets/misc/SHOP.png");
    this.escena.load.image("soundOff", "assets/misc/SoundOFF.png");
    this.escena.load.image("soundOn", "assets/misc/SoundON.png");
    this.escena.load.image("tienda", "assets/misc/TIENDA.png");
    this.escena.load.image("tutorial", "assets/misc/TUTORIAL.png");

    // ---------------- SPRITES ANIMACIONES -------------------
    for (let i in dbAnimations) {
      for (let j in dbAnimations[i].animaciones) {
        this.escena.load.spritesheet(
          dbAnimations[i].animaciones[j].spritesheet,
          "assets/animations/" + dbAnimations[i].animaciones[j].src,
          { frameWidth: 500, frameHeight: 500 }
        );
      }
    }
  };

  cambiarTipo() {
    switch (this.personajeActual) {
      case "veloz":
        this.personajeActual = "tank";
        break;
      case "tank":
        this.personajeActual = "distancia";
        break;
      case "distancia":
        this.personajeActual = "caballero";
        break;
      case "caballero":
        this.personajeActual = "veloz";
        break;
    }

    console.log(this.personajeActual);
  }

  cargarAnims = function () {
    for (let i in dbAnimations) {
      for (let j in dbAnimations[i].animaciones) {
        let animacionActual = dbAnimations[i].animaciones[j];
        this.escena.anims.create({
          key: animacionActual.animationName,
          frames: this.escena.anims.generateFrameNumbers(
            animacionActual.spritesheet,
            { start: animacionActual.startFrame, end: animacionActual.endFrame }
          ),
          frameRate: animacionActual.frameRate,
          repeat: animacionActual.repeat,
        });
      }
    }
  };

  //Parámetros: objeto Escena de phaser
  //Función encargada de reapuntar la escena para poder trabajar con ella
  setEscena = function (escena) {
    this.escena = escena;
  };

  //-------------------------------------------------------------------------------------------------
  //------------------------------ PERSONAJES ------------------------------------------------------

  //* Parámetros: string con el tipo de personaje
  //Función encargada de añadir a la lista de personajes de la escena addemás de dibujarlo por pantalla.
  añadirPersonaje = function () {
    this.personajesRenderizados.push(
      new Personaje(this.personajeActual, 200, 400, this.escena)
    );
  };

  //Función encargada de recorrer cada personaje y activarlos para que empiecen a luchar.
  arrancarPersonajes = function () {
    for (let i = 0; i < this.personajesRenderizados.length; i++) {
      this.personajesRenderizados[i].arrancar();
    }
  };

  //------------------------ UI---------------------------------------
  //TODO -Botón para cambiar personaje
  //TODO -Botón para añadir personaje a la línea
  //TODO -Botón para confirmar compo ?
  //TODO -Botón deshacer

  constructor() {
    this.personajesRenderizados = []; // Lista con todos los personajes de la escena
    this.personajeActual = "veloz";
  }
}
