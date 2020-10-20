import Personaje from "./classPersonajes.js"
export default class GameAPI {
    //-------------------------- UTILES PARA EL RENDERIZADO ---------------------------------------
    // Función encargada de cargar todos los sprites de la pantalla de partida.
    cargarSprites = function(){
        this.escena.load.image("s_provisional", "resources/s_provisional.png");
        this.escena.load.image("s_provisional2", "resources/s_provisional2.png");
        this.escena.load.spritesheet("sp_velozIddle", "resources/sprite_veloz_idle.png",{frameWidth:1000,frameHeight:1000})
        this.escena.load.spritesheet("sp_velozCorrer", "resources/sprite_veloz_correr.png",{frameWidth:1000,frameHeight:1000})
    };

    cargarAnims = function(){
        for(let i in dbAnimations){
            for(let j in dbAnimations[i]){
                console.log(dbAnimations[i][j].spritesheet)
            this.escena.anims.create({
                /*key: dbAnimations[i].animationName,
                frames: this.escena.anims.generateFrameNumbers(dbAnimations[i].spritesheet,{start:dbAnimations[i].startFrame,end:dbAnimations[i].endFrame}),
                frameRate: dbAnimations[i].frameRate,
                repeat: dbAnimations[i].repeat*/
                key: "veloz_correr",
                frames: this.escena.anims.generateFrameNumbers("sp_velozCorrer",{start:0,end:7}),
                frameRate: 10,
                repeat: -1
            })
            }
            
            
            
        }
    }


    

    // Parámetros: objeto Personaje
    //Función encargada de mostrar por pantalla el sprite del personaje
    dibujarSprite = function(personaje){
        personaje.setSprite(this.escena.physics.add.sprite(200, 400, personaje.sprite))
        personaje.sprite.setScale(0.6) //! PROVISIONAL hay que adaptarlo si o si a los sprites
        personaje.playAnimation("correr");
        
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
        this.dibujarSprite(this.personajesRenderizados[this.personajesRenderizados.length-1])
        

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