export default class Personaje extends Phaser.Physics.Arcade.Sprite{
    
    //Función encargada de activar la máquina de estados
    arrancar = function(){
        let multiplicador = 10;
       // this.sprite.setVelocityX(this.infoBase.vel*multiplicador); //! POR AHORA solo activa la velocidad en el eje X
    }

    

    playAnimation = function(animacion){
        this.sprite.anims.play(this.tipo + "_" + animacion,true)
    }

    //* Parámetros: objeto Sprite de Phaser
    //Función encargada de sobrescribir la información del sprite una vez se haya creado
    setSprite = function(newSprite){
        this.sprite = newSprite;
    }


    
    //* Parámetros: string con el nombre del tipo de personaje
    //Constructor con la información base de un personaje
    constructor(tipoPersonaje,x,y,escena){
        super(escena,x,y,tipoPersonaje)
        this.tipo = tipoPersonaje
        this.infoBase = bd[tipoPersonaje];
        this.hpActual = this.infoBase.hp;
        this.sprite = this.infoBase.sprite;

        this.sprite = escena.add.existing(x, y, this.sprite);
       // this.sprite.setScale(0.6) //! PROVISIONAL hay que adaptarlo si o si a los sprites
        //this.playAnimation("iddle");

    }
            
        
    
   
    
    
    
    
}