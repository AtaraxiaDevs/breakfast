import { ConfiguracionJuego, APIJuego } from "../main.js";

export default class Login extends Phaser.Scene {
  constructor() {
    super("login");
    this.inputText = "";
  }

  preload() {
    APIJuego.setEscena(this);

    var url;
    url =
      "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexbbcodetextplugin.min.js";
    this.load.plugin("rexbbcodetextplugin", url, true);

    url =
      "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rextexteditplugin.min.js";
    this.load.plugin("rextexteditplugin", url, true);
  }

  create() {
    let editor = ""

    var fondoLogin = this.add.image(0, 0, "fondoLogin").setOrigin(0);

    var printText = this.add
      .rexBBCodeText(950, 555, "", {
        color: "black",
        fontSize: "70px",
        fontFamily: 'Sigmar One',
        fixedWidth: 700,
        fixedHeight: 100,
        valign: "center",
      })
      .setOrigin(0.5)
      .setInteractive()
      .on("pointerdown", function () {
          editor = this.plugins.get("rextexteditplugin").edit(printText);
          
        }, this)
      .on("pointerout", function(){
          
      })

    let cartelNombre = this.add.image(950, 400, APIJuego.lenguage + "_nombre");

    let clickButtonOK = this.add
      .image(950, 770, "OK")
      .setScale(0.3)
      .setInteractive()
      .on("pointerdown", function () {
          if (printText.text != "") {
            APIJuego.eliminarCancion()
            APIJuego.escena.scene.start("preparacion");
          }
      });

    let clickButtonSalir = this.add
      .image(1400, 750, "salir")
      .setInteractive()
      .on("pointerdown", function () {
        APIJuego.escena.scene.start("menuPrincipal")
      });

    let clickButtonIdioma = this.add
      .image(520, 775, APIJuego.lenguage === "spanish" ? "english" : "spanish")
      .setScale(0.2)
      .setInteractive()
      .on("pointerdown", function () {
        let lenguage = APIJuego.setLenguage();
        cartelNombre.setTexture(lenguage + "_nombre");
        clickButtonIdioma.setTexture(
          lenguage === "spanish" ? "english" : "spanish"
        );
      });
  }
}
