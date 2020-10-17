import  {ConfiguracionJuego,APIJuego } from "./phaserConfig.js"


let sprite
let sprite2

export default class Escena1 extends Phaser.Scene {
  constructor() {
    super("escena1");
  }

  preload() {
    APIJuego.setEscena(this)
    APIJuego.cargarSprites()
    
  }

  create() {
    
    this.button = this.add.image(500, 500, 's_provisional2').setInteractive();
    this.button.on('pointerdown',function(){
      APIJuego.dibujarSprite()
    } )
    
    if (ConfiguracionJuego.isMobile) {
      console.log("Era mobile");
      ConfiguracionJuego.resize();
    }
  }

  update() {
  }
}
