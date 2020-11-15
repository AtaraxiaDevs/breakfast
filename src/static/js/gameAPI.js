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
    this.escena.load.image("fondoMP", "assets/menuPrincipal/MenuFinalSinBotones.png");
    this.escena.load.image("spanish", "assets/menuPrincipal/ESPAÑA.png");
    this.escena.load.image("english", "assets/menuPrincipal/GB.png");
    this.escena.load.image("spanish_jugar", "assets/menuPrincipal/JUGAR.png");
    this.escena.load.image("english_jugar", "assets/menuPrincipal/PLAY.png");
    this.escena.load.image("ranking", "assets/menuPrincipal/RANKING.png");
    this.escena.load.image("spanish_tienda", "assets/menuPrincipal/TIENDA.png");
    this.escena.load.image("english_tienda", "assets/menuPrincipal/SHOP.png");
    this.escena.load.image("soundOff", "assets/menuPrincipal/SoundOFF.png");
    this.escena.load.image("soundOn", "assets/menuPrincipal/SoundON.png");
    this.escena.load.image("tutorial", "assets/menuPrincipal/TUTORIAL.png");
    this.escena.load.image("spanish_creditos", "assets/menuPrincipal/CREDITOS.png");
    this.escena.load.image("english_creditos", "assets/menuPrincipal/CREDITS.png");
    this.escena.load.image("sonidoOn", "assets/menuPrincipal/SoundON.png");
    this.escena.load.image("sonidoOff", "assets/menuPrincipal/SoundOFF.png");
    this.escena.load.image("salir", "assets/menuPrincipal/Salir.png");

    // --------------- ASSETS RANKING -----------------
    this.escena.load.image("fondoRanking", "assets/ranking/InterfazRanking10Base.png");
    this.escena.load.image("OK", "assets/ranking/OK.png")

    // --------------- ASSETS CRÉDITOS -----------------
    this.escena.load.image("fondoCreditos", "assets/creditos/InterfazBaseCreditos.png");
    this.escena.load.image("spanish_contacto", "assets/creditos/Contacto.png");
    this.escena.load.image("english_contacto", "assets/creditos/Contact.png");
    this.escena.load.image("spanish_desarrolladores", "assets/creditos/Desarrolladores.png");
    this.escena.load.image("english_desarrolladores", "assets/creditos/Developers.png");
    this.escena.load.image("twitter", "assets/creditos/twitter.png");
    this.escena.load.image("web", "assets/creditos/web.png");
    this.escena.load.image("youtube", "assets/creditos/youtube.png");

    // --------------- ASSETS TIENDA -----------------
    this.escena.load.image("fondoTiendaComprar", "assets/tienda/InterfazTiendaComprarBase.png")
    this.escena.load.image("fondoTiendaSkin", "assets/tienda/InterfazTiendaSkinBase.png")
    this.escena.load.image("spanish_comprar", "assets/tienda/Comprar.png")
    this.escena.load.image("english_comprar", "assets/tienda/Buy.png")
    this.escena.load.image("spanish_comprarNoSelect", "assets/tienda/ComprarNoSelect.png")
    this.escena.load.image("english_comprarNoSelect", "assets/tienda/BuyNoSelect.png")
    this.escena.load.image("spanish_confirmar", "assets/tienda/Confirmar.png")
    this.escena.load.image("english_confirmar", "assets/tienda/confirm.png")
    this.escena.load.image("spanish_premios", "assets/tienda/premios.png")
    this.escena.load.image("english_premios", "assets/tienda/Rewards.png")
    this.escena.load.image("spanish_premiosNoSelect", "assets/tienda/PremiosNoSelect.png")
    this.escena.load.image("english_premiosNoSelect", "assets/tienda/rewardsNoSelect.png")
    this.escena.load.image("skins", "assets/tienda/Skins.png")
    this.escena.load.image("skinsNoSelect", "assets/tienda/SkinNoSelect.png")
  

    // --------------- ASSETS TUTORIAL -----------------
    this.escena.load.image("fondoTutorial", "assets/tutorial/InterfazBaseTutorial.png");
    this.escena.load.image("spanish_personajes", "assets/tutorial/personajes.png");
    this.escena.load.image("english_personajes", "assets/tutorial/characters.png");
    this.escena.load.image("spanish_controles", "assets/tutorial/Controles.png");
    this.escena.load.image("english_controles", "assets/tutorial/Controls.png");
    this.escena.load.image("spanish_descripcion", "assets/tutorial/Descripcion.png");
    this.escena.load.image("english_descripcion", "assets/tutorial/Description.png");
    this.escena.load.image("spanish_fases", "assets/tutorial/fases.png");
    this.escena.load.image("english_fases", "assets/tutorial/Rounds.png");
    this.escena.load.image("spanish_habilidades", "assets/tutorial/Habilidades.png");
    this.escena.load.image("english_habilidades", "assets/tutorial/Skills.png");

    // --------------- ASSETS TUTORIAL --> Descripción -----------------
    this.escena.load.image("spanish_fondoDescripcion", "assets/tutorial/descripcion/InterfazBaseDescripcionESP.png")
    this.escena.load.image("english_fondoDescripcion", "assets/tutorial/descripcion/InterfazBaseDescriptionENG.png")

    // --------------- ASSETS TUTORIAL --> Controles -----------------
    this.escena.load.image("fondoControles", "assets/tutorial/controles/InterfazBaseControles.png")
    this.escena.load.image("spanish_ordenador", "assets/tutorial/controles/Ordenador.png")
    this.escena.load.image("english_ordenador", "assets/tutorial/controles/Computer.png")
    this.escena.load.image("spanish_raton", "assets/tutorial/controles/raton.png")
    this.escena.load.image("english_raton", "assets/tutorial/controles/Mouse.png")
    this.escena.load.image("spanish_movil", "assets/tutorial/controles/Movil.png")
    this.escena.load.image("english_movil", "assets/tutorial/controles/Mobile.png")
    this.escena.load.image("spanish_tactil", "assets/tutorial/controles/tactil.png")
    this.escena.load.image("english_tactil", "assets/tutorial/controles/Tactile.png")

    // --------------- ASSETS TUTORIAL --> Habilidades -----------------
    this.escena.load.image("spanish_fondoHabilidades", "assets/tutorial/habilidades/InterfazHabilidadesEspañolBASE.png")
    this.escena.load.image("english_fondoHabilidades", "assets/tutorial/habilidades/InterfazHabilidadesInglesBASE.png")

    // --------------- ASSETS TUTORIAL --> Personajes -----------------
    this.escena.load.image("fondoPersonajes", "assets/tutorial/personajes/InterfazBasePersonajes.png")
    this.escena.load.image("fondoStatsPersonajes", "assets/tutorial/personajes/InterfazBaseStatsPersonajes.png")
    this.escena.load.image("spanish_atacante", "assets/tutorial/personajes/Atacante.png")
    this.escena.load.image("english_atacante", "assets/tutorial/personajes/Attacker.png")
    this.escena.load.image("spanish_defensor", "assets/tutorial/personajes/Defensor.png")
    this.escena.load.image("english_defensor", "assets/tutorial/personajes/Defender.png")
    this.escena.load.image("spanish_distancia", "assets/tutorial/personajes/Distancia.png")
    this.escena.load.image("english_distancia", "assets/tutorial/personajes/Distance.png")
    this.escena.load.image("spanish_velocista", "assets/tutorial/personajes/Velocista.png")
    this.escena.load.image("english_velocista", "assets/tutorial/personajes/Sprinter.png")
    this.escena.load.image("spanish_jefe", "assets/tutorial/personajes/Jefe.png")
    this.escena.load.image("english_jefe", "assets/tutorial/personajes/Boss.png")

    // --------------- ASSETS PREPARACION -----------------
    this.escena.load.image("fondoPreparacion", "assets/preparacion/InterfazBasePreparacion.png")
    this.escena.load.image("flecha", "assets/preparacion/flecha3.png")
    this.escena.load.image("spanish_deshacer", "assets/preparacion/Deshacer.png")
    this.escena.load.image("english_deshacer", "assets/preparacion/Undo.png")
    this.escena.load.image("spanish_comenzar", "assets/preparacion/Comenzar.png")
    this.escena.load.image("english_comenzar", "assets/preparacion/Start.png")
    this.escena.load.image("spanish_unidades", "assets/preparacion/EligeTusUnidades.png")
    this.escena.load.image("english_unidades", "assets/preparacion/ChooseYourUnits.png")
    this.escena.load.image("atacante", "assets/preparacion/atacante.png")
    this.escena.load.image("defensor", "assets/preparacion/Defensor.png")
    this.escena.load.image("distancia", "assets/preparacion/Distancia.png")
    this.escena.load.image("velocista", "assets/preparacion/Velocista.png")

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
      new Personaje(this.personajeActual, 200, 400, this.escena,+1,this.idCount)
    );
    this.ultimoColocado = this.idCount;
    this.idCount++;
    

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
          arrayAux[j].body.reset(inicio + j*125, 400);
        }
      }

      for(let i =0;i<this.combate.length;i++){
        let arrayAux = this.combate[i].filter(obj => obj.direction == -1 )
        arrayAux = arrayAux.sort(function(a,b){
          return a.priority - b.priority;
        })
        let inicio = 1500
        
        for(let j = 0;j<arrayAux.length;j++){
          arrayAux[j].body.reset(inicio - j*125, 400);
        }
      }
  }

    deshacer = function(){
      this.eliminarPersonaje(this.ultimoColocado)
      this.reeordenarFilas();
    }

    eliminarPersonaje = function(id){
      for(let i = 0;i< this.combate.length;i++){
        for(let j = 0;i< this.combate[i].length;j++){
          console.log("I: " + i + " y J: " + j)
          if(this.combate[i][j] == undefined){break}
            if(this.combate[i][j].id==id){
              this.combate[i][j].destroy()
              this.combate[i].splice(j,1);
              this.idCount--;
              this.ultimoColocado = "m"
              break
            }
         
        }
      }
      console.log("Eliminado")
    }

    enemigoCercano = function(id,x,direction){
        let masCercano = undefined;
        let fila = undefined;

        for (let i = 0; i < this.combate.length; i++) {
          for(let j=0;j<this.combate[i].length;j++)
            if(this.combate[i][j].id == id){
              fila = i;
            }
        }

        if(fila != undefined){
        for(let j = 0;j<this.combate[fila].length;j++){
            if(this.combate[fila][j].direction != direction){
                if(masCercano < Math.abs(this.combate[fila][j].x - x) || masCercano == undefined){
                    masCercano = {
                      id: this.combate[fila][j].id,
                      separacion: Math.abs(this.combate[fila][j].x - x)
                    }
                }
            }
        }
      }

        return masCercano;

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
        new Personaje(bdPuzles[this.puzleActual].enemigos[i].tipo, 200, 400, this.escena,-1,this.idCount))
        this.idCount++;
    }

    this.reeordenarFilas();
    
  }
  cargarCombate = function(){
    for(let i = 0;i<3;i++){
      this.combate[i] = [];
    }
    this.cargarPuzle();

  }

  actualizar = function(){
    for (let i = 0; i < this.combate.length; i++) {
      for(let j=0;j<this.combate[i].length;j++)
      this.combate[i][j].update();
    }
  }

  hacerDaño = function(id,daño){
    for (let i = 0; i < this.combate.length; i++) {
      for(let j=0;j<this.combate[i].length;j++)
        if(this.combate[i][j].id == id){
            this.combate[i][j].hpActual = this.combate[i][j].hpActual-daño
        }
    }
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
    this.dinero = "1000"
    this.ultimoColocado = "";
    this.idCount = 0;
  }
}
