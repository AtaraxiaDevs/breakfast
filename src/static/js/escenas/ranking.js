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

    let listaPuntuaciones = []

    for(let i = 0; i<localStorage.length; i++){
        let key = localStorage.key(i)
        let value = parseInt(localStorage.getItem(key))
        listaPuntuaciones.push({
          "key": key,
          "value": value
        })
      }

      listaPuntuaciones.sort( function( a , b){
        if(a.value < b.value) return 1;
        if(a.value > b.value) return -1;
        return 0;
      });

      //console.log(listaPuntuaciones[0].key + " " + listaPuntuaciones[0].value )
      

    let rankingJugador1 = this.make.text({
      x: 400,
      y: 260,
      text: listaPuntuaciones[0] == undefined ? "" : listaPuntuaciones[0].key ,
      style: {
        color: "black",
        font: "40px 'Sigmar One'",
        align: "left",
      },
    });

    let puntosJugador1 = this.make.text({
      x: 690,
      y: 260,
      text: listaPuntuaciones[0] == undefined ? "" : listaPuntuaciones[0].value ,
      style: {
        color: "black",
        font: "40px 'Sigmar One'",
        align: "left",
      },
    });

    let rankingJugador2 = this.make.text({
      x: 400,
      y: 375,
      text: listaPuntuaciones[1] == undefined ? "" : listaPuntuaciones[1].key,
      style: {
        color: "black",
        font: "40px 'Sigmar One'",
        align: "left",
      },
    });

    let puntosJugador2 = this.make.text({
      x: 690,
      y: 375,
      text: listaPuntuaciones[1] == undefined ? "" : listaPuntuaciones[1].value,
      style: {
        color: "black",
        font: "40px 'Sigmar One'",
        align: "left",
      },
    });

    let rankingJugador3 = this.make.text({
      x: 400,
      y: 490,
      text: listaPuntuaciones[2] == undefined ? "" : listaPuntuaciones[2].key,
      style: {
        color: "black",
        font: "40px 'Sigmar One'",
        align: "left",
      },
    });

    let puntosJugador3 = this.make.text({
      x: 690,
      y: 490,
      text: listaPuntuaciones[2] == undefined ? "" : listaPuntuaciones[2].value,
      style: {
        color: "black",
        font: "40px 'Sigmar One'",
        align: "left",
      },
    });

    let rankingJugador4 = this.make.text({
      x: 400,
      y: 605,
      text: listaPuntuaciones[3] == undefined ? "" : listaPuntuaciones[3].key,
      style: {
        color: "black",
        font: "40px 'Sigmar One'",
        align: "left",
      },
    });

    let puntosJugador4 = this.make.text({
      x: 690,
      y: 605,
      text: listaPuntuaciones[3] == undefined ? "" : listaPuntuaciones[3].value,
      style: {
        color: "black",
        font: "40px 'Sigmar One'",
        align: "left",
      },
    });

    let rankingJugador5 = this.make.text({
      x: 400,
      y: 720,
      text: listaPuntuaciones[4] == undefined ? "" : listaPuntuaciones[4].key,
      style: {
        color: "black",
        font: "40px 'Sigmar One'",
        align: "left",
      },
    });

    let puntosJugador5 = this.make.text({
      x: 690,
      y: 720,
      text: listaPuntuaciones[4] == undefined ? "" : listaPuntuaciones[4].key,
      style: {
        color: "black",
        font: "40px 'Sigmar One'",
        align: "left",
      },
    });

    let rankingJugador6 = this.make.text({
      x: 1170,
      y: 260,
      text: listaPuntuaciones[5] == undefined ? "" : listaPuntuaciones[5].key,
      style: {
        color: "black",
        font: "40px 'Sigmar One'",
        align: "left",
      },
    });

    let puntosJugador6 = this.make.text({
      x: 1460,
      y: 260,
      text: listaPuntuaciones[5] == undefined ? "" : listaPuntuaciones[5].value,
      style: {
        color: "black",
        font: "40px 'Sigmar One'",
        align: "left",
      },
    });

    let rankingJugador7 = this.make.text({
      x: 1170,
      y: 375,
      text: listaPuntuaciones[6] == undefined ? "" : listaPuntuaciones[6].key,
      style: {
        color: "black",
        font: "40px 'Sigmar One'",
        align: "left",
      },
    });

    let puntosJugador7 = this.make.text({
      x: 1460,
      y: 375,
      text: listaPuntuaciones[6] == undefined ? "" : listaPuntuaciones[6].value,
      style: {
        color: "black",
        font: "40px 'Sigmar One'",
        align: "left",
      },
    });

    let rankingJugador8 = this.make.text({
      x: 1170,
      y: 490,
      text: listaPuntuaciones[7] == undefined ? "" : listaPuntuaciones[7].key,
      style: {
        color: "black",
        font: "40px 'Sigmar One'",
        align: "left",
      },
    });

    let puntosJugador8 = this.make.text({
      x: 1460,
      y: 490,
      text: listaPuntuaciones[7] == undefined ? "" : listaPuntuaciones[7].value,
      style: {
        color: "black",
        font: "40px 'Sigmar One'",
        align: "left",
      },
    });

    let rankingJugador9 = this.make.text({
      x: 1170,
      y: 605,
      text: listaPuntuaciones[8] == undefined ? "" : listaPuntuaciones[8].key,
      style: {
        color: "black",
        font: "40px 'Sigmar One'",
        align: "left",
      },
    });

    let puntosJugador9 = this.make.text({
      x: 1460,
      y: 605,
      text: listaPuntuaciones[8] == undefined ? "" : listaPuntuaciones[8].value,
      style: {
        color: "black",
        font: "40px 'Sigmar One'",
        align: "left",
      },
    });

    let rankingJugador10 = this.make.text({
      x: 1170,
      y: 720,
      text: listaPuntuaciones[9] == undefined ? "" : listaPuntuaciones[9].key,
      style: {
        color: "black",
        font: "40px 'Sigmar One'",
        align: "left",
      },
    });

    let puntosJugador10 = this.make.text({
      x: 1460,
      y: 720,
      text: listaPuntuaciones[9] == undefined ? "" : listaPuntuaciones[9].value,
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
