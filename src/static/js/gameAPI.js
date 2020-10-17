import Personaje from "./classPersonajes.js"
export default class GameAPI {
    //-------------------------- UTILES PARA EL RENDERIZADO ---------------------------------------
    // Función encargada de cargar todos los sprites de la pantalla de partida.
    cargarSprites = function(){
        this.escena.load.image("s_provisional", "resources/s_provisional.png");
        this.escena.load.image("s_provisional2", "resources/s_provisional2.png");
    };
    

    // Parámetros: objeto Personaje
    //Función encargada de mostrar por pantalla el sprite del personaje
    dibujarSprite = function(personaje){
        personaje.setSprite(this.escena.physics.add.sprite(200, 400, personaje.sprite))
        personaje.sprite.setScale(0.6) //! PROVISIONAL hay que adaptarlo si o si a los sprites
        
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
        this.personajesRenderizados.push(new Personaje(tipo));
        this.dibujarSprite(this.personajesRenderizados[this.personajesRenderizados.length-1])


    }

    //Función encargada de recorrer cada personaje y activarlos para que empiecen a luchar.
    arrancarPersonajes = function(){
      for(let i = 0; i<this.personajesRenderizados.length;i++){
          this.personajesRenderizados[i].arrancar();
         
      }
    }

    
    constructor(){
        this.personajesRenderizados = []; // Lista con todos los personajes de la escena
    }
}