import Personaje from "./classPersonajes.js"
export default class GameAPI {
    //-------------------------- UTILES PARA EL RENDERIZADO ---------------------------------------
    cargarSprites = function(){
        for(let i in dbAnimations){

        }
    }

    
    // Función encargada de cargar todos las imágenes  de la pantalla de partida.
    cargarAssets = function(){
        this.escena.load.image("s_provisional", "resources/s_provisional.png");
        this.escena.load.image("s_provisional2", "resources/s_provisional2.png");
//this.escena.load.spritesheet("sp_velozIddle", "resources/sprite_veloz_idle.png",{frameWidth:1000,frameHeight:1000})
      //  this.escena.load.spritesheet("sp_velozCorrer", "resources/sprite_veloz_correr.png",{frameWidth:1000,frameHeight:1000})
      //  this.escena.load.spritesheet("sp_tankCorrer", "resources/sprite_tank_correr.png",{frameWidth:1000,frameHeight:1000})

        for(let i in dbAnimations){
            for(let j in dbAnimations[i].animaciones){
                
                console.log("resources/" + dbAnimations[i].animaciones[j].src);
                this.escena.load.spritesheet(dbAnimations[i].animaciones[j].spritesheet,"resources/" + dbAnimations[i].animaciones[j].src,{frameWidth:1000,frameHeight:1000})
            }
            
        }
    };

    cargarAnims = function(){
        for(let i in dbAnimations){
            for(let j in dbAnimations[i].animaciones){
                let animacionActual = dbAnimations[i].animaciones[j]                
                this.escena.anims.create({
                    key: animacionActual.animationName,
                    frames: this.escena.anims.generateFrameNumbers(animacionActual.spritesheet,{start:animacionActual.startFrame,end:animacionActual.endFrame}),
                    frameRate: animacionActual.frameRate,
                    repeat: animacionActual.repeat
                })            }
            
        }

        
    }


    

   

    //Parámetros: objeto Escena de phaser
    //Función encargada de reapuntar la escena para poder trabajar con ella
    setEscena = function(escena){
        this.escena = escena;
    }

    //-------------------------------------------------------------------------------------------------
    //------------------------------ PERSONAJES ------------------------------------------------------
    
    //* Parámetros: string con el tipo de personaje
    //Función encargada de añadir a la lista de personajes de la escena addemás de dibujarlo por pantalla.
    añadirPersonaje = function(tipo){
        this.personajesRenderizados.push(new Personaje(tipo,200,400, this.escena));
        //this.dibujarSprite(this.personajesRenderizados[this.personajesRenderizados.length-1])
        

    }

    //Función encargada de recorrer cada personaje y activarlos para que empiecen a luchar.
    arrancarPersonajes = function(){
      for(let i = 0; i<this.personajesRenderizados.length;i++){
          this.personajesRenderizados[i].arrancar();
         
      }
    }

    //------------------------ UI---------------------------------------
    //TODO -Botón para cambiar personaje
    //TODO -Botón para añadir personaje a la línea
    //TODO -Botón para confirmar compo ? 
    //TODO -Botón deshacer

    
    constructor(){
        this.personajesRenderizados = []; // Lista con todos los personajes de la escena
    }
}