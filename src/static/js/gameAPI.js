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
    this.escena.load.image("spanish", "assets/misc/ESPAÑA.png");
    this.escena.load.image("english", "assets/misc/GB.png");
    this.escena.load.image("spanish_jugar", "assets/misc/JUGAR.png");
    this.escena.load.image("english_jugar", "assets/misc/PLAY.png");
    this.escena.load.image("ranking", "assets/misc/RANKING.png");
    this.escena.load.image("spanish_tienda", "assets/misc/TIENDA.png");
    this.escena.load.image("english_tienda", "assets/misc/SHOP.png");
    this.escena.load.image("soundOff", "assets/misc/SoundOFF.png");
    this.escena.load.image("soundOn", "assets/misc/SoundON.png");
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
        this.personajeActual = "atacante";
        break;
      case "atacante":
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
  añadirPersonaje = function (fila) {
    this.combate[fila-1].push(
      new Personaje(this.personajeActual, 200, 400, this.escena,+1)
    );

    this.reeordenarFilas();
    
  };

  reeordenarFilas = function(){
      for(let i =0;i<this.combate.length;i++){
        let arrayAux = this.combate[i].filter(obj => obj.direction == +1 )
        arrayAux = arrayAux.sort(function(a,b){
          return a.priority - b.priority;
        })
        let inicio = 100
        
        for(let j = 0;j<arrayAux.length;j++){
          arrayAux[j].body.reset(inicio + j*500, 400);
        }
      }

      for(let i =0;i<this.combate.length;i++){
        let arrayAux = this.combate[i].filter(obj => obj.direction == -1 )
        arrayAux = arrayAux.sort(function(a,b){
          return a.priority - b.priority;
        })
        let inicio = 1500
        
        for(let j = 0;j<arrayAux.length;j++){
          arrayAux[j].body.reset(inicio - j*500, 400);
        }
      }
  }


  //Función encargada de recorrer cada personaje y activarlos para que empiecen a luchar.
  arrancarPersonajes = function () {
    for (let i = 0; i < this.combate.length; i++) {
      for(let j=0;j<this.combate[i].length;j++)
      this.combate[i][j].arrancar();
    }
  };

  //------------------------------ COMBATE --------------------------------------------
  cargarPuzle = function(){
   // console.log(bdPuzles[this.puzleActual].enemigos[0].linea)
    for(let i in bdPuzles[this.puzleActual].enemigos){
      this.combate[bdPuzles[this.puzleActual].enemigos[i].linea-1].push(
        new Personaje(bdPuzles[this.puzleActual].enemigos[i].tipo, 200, 400, this.escena,-1))
    }

    this.reeordenarFilas();
    
  }
  cargarCombate = function(){
    for(let i = 0;i<3;i++){
      this.combate[i] = [];
    }
    this.cargarPuzle();

  }

  
  

  cargarEnemigos = function(){

  }

  //------------------------ UI---------------------------------------
  //TODO -Botón para confirmar compo ?
  //TODO -Botón deshacer

  setLenguage = function () {
      if (this.lenguage === "spanish") {
          this.lenguage = "english"
      } else {
          this.lenguage = "spanish"
      }
      return this.lenguage
  }

  constructor() {
    this.puzleActual = "1";
    this.combate = []; // Lista con todos los personajes de la escena
    this.personajeActual = "veloz";
    this.lenguage = "spanish";
  }
}
