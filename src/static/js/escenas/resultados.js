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

    let atacante = this.add.image(490, 470, "atacante");

    let mantequilla = this.add.image(1440, 450, "mantequilla").setScale(2.5);

    let textoVictoriaSpanish = "¡ENHORABUENA!\n\n¡Has ganado, nombre!";

    let textoVictoriaEnglish = "CONGRATULATIONS!\n\nnombre, you win!";

    let textoDerrotaSpanish =
      "¡DERROTA!\n\nLo siento, nombre,\nvuelve a intentarlo";

    let textoDerrotaEnglish = "DEFEAT!\n\nSorry, nombre,\ntry again";

    let resultadosSpanish = "Se ha cancelado\nla batalla";
    let resultadosEnglish = "The battle is cancelled";

    let textoVictoria = this.make.text({
      x: 600,
      y: 370,
      text:
        APIJuego.lenguage === "spanish" ? resultadosSpanish : resultadosEnglish,
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
      .on("pointerdown", function() {
        let nombreJ1 = APIJuego.datosJugador1.nombre;
        let nombreJ2 = APIJuego.datosJugador2.nombre;
        APIJuego.reiniciarInfoJugadores();
        APIJuego.datosJugador1.nombre = nombreJ1;
        APIJuego.datosJugador2.nombre = nombreJ2;
        APIJuego.eliminarCancion();
        APIJuego.escena.scene.start("preparacion")
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
        APIJuego.cambiarTexto(
          textoVictoria,
          APIJuego.lenguage === "spanish"
            ? textoVictoriaSpanish
            : textoVictoriaEnglish
        );
        clickButtonIdioma.setTexture(
          lenguage === "spanish" ? "english" : "spanish"
        );
      });
  }
}
