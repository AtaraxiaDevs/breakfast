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
    this.escena.load.image("EscenarioCocina","assets/partida/InterfazBasePartida.png");
    this.escena.load.image("EscenarioRestaurante","assets/partida/InterfazBasePartida2.png");


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
    this.escena.load.image("spanish_fondoTiendaPremios", "assets/tienda/InterfazTiendaPremiosBaseEspañol.png")
    this.escena.load.image("english_fondoTiendaPremios", "assets/tienda/InterfazTiendaPremiosBaseInglés.png")
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
    this.escena.load.image("english_fondoDescripcion", "assets/tutorial/descripcion/InterfazBaseDescripcionENG.png")

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
    this.escena.load.image("mantequilla", "assets/buffs/SpriteBuffMantequilla/mante1.png")
    this.escena.load.image("mermelada", "assets/buffs/SpriteBuffMermelada/jam1.png")

  // --------------- ASSETS TUTORIAL --> Fases -----------------
    this.escena.load.image("spanish_fondoFases", "assets/tutorial/fases/InterfazBaseFasesESP.png")
    this.escena.load.image("english_fondoFases", "assets/tutorial/fases/InterfazBaseFasesENG.png")

    // --------------- ASSETS LOGIN -----------------
    this.escena.load.image("fondoLogin", "assets/login/InterfazRegistroBase.png")
    this.escena.load.image("spanish_nombre", "assets/login/IntroduceTuNombre.png")    
    this.escena.load.image("english_nombre", "assets/login/IntroduceYourNickname.png")

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
    this.escena.load.image("tank", "assets/preparacion/Defensor.png")
    this.escena.load.image("distancia", "assets/preparacion/Distancia.png")
    this.escena.load.image("veloz", "assets/preparacion/Velocista.png")
    this.escena.load.image("spanish_cambiar", "assets/preparacion/cambiar.png")
    this.escena.load.image("english_cambiar", "assets/preparacion/Change.png")

    // --------------- ASSETS RESULTADOS -----------------
    this.escena.load.image("fondoResultados", "assets/resultados/InterfazBaseRecuentoRonda.png")
    this.escena.load.image("spanish_jugarOtraVez", "assets/resultados/JugarOtraVez.png")
    this.escena.load.image("english_jugarOtraVez", "assets/resultados/PlayAgain.png")
    this.escena.load.image("spanish_resultados", "assets/resultados/Resultado.png")
    this.escena.load.image("english_resultados", "assets/resultados/Result.png")

    // --------------- ASSETS PREPARTIDA -----------------
    this.escena.load.image("fondoPrePartida", "assets/prePartida/InterfazBasePrePartida.png")
    this.escena.load.image("flechasJuntas", "assets/prePartida/flechasJuntas.png")
    this.escena.load.image("spanish_ModoJuegoEscenario", "assets/prePartida/ModoJuegoEscenario.png")
    this.escena.load.image("english_ModoJuegoEscenario", "assets/prePartida/GameModeScene.png")
    this.escena.load.image("icono_EscenarioCocina", "assets/prePartida/IconoEscenarioCocina.png")
    this.escena.load.image("icono_EscenarioRestaurante", "assets/prePartida/IconoEscenarioRestaurante.png")
    this.escena.load.image("icono_Normal", "assets/prePartida/iconoNorm.png")
    this.escena.load.image("icono_Halloween", "assets/prePartida/iconoHallo.png")
    this.escena.load.image("spanish_unJugador", "assets/prePartida/Unjugador.png")
    this.escena.load.image("english_unJugador", "assets/prePartida/OnePlayer.png")
    this.escena.load.image("spanish_dosJugadores", "assets/prePartida/DosJugadores.png")
    this.escena.load.image("english_dosJugadores", "assets/prePartida/TwoPlayer.png")

    // --------------- ASSETS PARTIDA -----------------
    this.escena.load.image("flecha1", "assets/partida/Flecha1.png")
    this.escena.load.image("flecha2", "assets/partida/Flecha2.png")

    // --------------- AUDIO -----------------
    this.escena.load.audio("temaInicio", "assets/audio/musica/temaInicio.wav");
    this.escena.load.audio("temaPreparacion", "assets/audio/musica/temaPreparacion.mp3");
    this.escena.load.audio("temaCombate", "assets/audio/musica/temaCombate.wav");

    // --------------- EFECTOS -----------------
    this.escena.load.audio("gritito1", "assets/audio/efectos/gritito1.mp3");
    this.escena.load.audio("gritito2", "assets/audio/efectos/gritito2.mp3");
    this.escena.load.audio("hit1", "assets/audio/efectos/hit.mp3");
    this.escena.load.audio("hit2", "assets/audio/efectos/hit2.mp3");
    this.escena.load.audio("hit3", "assets/audio/efectos/hit3.mp3");
    this.escena.load.audio("muerte", "assets/audio/efectos/muerte.mp3");
    this.escena.load.audio("muerte3", "assets/audio/efectos/muerte3.mp3");

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
      case "atacante":
        this.personajeActual = "tank";
        break;
      case "tank":
        this.personajeActual = "distancia";
        break;
      case "distancia":
        this.personajeActual = "veloz";
        break;
      case "veloz":
        this.personajeActual = "atacante";
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
    console.log(this.personajeActual)
    this.combate[fila-1].push(
      new Personaje(this.personajeActual, 200, 400, this.escena,+1,this.idCount)
    );
    this.ultimoColocado = this.idCount;
    this.idCount++;
    

    //this.reeordenarFilas();
    
  };

  reeordenarFilas = function(){
     
    
    let inicioX = -85;
    let inicioY = 470;
    for(let i =0;i<this.combate.length;i++){
        let arrayAux = this.combate[i].filter(obj => obj.direction == +1 )
        
  
        
        
        for(let j = 0;j<arrayAux.length;j++){
          arrayAux[j].body.reset(inicioX + j*200, inicioY + 190*i);
        }
      }

      for(let i =0;i<this.combate.length;i++){
        let arrayAux = this.combate[i].filter(obj => obj.direction == -1 )
        
        let inicioX = 2000
        
        for(let j = 0;j<arrayAux.length;j++){
          arrayAux[j].body.reset(inicioX -j*200,inicioY + 190*i);
        }
      }
  }

    deshacer = function(){

        this.eliminarPersonaje(this.ultimoColocado)
        this.colocarPreparacion();
        this.lineUp.length = this.lineUp.length - 1;
        this.dinero += this.pagoPrevio 
        this.pagoPrevio =0;
    }

    eliminarPersonaje = function(id){
      for(let i in this.combate){
        for(let j in this.combate[i]){
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
      
    }

    reiniciarVelocidades = function(id,direction){
      let linea = -1;
      for(let i in this.combate){
        for(let j in this.combate[i]){
            if(this.combate[i][j].id == id){
                linea = i;
            }
        }
      }

      for(let i in this.combate){
        for(let j in this.combate[i]){
          if(this.combate[i][j].direction == direction){
            this.combate[i][j].velocidadActual = this.combate[i][j].infoBase.vel
          }
        }
      }
    }

    personajeCercano = function(id,x,direction){
      

      let masCercano = {};
      masCercano.enemigo = ""
      masCercano.aliado = "";
      let fila = undefined;

      
      for (let i in this.combate) {
        for(let j in this.combate[i])
          if(this.combate[i][j].id == id){
            fila = i;
     
          }
      }


      let arrayAux = []
      if(fila != undefined){
          
            for(let i in this.combate[fila]){
              if((Math.sign((direction*this.combate[fila][i].x) - (direction*x))) == 1 ){
            

                arrayAux.push(this.combate[fila][i])
              }
            }
       
            arrayAux.sort(function(a,b){
              let distA = Math.abs((direction*a.x) - (direction*x))
              let distB = Math.abs((direction*b.x) - (direction*x))
              return distA-distB;
            })
        
      }
 

      if(arrayAux === undefined || arrayAux.length == 0){
    
      }else{
        for(let i in arrayAux){
          if(masCercano.aliado == ""){
            if(arrayAux[i].direction == direction){
              masCercano.aliado ={
                id: arrayAux[i].id,
                separacion: (direction*arrayAux[i].x) - (direction*x),
                direction: arrayAux[i].direction,
                vel: arrayAux[i].velocidadActual
              }
            }
         
            }

            if(masCercano.enemigo == ""){
              if(arrayAux[i].direction != direction){
                masCercano.enemigo ={
                  id: arrayAux[i].id,
                  separacion: (direction*arrayAux[i].x) - (direction*x),
                  direction: arrayAux[i].direction,
                  vel: arrayAux[i].velocidadActual
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
    for(let i in bdPuzles[this.puzleActual].enemigos){
      this.combate[bdPuzles[this.puzleActual].enemigos[i].linea-1].push(
        new Personaje(bdPuzles[this.puzleActual].enemigos[i].tipo, 200, 400, this.escena,-1,this.idCount))
        this.idCount++;
    }

    this.reeordenarFilas();


    
  }

  cargarCombate = function(){
    
    this.cargarPuzle();
    this.cargarLineUp();
    this.reeordenarFilas()
  }

  reiniciarCombate = function(){
    for(let i = 0;i<3;i++){
      this.combate[i] = [];
    }
    this.personajeActual = "atacante"
    this.precioActual = 100;
    this.idCount =0
    //this.lineUp = [];
  }

  actualizar = function(){
    for (let i in this.combate) {
      for(let j in this.combate[i])
      this.combate[i][j].update();
    }
  }

  hacerDaño = function(id,daño){
    for (let i in this.combate) {
      for(let j in this.combate[i])
        if(this.combate[i][j].id == id){
            let random = getRandom(0,2)
            let esquivar = getRandom(0,9)
            if(esquivar != 0){
              this.combate[i][j].hpActual = this.combate[i][j].hpActual-(daño*(1-random))

            }
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

  cambiarTexto = function(textObject,textoNuevo){
    textObject.setText(textoNuevo)

  }

  //---------------- PREPARACION --------------------------------
  vaciarCombate = function(){
    this.combate = [];
  }

  colocarPreparacion = function(){
    let inicioX = 1200;
    let inicioY = 300;
    for(let i =0;i<this.combate.length;i++){  
      for(let j = 0;j<this.combate[i].length;j++){
        let x = inicioX + j*150
        let y = inicioY + i*200
        this.combate[i][j].body.reset(x,y);
      }
    }
  }

  añadirLineUp = function(linea){
    this.lineUp.push({
      linea: linea,
      tipo: this.personajeActual,
    })
  }

  cargarLineUp = function(){
    for(let i in this.lineUp){
      this.combate[this.lineUp[i].linea-1].push(
        new Personaje(this.lineUp[i].tipo, 200, 400, this.escena,+1,this.idCount))
        this.idCount++;
    }
  }

  inicializarMusica = function(audio) {
    if (this.tema === undefined) {
      this.tema = this.escena.sound.add(audio, {volume: 0.25, loop: true})
      if (this.sonidoActivado) {
        this.tema.play()
      }
    }
  }

  controlMusica = function () {
    if (this.sonidoActivado) {
      this.tema.stop()
      this.sonidoActivado = false
    } else {
      this.tema.play()
      this.sonidoActivado = true
    }
  }

  eliminarCancion = function() {
    this.tema.stop();
    this.tema = undefined;
  }

  getDinero = function(){
    this.dinero = bdPuzles[this.puzleActual].dinero
  }

  pagar = function(linea){
    if(this.dinero-this.precioActual>=0){
        this.añadirPersonaje(linea)
        this.colocarPreparacion()
        this.añadirLineUp(linea)
        this.dinero -= this.precioActual 
        this.pagoPrevio = this.precioActual
    }
  }

  reiniciarLineUp = function(){
    this.lineUp = []
  }

  getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  playSonido = function (sonido) {
    this.sonido = this.escena.sound.add(sonido, {volume: 0.5});
    this.sonido.play();
  }

  cambiarModo = function (){
    if (this.modoActual == "Normal") {
      this.modoActual = "Halloween"
    } else {
      this.modoActual = "Normal"
    }
    return this.modoActual;
  }

  cambiarEscenario = function () {
    if (this.escenarioActual == "EscenarioCocina") {
      this.escenarioActual = "EscenarioRestaurante"
    } else {
      this.escenarioActual = "EscenarioCocina"
    }
    return this.escenarioActual;
  }

  randomAliado = function(){
   
   do{
    let random = this.getRandom(0,3);
    switch(random){
      case 0: 
        this.personajeActual = "atacante";
        this.precioActual = 100
        break;
        case 1: 
        this.personajeActual = "tank";
        this.precioActual = 100
        break;
        case 2: 
        this.personajeActual = "distancia";
        this.precioActual = 200
        break;
        case 3: 
        this.personajeActual = "veloz";
        this.precioActual = 200
        break;
    }
  }while(this.dinero <this.precioActual)
  }

  constructor() {
    this.puzleActual = "1";
    this.combate = []; // Lista con todos los personajes de la escena
    this.personajeActual = "atacante";
    this.lenguage = "spanish";
    this.dinero = "1000"
    this.ultimoColocado = "";
    this.sonidoActivado = true
    this.tema = undefined;
    this.cancionActual = "";
    this.modoActual = "Normal"
    this.escenarioActual = "EscenarioCocina"
    this.idCount = 0;
    this.lineUp = []
    this.precioActual = 100
    this.pagoPrevio = 0;
  }
}
