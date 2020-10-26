export default class Personaje extends Phaser.Physics.Arcade.Sprite{
    
    //Función encargada de activar la máquina de estados
    arrancar = function(){
        let multiplicador = 10;
        this.setVelocityX(this.direction * this.infoBase.vel*multiplicador); //! POR AHORA solo activa la velocidad en el eje X, deberia arrancar la máquna de estados
        
        this.playAnimation("correr")
    }

    

    playAnimation = function(animacion){
        this.anims.play(this.tipo + "_" + animacion,true)
    }

    

    
    //* Parámetros: string con el nombre del tipo de personaje
    //Constructor con la información base de un personaje
    constructor(tipoPersonaje,x,y,escena,direction){
        super(escena,x,y,"sp_" + tipoPersonaje + "Iddle")
        this.direction = direction
        this.tipo = tipoPersonaje
        this.infoBase = bd[tipoPersonaje];
        this.hpActual = this.infoBase.hp;
        this.priority = this.infoBase.priority;

        
        escena.add.existing(this);
        escena.physics.add.existing(this);

        this.playAnimation("iddle")
        this.setScale("0.6");
        if(this.direction==-1){ this.flipX = true}

    }
            
        
    
   
    
    
    
    
}