import Configuracion from "./configFunctions.js";
import GameAPI from "./gameAPI.js";
import Escena1 from "./escenas/escena1.js";
import Escena2 from "./escenas/escena2.js";
import MenuPrincipal from "./escenas/menuPrincipal.js";
import Ranking from "./escenas/ranking.js";
import Preparacion from "./escenas/preparacion.js";
import Creditos from "./escenas/creditos.js";
import Tutorial from "./escenas/tutorial.js";
import Descripcion from "./escenas/escenasTutorial/descripcion.js";
import Controles from "./escenas/escenasTutorial/controles.js";
import Habilidades from "./escenas/escenasTutorial/habilidades.js";
import Personajes from "./escenas/escenasTutorial/personajes.js";
import Jefe from "./escenas/escenasTutorial/personajesStats/jefe.js";
import Distancia from "./escenas/escenasTutorial/personajesStats/distancia.js";
import Defensor from "./escenas/escenasTutorial/personajesStats/defensor.js";
import Velocista from "./escenas/escenasTutorial/personajesStats/velocista.js";
import Atacante from "./escenas/escenasTutorial/personajesStats/atacante.js";
import TiendaSkins from "./escenas/tienda/tiendaSkins.js";
import TiendaComprar from "./escenas/tienda/tiendaComprar.js";
import Login from "./escenas/login.js";
import Fases from "./escenas/escenasTutorial/fases.js";
import TiendaPremios from "./escenas/tienda/tiendaPremios.js";
import PrePartida from "./escenas/prepartida.js";
import Resultados from "./escenas/resultados.js";
import ModoJugadores from "./escenas/modoJugadores.js";

var config = {
  type: Phaser.AUTO,
  physics: {
    default: "arcade",
    debug: true,
    arcade: {},
  },
  dom: {
    createContainer: true,
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
  scene: [
    Escena1,
    Login,
    PrePartida,
    ModoJugadores,
    MenuPrincipal,
    Ranking,
    Preparacion,
    Creditos,
    TiendaSkins,
    TiendaComprar,
    TiendaPremios,
    Tutorial,
    Descripcion,
    Controles,
    Habilidades,
    Personajes,
    Jefe,
    Distancia,
    Defensor,
    Velocista,
    Atacante,
    Fases,
    Escena2,
    Resultados
  ],
  parent: "canvas",
};

var game = new Phaser.Game(config);

export let ConfiguracionJuego = new Configuracion(game);
export let APIJuego = new GameAPI();
