import { ConfiguracionJuego, APIJuego } from "../../main.js";

export default class TiendaSkins extends Phaser.Scene {
  constructor() {
    super("tiendaSkins");
  }

  preload() {
    APIJuego.setEscena(this);
  }

  create() {
    var fondoTiendaSkins = this.add.image(0, 0, "fondoTiendaSkin").setOrigin(0);

    let cartelSkins = this.add.image(400, 300, "skins").setScale(0.25);

    let cartelTienda = this.add.image(940, 110, APIJuego.lenguage + "_tienda").setScale(0.75)

    let cartelPremios = this.add.image(750, 300, APIJuego.lenguage +"_premiosNoSelect").setScale(0.25);

    let clickButtonComprar = this.add
    .image(1100, 300, APIJuego.lenguage + "_comprarNoSelect")
    .setScale(0.25)
    .setInteractive()
    .on("pointerdown", () => this.scene.start("tiendaComprar"))

    let clickButtonOK = this.add
      .image(950, 940, "OK")
      .setScale(0.3)
      .setInteractive()
      .on("pointerdown", () => this.scene.start("menuPrincipal"));

    let clickButtonIdioma = this.add
      .image(275, 950, APIJuego.lenguage === "spanish" ? "english" : "spanish")
      .setScale(0.2)
      .setInteractive()
      .on("pointerdown", function () {
        let lenguage = APIJuego.setLenguage();
        cartelPremios.setTexture(lenguage + "_premiosNoSelect")
        cartelTienda.setTexture(lenguage + "_tienda")
        clickButtonComprar.setTexture(lenguage + "_comprarNoSelect")
        clickButtonIdioma.setTexture(
          lenguage === "spanish" ? "english" : "spanish"
        );
      });
  }
}