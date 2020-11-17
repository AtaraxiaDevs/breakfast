import { ConfiguracionJuego, APIJuego } from "../../../main.js";

export default class Jefe extends Phaser.Scene {
  constructor() {
    super("jefe");
  }

  preload() {
    APIJuego.setEscena(this);
  }

  create() {
    var fondoJefe = this.add.image(0, 0, "fondoStatsPersonajes").setOrigin(0);

    let cartelJefe = this.add
      .image(940, 135, APIJuego.lenguage + "_jefe")
      .setScale(0.73);

    let personajeMantequilla = this.add
      .image(550, 575, "mantequilla")
      .setScale(2.5);

    let personajeMermelada = this.add
      .image(800, 525, "mermelada")
      .setScale(2.5);

    let textoSpanish = "Al activar el \n" + 
    " potenciador, el jefe \n aparecerá en medio \n de la línea" + 
    " acabando \n con cada enemigo de \n uno en uno" +
    " hasta que \n se consuma."

    let textoEnglish = "When the power-up \n" +
    " is activated, the boss \n will appear in the \n middle of the row \n" +
    " killing every enemy \n until it consumes."

    let textoJefe = this.make.text({
      x: 1020,
      y: 370,
      text: APIJuego.lenguage === "spanish" ? textoSpanish : textoEnglish,
      style: {
        color: "black",
        font: "30px 'Sigmar One'",
      },
    });

    let clickButtonOK = this.add
      .image(940, 780, "OK")
      .setScale(0.3)
      .setInteractive()
      .on("pointerdown", () => this.scene.start("personajes"));

    let clickButtonIdioma = this.add
      .image(520, 780, APIJuego.lenguage === "spanish" ? "english" : "spanish")
      .setScale(0.23)
      .setInteractive()
      .on("pointerdown", function () {
        let lenguage = APIJuego.setLenguage();
        cartelJefe.setTexture(lenguage + "_jefe");
        APIJuego.cambiarTexto(textoJefe, APIJuego.lenguage === "spanish" ? textoSpanish : textoEnglish)
        clickButtonIdioma.setTexture(
          lenguage === "spanish" ? "english" : "spanish"
        );
      });
  }
}
