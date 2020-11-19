import { ConfiguracionJuego, APIJuego } from "../main.js";
import Personaje from "../classPersonajes.js";

export default class Escena2 extends Phaser.Scene {
  constructor() {
    super("escena2");
  }

  create() {
    var fondo = this.add.image(0, 0, APIJuego.escenarioActual).setOrigin(0);

    

    APIJuego.setEscena(this);
    APIJuego.reiniciarCombate();
    APIJuego.cargarCombate();

    APIJuego.inicializarMusica("temaCombate");
    APIJuego.colocarBuffoEscenario();
    APIJuego.arrancarPersonajes();

    let textoRondaSpanish = "RONDA\n" + (APIJuego.ronda +1);
    let textoRondaEnglish = "ROUND\n" + (APIJuego.ronda +1);

    let recuadroDineroJ1 = this.add
      .image(200, 220, "recuadroAzul")
      .setScale(0.25, 0.2);

    let recuadroDineroJ2 = this.add
      .image(1725, 220, "recuadroRosa")
      .setScale(0.25, 0.2);

    APIJuego.recuadroDineroJ1 = this.make.text({
      x: 130,
      y: 185,
      text: APIJuego.datosJugador1.dinero + " $",
      style: {
        color: "black",
        font: "48px 'Sigmar One'",
        align: "center",
      },
    });

    APIJuego.recuadroDineroJ2 = this.make.text({
      x: 1650,
      y: 185,
      text: APIJuego.datosJugador2.dinero + " $",
      style: {
        color: "black",
        font: "48px 'Sigmar One'",
        align: "center",
      },
    });

    let nombreJ1 = this.make.text({
      x: 55,
      y: 40,
      text: APIJuego.datosJugador1.nombre,
      style: {
        color: "black",
        font: "48px 'Sigmar One'",
        align: "center",
      },
    });

    let nombreJ2 = this.make.text({
      x: 1590,
      y: 40,
      text: APIJuego.nJugadores === 1 ? "CPU" : APIJuego.datosJugador2.nombre,
      style: {
        color: "black",
        font: "48px 'Sigmar One'",
        align: "center",
      },
    });

    let ronda = this.make.text({
      x: 810,
      y: 10,
      text:
        APIJuego.lenguage === "spanish" ? textoRondaSpanish : textoRondaEnglish,
      style: {
        color: "black",
        font: "64px 'Sigmar One'",
        align: "center",
      },
    });


    let ganadasJ1 = this.make.text({
      x: 650,
      y: -20,
      text: APIJuego.datosJugador1.puntuacionTotal,
      style: {
        color: "black",
        font: "110px 'Sigmar One'",
      },
    });

    let ganadasJ2 = this.make.text({
      x: 1175,
      y: -20,
      text: APIJuego.datosJugador2.puntuacionTotal,
      style: {
        color: "black",
        font: "110px 'Sigmar One'",
      },
    });

    APIJuego.puntuacionLineasJ1 = this.make.text({
      x: 850,
      y: 980,
      text: "0",
      style: {
        color: "black",
        font: "72px 'Sigmar One'",
      },
    });

    APIJuego.puntuacionLineasJ2   = this.make.text({
      x: 990,
      y: 980,
      text: "0",
      style: {
        color: "black",
        font: "72px 'Sigmar One'",
      },
    });

    let cartelSalir = this.add.image(1800, 1000, "recuadroRosa").setScale(0.3);

    let cartelSonido = this.add.image(100, 1000, "recuadroAzul").setScale(0.3);

    let clickButtonSalir = this.add
      .image(1800, 1000, "salir")
      .setInteractive()
      .on("pointerdown", function () {
        APIJuego.escena.scene.start("resultados");
      });

    let clickButtonSonido = this.add
      .image(100, 1000, APIJuego.sonidoActivado ? "sonidoOn" : "sonidoOff")
      .setInteractive()
      .on("pointerdown", function () {
        APIJuego.controlMusica();
        clickButtonSonido.setTexture(
          APIJuego.sonidoActivado ? "sonidoOn" : "sonidoOff"
        );
      });

    APIJuego.flecha1 = this.add.image(100, 500, "flecha2").setScale(0.25);
    APIJuego.flecha1.setInteractive().on("pointerdown", function () {
      if (APIJuego.datosActivacionBuffo.flechaActivada1 == "") {
        APIJuego.datosActivacionBuffo.flechaActivada1 = 1;
        APIJuego.segundaActivacionBuffo(1);
      } else {
        APIJuego.datosActivacionBuffo.flechaActivada2 = 1;
        APIJuego.segundaActivacionBuffo(1);
      }
      APIJuego.desactivarFlecha(1);
    });
    APIJuego.flecha1.visible = false;

    APIJuego.flecha2 = this.add.image(100, 680, "flecha1").setScale(0.25);
    APIJuego.flecha2.setInteractive().on("pointerdown", function () {
      if (APIJuego.datosActivacionBuffo.flechaActivada1 == "") {
        APIJuego.datosActivacionBuffo.flechaActivada1 = 2;
        APIJuego.segundaActivacionBuffo(1);
      } else {
        APIJuego.datosActivacionBuffo.flechaActivada2 = 2;

        APIJuego.segundaActivacionBuffo(1);
      }
      APIJuego.desactivarFlecha(1);
    });
    APIJuego.flecha2.visible = false;

    APIJuego.flecha3 = this.add.image(100, 880, "flecha2").setScale(0.25);
    APIJuego.flecha3.setInteractive().on("pointerdown", function () {
      if (APIJuego.datosActivacionBuffo.flechaActivada1 == "") {
        APIJuego.datosActivacionBuffo.flechaActivada1 = 3;
        APIJuego.segundaActivacionBuffo(1);
      } else {
        APIJuego.datosActivacionBuffo.flechaActivada2 = 3;
      }
      APIJuego.desactivarFlecha(1);
    });
    APIJuego.flecha3.visible = false;

    APIJuego.flechaReverse1 = this.add
      .image(1820, 500, "flecha1")
      .setScale(0.25);
    APIJuego.flechaReverse1.rotation = Math.PI;
    APIJuego.flechaReverse1.setInteractive().on("pointerdown", function () {
      if (APIJuego.datosActivacionBuffo.flechaActivada1 == "") {
        APIJuego.datosActivacionBuffo.flechaActivada1 = 1;
        APIJuego.segundaActivacionBuffo(2);
      } else {
        APIJuego.datosActivacionBuffo.flechaActivada2 = 1;
        APIJuego.segundaActivacionBuffo(2);
      }
      APIJuego.desactivarFlecha(2);
    });
    APIJuego.flechaReverse1.visible = false;
    APIJuego.flechaReverse2 = this.add
      .image(1820, 680, "flecha2")
      .setScale(0.25);
    APIJuego.flechaReverse2.rotation = Math.PI;
    APIJuego.flechaReverse2.setInteractive().on("pointerdown", function () {
      if (APIJuego.datosActivacionBuffo.flechaActivada1 == "") {
        APIJuego.datosActivacionBuffo.flechaActivada1 = 2;
        APIJuego.segundaActivacionBuffo(2);
      } else {
        APIJuego.datosActivacionBuffo.flechaActivada2 = 2;
        APIJuego.segundaActivacionBuffo(2);
      }
      APIJuego.desactivarFlecha(2);
    });
    APIJuego.flechaReverse2.visible = false;

    APIJuego.flechaReverse3 = this.add
      .image(1820, 880, "flecha1")
      .setScale(0.25);
    APIJuego.flechaReverse3.rotation = Math.PI;
    APIJuego.flechaReverse3.setInteractive().on("pointerdown", function () {
      if (APIJuego.datosActivacionBuffo.flechaActivada1 == "") {
        APIJuego.datosActivacionBuffo.flechaActivada1 = 3;
        APIJuego.segundaActivacionBuffo(2);
      } else {
        APIJuego.datosActivacionBuffo.flechaActivada2 = 3;
        APIJuego.segundaActivacionBuffo(2);
      }

      APIJuego.desactivarFlecha(2);
    });
    APIJuego.flechaReverse3.visible = false;

    APIJuego.buffoActivoJ1 = this.add
      .image(430, 75, "iconBuffSweet")
      .setScale(0.8);
    APIJuego.buffoActivoJ1.setInteractive().on("pointerdown", function () {
      APIJuego.quitarBuffoJ1();
    });
    APIJuego.buffoActivoJ1.visible = false;
    APIJuego.buffoActivoJ1.input.enable = false;

    APIJuego.buffoActivoJ2 = this.add
      .image(1490, 75, "iconBuffSweet")
      .setScale(0.8);

    APIJuego.buffoActivoJ2.setInteractive().on("pointerdown", function () {
      APIJuego.quitarBuffoJ2();
    });
    APIJuego.buffoActivoJ2.visible = false;
    APIJuego.buffoActivoJ1.input.enable = false;
  }

  update() {
    APIJuego.actualizar();
    APIJuego.updateCombate()
  }
}
