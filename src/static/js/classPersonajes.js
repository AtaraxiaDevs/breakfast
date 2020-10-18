export default class Personaje{
    
    //Función encargada de activar la máquina de estados
    arrancar = function(){
        let multiplicador = 10;
        this.sprite.setVelocityX(this.infoBase.vel*multiplicador); //! POR AHORA solo activa la velocidad en el eje X
    }

    //* Parámetros: objeto Sprite de Phaser
    //Función encargada de sobrescribir la información del sprite una vez se haya creado
    setSprite = function(newSprite){
        this.sprite = newSprite;
    }
    
    //* Parámetros: string con el nombre del tipo de personaje
    //Constructor con la información base de un personaje
    constructor(tipoPersonaje){
        this.infoBase = bd[tipoPersonaje];
        this.hpActual = this.infoBase.hp;
        this.sprite = this.infoBase.sprite;
    }
            
        
    
   
    
    
    
    
}