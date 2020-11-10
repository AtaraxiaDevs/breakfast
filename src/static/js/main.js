import Configuracion from "./configFunctions.js";
import GameAPI from "./gameAPI.js";
import Escena1 from "./escenas/escena1.js";
import Escena2 from "./escenas/escena2.js";
import MenuPrincipal from "./escenas/menuPrincipal.js";
import Ranking from "./escenas/ranking.js";
import Preparacion from "./escenas/preparacion.js"

var config = {
  type: Phaser.AUTO,
  physics: {
    default: "arcade",
    debug: true,
    arcade: {},
  },
  scale: {
    mode: Phaser.Scale.FIT,
    orientation: Phaser.Scale.Orientation.LANDSCAPE,
    parent: "phaser-example",
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1920,
    height: 1080,
  },
  backgroundColor: 0x444444,
  scene: [Escena1, MenuPrincipal, Ranking, Preparacion, Escena2],
  parent: "canvas",
};

var game = new Phaser.Game(config);

export let ConfiguracionJuego = new Configuracion(game);
export let APIJuego = new GameAPI();
