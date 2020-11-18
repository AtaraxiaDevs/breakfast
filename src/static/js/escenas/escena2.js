import { ConfiguracionJuego, APIJuego } from "../main.js";
import Personaje from "../classPersonajes.js";

export default class Escena2 extends Phaser.Scene {
  constructor() {
    super("escena2");
  }

  create() {
    var fondo = this.add.image(0, 0, APIJuego.escenarioActual).setOrigin(0);

    APIJuego.setEscena(this);
    APIJuego.reiniciarCombate();
    APIJuego.cargarCombate();

    APIJuego.inicializarMusica("temaCombate")
    APIJuego.colocarBuffoEscenario();
    APIJuego.arrancarPersonajes();

    APIJuego.flecha1 = this.add.image(100, 500, "flecha2").setScale(0.25)
    APIJuego.flecha1.setInteractive().on("pointerdown",function(){
      if(APIJuego.datosActivacionBuffo.flechaActivada1 == ""){
        APIJuego.datosActivacionBuffo.flechaActivada1 = 1
        APIJuego.segundaActivacionBuffo(1)

      }else{
        APIJuego.datosActivacionBuffo.flechaActivada2 = 1
        APIJuego.segundaActivacionBuffo(1)

      }
      APIJuego.desactivarFlecha(1)

    })
    APIJuego.flecha1.visible = false

    APIJuego.flecha2 = this.add.image(100, 680, "flecha1").setScale(0.25)
    APIJuego.flecha2.setInteractive().on("pointerdown",function(){
      if(APIJuego.datosActivacionBuffo.flechaActivada1 == ""){
        APIJuego.datosActivacionBuffo.flechaActivada1 = 2
        APIJuego.segundaActivacionBuffo(1)

      }else{
        APIJuego.datosActivacionBuffo.flechaActivada2 = 2
        
        APIJuego.segundaActivacionBuffo(1)

      }
      APIJuego.desactivarFlecha(1)

    })
    APIJuego.flecha2.visible = false

    APIJuego.flecha3 = this.add.image(100, 880, "flecha2").setScale(0.25)
    APIJuego.flecha3.setInteractive().on("pointerdown",function(){
      if(APIJuego.datosActivacionBuffo.flechaActivada1 == ""){
        APIJuego.datosActivacionBuffo.flechaActivada1 = 3
        APIJuego.segundaActivacionBuffo(1)

      }else{
        APIJuego.datosActivacionBuffo.flechaActivada2 = 3
      }
      APIJuego.desactivarFlecha(1)

    })
    APIJuego.flecha3.visible = false



    APIJuego.flechaReverse1 = this.add.image(1820, 500, "flecha1").setScale(0.25)
    APIJuego.flechaReverse1.rotation = Math.PI
    APIJuego.flechaReverse1.setInteractive().on("pointerdown",function(){
      if(APIJuego.datosActivacionBuffo.flechaActivada1 == ""){
        APIJuego.datosActivacionBuffo.flechaActivada1 = 1
        APIJuego.segundaActivacionBuffo(2)

        
      }else{
        APIJuego.datosActivacionBuffo.flechaActivada2 = 1
        APIJuego.segundaActivacionBuffo(2)

      }
      APIJuego.desactivarFlecha(1)

    })
    APIJuego.flechaReverse1.visible = false
    APIJuego.flechaReverse2 = this.add.image(1820, 680, "flecha2").setScale(0.25)
    APIJuego.flechaReverse2.rotation = Math.PI
    APIJuego.flechaReverse2.setInteractive().on("pointerdown",function(){
      if(APIJuego.datosActivacionBuffo.flechaActivada1 == ""){
        APIJuego.datosActivacionBuffo.flechaActivada1 = 2
        APIJuego.segundaActivacionBuffo(2)

      }else{
        APIJuego.datosActivacionBuffo.flechaActivada2 = 2
        APIJuego.segundaActivacionBuffo(2)

      }
      APIJuego.desactivarFlecha(1)

    })
    APIJuego.flechaReverse2.visible = false

    APIJuego.flechaReverse3 = this.add.image(1820, 880, "flecha1").setScale(0.25)
    APIJuego.flechaReverse3.rotation = Math.PI
    APIJuego.flechaReverse3.setInteractive().on("pointerdown",function(){
      if(APIJuego.datosActivacionBuffo.flechaActivada1 == ""){
        APIJuego.datosActivacionBuffo.flechaActivada1 = 3
        APIJuego.segundaActivacionBuffo(2)

      }else{
        APIJuego.datosActivacionBuffo.flechaActivada2 = 3
        APIJuego.segundaActivacionBuffo(2)

      }
      
      APIJuego.desactivarFlecha(1)

    })
    APIJuego.flechaReverse3.visible = false


    APIJuego.buffoActivoJ1 = this.add.image(430,75,"iconBuffSweet").setScale(0.8)
    APIJuego.buffoActivoJ1.setInteractive().on("pointerdown",function(){
      APIJuego.quitarBuffoJ1(); 
 })
    APIJuego.buffoActivoJ1.visible = false
    APIJuego.buffoActivoJ1.input.enable = false
    
    APIJuego.buffoActivoJ2 = this.add.image(1490,75,"iconBuffSweet").setScale(0.8)
    
    APIJuego.buffoActivoJ2.setInteractive().on("pointerdown",function(){
      APIJuego.quitarBuffoJ2(); 
 })    
    APIJuego.buffoActivoJ2.visible = false
    APIJuego.buffoActivoJ1.input.enable = false

 

  }

  

  update() {
    APIJuego.actualizar();
  }
}
