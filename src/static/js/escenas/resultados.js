import { ConfiguracionJuego, APIJuego } from "../main.js";

export default class Resultados extends Phaser.Scene {
  constructor() {
    super("resultados");
  }

  preload() {
    APIJuego.setEscena(this);
  }

  create() {
    var fondoResultados = this.add.image(0, 0, "fondoResultados").setOrigin(0);

    let textoGanador;

    let atacante = this.add.image(490, 470, "atacante");

    let mantequilla = this.add.image(1440, 450, "mantequilla").setScale(2.5);

    let textoVictoriaSpanishJ1 =
      "¡ENHORABUENA!\n\n¡Has ganado, " + APIJuego.datosJugador1.nombre + "!";
    let textoVictoriaSpanishJ2 =
      "¡ENHORABUENA!\n\n¡Has ganado, " + APIJuego.datosJugador2.nombre + "!";

    let textoVictoriaEnglishJ1 =
      "CONGRATULATIONS!\n\n" + APIJuego.datosJugador1.nombre + ", you win!";
    let textoVictoriaEnglishJ2 =
      "CONGRATULATIONS!\n\n" + APIJuego.datosJugador2.nombre + ", you win!";

    let textoDerrotaSpanish =
      "¡DERROTA!\n\nLo siento, nombre,\nvuelve a intentarlo";

    let textoDerrotaEnglish = "DEFEAT!\n\nSorry, nombre,\ntry again";

    let resultadosSpanish = "Se ha cancelado\nla batalla";
    let resultadosEnglish = "The battle is cancelled";

    if (APIJuego.ganador === 1) {
      textoGanador =
        APIJuego.lenguage === "spanish"
          ? textoVictoriaSpanishJ1
          : textoVictoriaEnglishJ1;
     
     
     if(APIJuego.nJugadores == 2){
        let puntuacionAnterior = 0
        let puntuacionSumada = 0;
        let puntuacionFinal = 0;

       

        if(localStorage.getItem(APIJuego.datosJugador1.nombre) != undefined){
            puntuacionAnterior = localStorage.getItem(APIJuego.datosJugador1.nombre)
        
        }
        
        puntuacionSumada = 100 + 100*APIJuego.datosJugador1.puntuacionTotal + 300
        puntuacionFinal = parseInt(puntuacionAnterior) + puntuacionSumada
        localStorage.setItem(APIJuego.datosJugador1.nombre,puntuacionFinal)
        console.log(localStorage.getItem(APIJuego.datosJugador1.nombre))

        if(localStorage.getItem(APIJuego.datosJugador2.nombre) != undefined){
          puntuacionAnterior = localStorage.getItem(APIJuego.datosJugador2.nombre)
      }

        puntuacionSumada = 100 + 100*APIJuego.datosJugador2.puntuacionTotal
        puntuacionFinal = parseInt(puntuacionAnterior) + puntuacionSumada
        localStorage.setItem(APIJuego.datosJugador2.nombre,puntuacionFinal)
        console.log(localStorage.getItem(APIJuego.datosJugador2.nombre))
     }else{
      let puntuacionAnterior = 0
      let puntuacionSumada = 0;
      let puntuacionFinal = 0;

     

      if(localStorage.getItem(APIJuego.datosJugador1.nombre) != undefined){
          puntuacionAnterior = localStorage.getItem(APIJuego.datosJugador1.nombre)
      
      }
      
      puntuacionSumada = APIJuego.puzleActual >5? 300:100;
      puntuacionFinal = parseInt(puntuacionAnterior) + puntuacionSumada
      localStorage.setItem(APIJuego.datosJugador1.nombre,puntuacionFinal)
      console.log(localStorage.getItem(APIJuego.datosJugador1.nombre))
       
     }
       
    }

    if (APIJuego.ganador === 2) {
      textoGanador =
        APIJuego.lenguage === "spanish"
          ? textoVictoriaSpanishJ2
          : textoVictoriaEnglishJ2;
          let puntuacionAnterior = 0
          let puntuacionSumada = 0;
          let puntuacionFinal = 0;
  
         
  
          if(localStorage.getItem(APIJuego.datosJugador2.nombre) != undefined){
              puntuacionAnterior = localStorage.getItem(APIJuego.datosJugador2.nombre)
          
          }
          
          puntuacionSumada = 100 + 100*APIJuego.datosJugador2.puntuacionTotal + 300
          puntuacionFinal = parseInt(puntuacionAnterior) + puntuacionSumada
          localStorage.setItem(APIJuego.datosJugador2.nombre,puntuacionFinal)
          console.log(localStorage.getItem(APIJuego.datosJugador2.nombre))
  
          if(localStorage.getItem(APIJuego.datosJugador1.nombre) != undefined){
            puntuacionAnterior = localStorage.getItem(APIJuego.datosJugador1.nombre)
        }
  
          puntuacionSumada = 100 + 100*APIJuego.datosJugador1.puntuacionTotal
          puntuacionFinal = parseInt(puntuacionAnterior) + puntuacionSumada
          localStorage.setItem(APIJuego.datosJugador1.nombre,puntuacionFinal)
          console.log(localStorage.getItem(APIJuego.datosJugador1.nombre))

    }

    if (APIJuego.ganador === 0) {
      textoGanador =
        APIJuego.lenguage === "spanish" ? resultadosSpanish : resultadosEnglish;
    }

    let textoVictoria = this.make.text({
      x: 600,
      y: 370,
      text: textoGanador,
      style: {
        color: "black",
        font: "64px 'Sigmar One'",
        align: "center",
      },
    });

    let cartelResultados = this.add
      .image(940, 120, APIJuego.lenguage + "_resultados")
      .setScale(0.7);

    let clickButtonJugarOtraVez = this.add
      .image(940, 860, APIJuego.lenguage + "_jugarOtraVez")
      .setScale(0.25)
      .setInteractive()
      .on("pointerdown", function () {
        let nombreJ1 = APIJuego.datosJugador1.nombre;
        let nombreJ2 = APIJuego.datosJugador2.nombre;
        APIJuego.reiniciarInfoJugadores();
        APIJuego.datosJugador1.nombre = nombreJ1;
        APIJuego.datosJugador2.nombre = nombreJ2;
        APIJuego.eliminarCancion();
        APIJuego.escena.scene.start("preparacion");
      });

    let clickButtonSalir = this.add
      .image(1500, 840, "salir")
      .setScale(1.2)
      .setInteractive()
      .on("pointerdown", function () {
        APIJuego.eliminarCancion();
        APIJuego.escena.scene.start("menuPrincipal");
      });

    let clickButtonIdioma = this.add
      .image(400, 840, APIJuego.lenguage === "spanish" ? "english" : "spanish")
      .setScale(0.25)
      .setInteractive()
      .on("pointerdown", function () {
        let lenguage = APIJuego.setLenguage();
        cartelResultados.setTexture(lenguage + "_resultados");
        clickButtonJugarOtraVez.setTexture(lenguage + "_jugarOtraVez");
        if (APIJuego.ganador === 1) {
          APIJuego.cambiarTexto(
            textoVictoria,
            APIJuego.lenguage === "spanish"
              ? textoVictoriaSpanishJ1
              : textoVictoriaEnglishJ1
          );
        }

        if (APIJuego.ganador === 2) {
          APIJuego.cambiarTexto(
            textoVictoria,
            APIJuego.lenguage === "spanish"
              ? textoVictoriaSpanishJ2
              : textoVictoriaEnglishJ2
          );
        }

        if (APIJuego.ganador === 0) {
          APIJuego.cambiarTexto(
            textoVictoria,
            APIJuego.lenguage === "spanish"
              ? resultadosSpanish
              : resultadosEnglish
          );
        }
        clickButtonIdioma.setTexture(
          lenguage === "spanish" ? "english" : "spanish"
        );
      });
  }
}
