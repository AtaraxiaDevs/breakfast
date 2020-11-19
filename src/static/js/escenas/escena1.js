import { ConfiguracionJuego, APIJuego } from "../main.js";
import Personaje from "../classPersonajes.js";

export default class Escena1 extends Phaser.Scene {
  constructor() {
    super("escena1");
  }

  preload() {
    APIJuego.setEscena(this);
    APIJuego.cargarAssets();

    var url;
    url =
      "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexbbcodetextplugin.min.js";
    this.load.plugin("rexbbcodetextplugin", url, true);

    url =
      "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rextexteditplugin.min.js";
    this.load.plugin("rextexteditplugin", url, true);
  }

  create() {
    APIJuego.setEscena(this);
    APIJuego.cargarAnims();

  

    let textoVictoria = this.make.text({
      x: 10000,
      y: 10000,
      text: "Hey, me has pillado!",
      style: {
        color: "black",
        font: "64px 'Sigmar One'",
        align: "center",
      },
    });

    // DETECCIÓN DE MÓVIL
    if (ConfiguracionJuego.isMobile) {
      console.log("Era mobile");
      ConfiguracionJuego.resize();
    }

    this.scene.start("menuPrincipal");
  }
}
