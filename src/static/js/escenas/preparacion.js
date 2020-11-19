import { ConfiguracionJuego, APIJuego } from "../main.js";

export default class Preparacion extends Phaser.Scene {
  constructor() {
    super("preparacion");
  }

  preload() {
    APIJuego.setEscena(this);
    this.seleccionActual = "atacante";
  }

  create() {
    let jugadorActual;
    let textoDinero = APIJuego.datosJugadorActual;

    APIJuego.pagoPrevio = "";

    APIJuego.reiniciarLineUp();
    APIJuego.reiniciarCombate();
    APIJuego.getDinero();

    if (APIJuego.datosJugador1.checkLineUp == false) {
      jugadorActual = 1;
      APIJuego.generarBuffo();
      APIJuego.inicializarMusica("temaPreparacion");
    } else {
      jugadorActual = 2;
    }

    var fondo = this.add.image(0, 0, "fondoPreparacion").setOrigin(0);

    let cartelJugadores = this.add
      .image(950, 100, jugadorActual === 1 ? "recuadroJ1" : "recuadroJ2")
      .setScale(0.6);

    if (jugadorActual === 2) {
      cartelJugadores.rotation = Math.PI;
    }

    let cartelNombreJugadores = this.add
      .image(500, 100, jugadorActual === 1 ? "recuadroAzul" : "recuadroRosa")
      .setScale(0.3);

    let nombreJugadores = this.make.text({
      x: 740, 
      y: 55, 
      text:
        jugadorActual === 1
          ? APIJuego.datosJugador1.nombre
          : APIJuego.datosJugador2.nombre,
      style: {
        color: "black",
        font: "60px 'Sigmar One'",
      },
    });

    let dinero = this.make.text({
      x: 400, 
      y: 60,
      text:
        jugadorActual === 1
          ? APIJuego.datosJugador1.dinero + " $"
          : APIJuego.datosJugador2.dinero + " $",
      style: {
        font: "60px 'Sigmar One'",
        color: "black"
      },
    });

    APIJuego.cambiarTexto(
      dinero,
      jugadorActual === 1
        ? APIJuego.datosJugador1.dinero + " $"
        : APIJuego.datosJugador2.dinero + " $"
    );

    let clickButtonFlecha1 = this.add
      .image(970, 310, "flecha")
      .setScale(0.4)
      .setInteractive()
      .on("pointerdown", function () {
        APIJuego.pagar(1, jugadorActual);
        APIJuego.cambiarTexto(
          dinero,
          jugadorActual === 1
            ? APIJuego.datosJugador1.dinero + " $"
            : APIJuego.datosJugador2.dinero + " $"
        );
      });

    let clickButtonFlecha2 = this.add
      .image(970, 515, "flecha")
      .setScale(0.4)
      .setInteractive()
      .on("pointerdown", function () {
        APIJuego.pagar(2, jugadorActual);
        APIJuego.cambiarTexto(
          dinero,
          jugadorActual === 1
            ? APIJuego.datosJugador1.dinero + " $"
            : APIJuego.datosJugador2.dinero + " $"
        );
      });

    let clickButtonFlecha3 = this.add
      .image(970, 700, "flecha")
      .setScale(0.4)
      .setInteractive()
      .on("pointerdown", function () {
        APIJuego.pagar(3, jugadorActual);
        APIJuego.cambiarTexto(
          dinero,
          jugadorActual === 1
            ? APIJuego.datosJugador1.dinero + " $"
            : APIJuego.datosJugador2.dinero + " $"
        );

        if(APIJuego.modoActual != "Normal"){
          APIJuego.randomAliado();
        }
      });

    let selectorPersonajes = this.add.image(550, 490, this.seleccionActual);
    let textoPrecioUnidad = this.make.text({
      x: 625,
      y: 525,
      text: "100$",
      style: {
        font: "45px 'Sigmar One'",
      },
    });

    let clickButtonCambiar = this.add
      .image(700, 720, APIJuego.lenguage + "_cambiar")
      .setScale(0.2)
      .setInteractive()
      .on("pointerdown", function () {
        if (APIJuego.modoActual == "Normal") {
          switch (APIJuego.personajeActual) {
            case "atacante":
              selectorPersonajes.setTexture("tank");
              APIJuego.cambiarTexto(textoPrecioUnidad, "100$");
              APIJuego.precioActual = 100;
              break;
            case "tank":
              selectorPersonajes.setTexture("distancia");
              APIJuego.cambiarTexto(textoPrecioUnidad, "200$");
              APIJuego.precioActual = 200;
              break;
            case "distancia":
              selectorPersonajes.setTexture("veloz");
              APIJuego.cambiarTexto(textoPrecioUnidad, "200$");
              APIJuego.precioActual = 200;
              break;
            case "veloz":
              selectorPersonajes.setTexture("atacante");
              APIJuego.cambiarTexto(textoPrecioUnidad, "100$");
              APIJuego.precioActual = 100;
              break;
          }
          APIJuego.cambiarTipo();
        } else {
          APIJuego.randomAliado();

        }
      });

    let clickButtonDeshacer = this.add
      .image(400, 720, APIJuego.lenguage + "_deshacer")
      .setScale(0.2)
      .setInteractive()
      .on("pointerdown", function () {
        APIJuego.deshacer(jugadorActual);
        APIJuego.cambiarTexto(
          dinero,
          jugadorActual === 1
            ? APIJuego.datosJugador1.dinero + " $"
            : APIJuego.datosJugador2.dinero + " $"
        );
      });

    if (APIJuego.modoActual != "Normal") {
      selectorPersonajes.visible = false;
      clickButtonCambiar.visible = false;
      clickButtonDeshacer.visible = false;
      fondo.setTexture("fondoPreparacionPuzzle");
      let placeHolder = this.add.image(550,475,"placeHolderHalloween").setScale(2)

      APIJuego.cambiarTexto(textoPrecioUnidad, "");
    }

    let clickButtonSalir = this.add
      .image(1500, 900, "salir")
      .setScale(1.2)
      .setInteractive()
      .on("pointerdown", function () {
        APIJuego.eliminarCancion();
        APIJuego.escena.scene.start("menuPrincipal");
      });

    let textoUnidades = this.add
      .image(545, 250, APIJuego.lenguage + "_unidades")
      .setScale(0.4);

    let clickButtonSonido = this.add
      .image(600, 900, APIJuego.sonidoActivado ? "sonidoOn" : "sonidoOff")
      .setInteractive()
      .on("pointerdown", function () {
        APIJuego.controlMusica();
        clickButtonSonido.setTexture(
          APIJuego.sonidoActivado ? "sonidoOn" : "sonidoOff"
        );
      });

    let clickButtonComenzar = this.add
      .image(930, 900, APIJuego.lenguage + "_comenzar")
      .setScale(0.4)
      .setInteractive()
      .on("pointerdown", function () {
        if (APIJuego.nJugadores == 1) {
          APIJuego.eliminarCancion();
          APIJuego.datosJugador1.checkLineUp = true;
          APIJuego.datosJugador1.lineUp = APIJuego.lineUp;
          APIJuego.escena.scene.start("escena2");
        } else {
          if (APIJuego.datosJugador1.checkLineUp == false) {
            APIJuego.datosJugador1.checkLineUp = true;
            APIJuego.datosJugador1.lineUp = APIJuego.lineUp;
            APIJuego.escena.scene.start("preparacion");
          } else {
            APIJuego.eliminarCancion();
            APIJuego.datosJugador2.checkLineUp = true;
            APIJuego.datosJugador2.lineUp = APIJuego.lineUp;
            APIJuego.escena.scene.start("escena2");
          }
        }
      });

    let clickButtonIdioma = this.add
      .image(370, 910, APIJuego.lenguage === "spanish" ? "english" : "spanish")
      .setScale(0.25)
      .setInteractive()
      .on("pointerdown", function () {
        let lenguage = APIJuego.setLenguage();
        clickButtonDeshacer.setTexture(lenguage + "_deshacer");
        clickButtonCambiar.setTexture(lenguage + "_cambiar");
        clickButtonComenzar.setTexture(lenguage + "_comenzar");
        textoUnidades.setTexture(lenguage + "_unidades");
        clickButtonIdioma.setTexture(
          lenguage === "spanish" ? "english" : "spanish"
        );
      });

    switch (APIJuego.lineaBuffo) {
      case 0:
        this.add
          .image(1080, 220, "iconBuff" + APIJuego.buffoActual)
          .setScale(0.8);
        break;
      case 1:
        this.add
          .image(1075, 425, "iconBuff" + APIJuego.buffoActual)
          .setScale(0.8);
        break;
      case 2:
        this.add
          .image(1075, 610, "iconBuff" + APIJuego.buffoActual)
          .setScale(0.8);
        break;
    }
  }
}
