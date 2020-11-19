import GameAPI from "../gameAPI.js";
import { ConfiguracionJuego, APIJuego } from "../main.js";

export default class Login extends Phaser.Scene {
  constructor() {
    super("login");
    this.inputText = "";
  }

  preload() {
    APIJuego.setEscena(this);
  }

  create() {
    let editor = "";

    var fondoLogin = this.add.image(0, 0, "fondoLogin").setOrigin(0);
    let jugadorActual = 0;

    if(APIJuego.datosJugador1.nombre == undefined){
      jugadorActual = "1"
    }else{
      jugadorActual = "2"
    }

    var printText = this.add
      .rexBBCodeText(950, 555, "", {
        color: "black",
        fontSize: "70px",
        fontFamily: "Sigmar One",
        fixedWidth: 700,
        fixedHeight: 100,
        valign: "center",
      })
      .setOrigin(0.5)
      .setInteractive()
      .on(
        "pointerdown",
        function () {
          editor = this.plugins.get("rextexteditplugin").edit(printText);
        },
        this
      )
      .on("pointerout", function () {});

    //let cartelNombre = this.add.image(950, 400, APIJuego.lenguage + "_nombre");
    let textoSpanish = "Introduce tu nombre jugador " + jugadorActual
    let textoEnglish = "Introduce your nickname player" + jugadorActual

    let textoInstrucciones = this.make.text({
      x: 460,
      y: 350,
      text: APIJuego.lenguage == "spanish"? textoSpanish: textoEnglish,
      style: {
        font: "50px 'Sigmar One'",
        color: "black"
      },
    });




    let clickButtonOK = this.add
      .image(950, 770, "OK")
      .setScale(0.3)
      .setInteractive()
      .on("pointerdown", function () {
        if (printText.text != "") {
          if(APIJuego.nJugadores == 1){
            APIJuego.datosJugador1.nombre= printText.text
            APIJuego.escena.scene.start("prePartida");
          }else{
          if(jugadorActual == 1){
            APIJuego.datosJugador1.nombre= printText.text
            APIJuego.escena.scene.start("login");

          }else{
            APIJuego.datosJugador2.nombre = printText.text
            APIJuego.escena.scene.start("prePartida");
          }
        }
      }
      });

    let clickButtonSalir = this.add
      .image(1400, 750, "salir")
      .setInteractive()
      .on("pointerdown", function () {
        APIJuego.escena.scene.start("menuPrincipal");
      });

    let clickButtonIdioma = this.add
      .image(520, 775, APIJuego.lenguage === "spanish" ? "english" : "spanish")
      .setScale(0.2)
      .setInteractive()
      .on("pointerdown", function () {
        let lenguage = APIJuego.setLenguage();
        APIJuego.cambiarTexto(textoInstrucciones,  APIJuego.lenguage === "spanish" ? textoEnglish : textoSpanish)
        clickButtonIdioma.setTexture(
          lenguage === "spanish" ? "english" : "spanish"
        );
      });
  }
}
