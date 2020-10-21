import  {ConfiguracionJuego,APIJuego } from "../main.js"
import Personaje from "../classPersonajes.js"




export default class Escena2 extends Phaser.Scene {
  constructor() {
    super("escena2");
  }

  create() {
    
    APIJuego.setEscena(this)
   
    
    this.button = this.add.image(500, 500, 's_provisional2').setInteractive(); // BOTÓN PROVISIONAL
    
    this.button.on('pointerdown',function(){
      //APIJuego.añadirPersonaje("placeHolder");
      //APIJuego.añadirPersonaje("placeHolder2")
      APIJuego.añadirPersonaje("veloz")
      APIJuego.arrancarPersonajes();
    } )
    

    // DETECCIÓN DE MÓVIL
    if (ConfiguracionJuego.isMobile) {
      console.log("Era mobile");
      ConfiguracionJuego.resize();
    }
  }

  update() {
  }
}
