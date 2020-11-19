import { ConfiguracionJuego, APIJuego } from "../main.js";

export default class Ranking extends Phaser.Scene {
  constructor() {
    super("ranking");
  }

  preload() {
    APIJuego.setEscena(this);
  }

  create() {
    var fondo = this.add.image(0, 0, "fondoRanking").setOrigin(0);

    let rankingJugador1 = this.make.text({
      x: 400,
      y: 260,
      text: "Jugador",
      style: {
        color: "black",
        font: "40px 'Sigmar One'",
        align: "left",
      },
    });

    let puntosJugador1 = this.make.text({
      x: 690,
      y: 260,
      text: "Puntos",
      style: {
        color: "black",
        font: "40px 'Sigmar One'",
        align: "left",
      },
    });

    let rankingJugador2 = this.make.text({
      x: 400,
      y: 375,
      text: "Jugador",
      style: {
        color: "black",
        font: "40px 'Sigmar One'",
        align: "left",
      },
    });

    let puntosJugador2 = this.make.text({
      x: 690,
      y: 375,
      text: "Puntos",
      style: {
        color: "black",
        font: "40px 'Sigmar One'",
        align: "left",
      },
    });

    let rankingJugador3 = this.make.text({
      x: 400,
      y: 490,
      text: "Jugador",
      style: {
        color: "black",
        font: "40px 'Sigmar One'",
        align: "left",
      },
    });

    let puntosJugador3 = this.make.text({
      x: 690,
      y: 490,
      text: "Puntos",
      style: {
        color: "black",
        font: "40px 'Sigmar One'",
        align: "left",
      },
    });

    let rankingJugador4 = this.make.text({
      x: 400,
      y: 605,
      text: "Jugador",
      style: {
        color: "black",
        font: "40px 'Sigmar One'",
        align: "left",
      },
    });

    let puntosJugador4 = this.make.text({
      x: 690,
      y: 605,
      text: "Puntos",
      style: {
        color: "black",
        font: "40px 'Sigmar One'",
        align: "left",
      },
    });

    let rankingJugador5 = this.make.text({
      x: 400,
      y: 720,
      text: "Jugador",
      style: {
        color: "black",
        font: "40px 'Sigmar One'",
        align: "left",
      },
    });

    let puntosJugador5 = this.make.text({
      x: 690,
      y: 720,
      text: "Puntos",
      style: {
        color: "black",
        font: "40px 'Sigmar One'",
        align: "left",
      },
    });

    let rankingJugador6 = this.make.text({
      x: 1170,
      y: 260,
      text: "Jugador",
      style: {
        color: "black",
        font: "40px 'Sigmar One'",
        align: "left",
      },
    });

    let puntosJugador6 = this.make.text({
      x: 1460,
      y: 260,
      text: "Puntos",
      style: {
        color: "black",
        font: "40px 'Sigmar One'",
        align: "left",
      },
    });

    let rankingJugador7 = this.make.text({
      x: 1170,
      y: 375,
      text: "Jugador",
      style: {
        color: "black",
        font: "40px 'Sigmar One'",
        align: "left",
      },
    });

    let puntosJugador7 = this.make.text({
      x: 1460,
      y: 375,
      text: "Puntos",
      style: {
        color: "black",
        font: "40px 'Sigmar One'",
        align: "left",
      },
    });

    let rankingJugador8 = this.make.text({
      x: 1170,
      y: 490,
      text: "Jugador",
      style: {
        color: "black",
        font: "40px 'Sigmar One'",
        align: "left",
      },
    });

    let puntosJugador8 = this.make.text({
      x: 1460,
      y: 490,
      text: "Puntos",
      style: {
        color: "black",
        font: "40px 'Sigmar One'",
        align: "left",
      },
    });

    let rankingJugador9 = this.make.text({
      x: 1170,
      y: 605,
      text: "Jugador",
      style: {
        color: "black",
        font: "40px 'Sigmar One'",
        align: "left",
      },
    });

    let puntosJugador9 = this.make.text({
      x: 1460,
      y: 605,
      text: "Puntos",
      style: {
        color: "black",
        font: "40px 'Sigmar One'",
        align: "left",
      },
    });

    let rankingJugador10 = this.make.text({
      x: 1170,
      y: 720,
      text: "Jugador",
      style: {
        color: "black",
        font: "40px 'Sigmar One'",
        align: "left",
      },
    });

    let puntosJugador10 = this.make.text({
      x: 1460,
      y: 720,
      text: "Puntos",
      style: {
        color: "black",
        font: "40px 'Sigmar One'",
        align: "left",
      },
    });


    let clickButtonOK = this.add
      .image(930, 900, "OK")
      .setScale(0.3)
      .setInteractive()
      .on("pointerdown", () => this.scene.start("menuPrincipal"));

    let clickButtonIdioma = this.add
      .image(340, 900, APIJuego.lenguage === "spanish" ? "english" : "spanish")
      .setScale(0.2)
      .setInteractive()
      .on("pointerdown", function () {
        let lenguage = APIJuego.setLenguage();
        clickButtonIdioma.setTexture(
          lenguage === "spanish" ? "english" : "spanish"
        );
      });
  }
}
