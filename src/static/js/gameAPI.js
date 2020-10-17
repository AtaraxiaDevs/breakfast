export default class GameAPI {
    
    cargarSprites = function(){
        this.escena.load.image("s_provisional", "resources/s_provisional.png");
        this.escena.load.image("s_provisional2", "resources/s_provisional2.png");
    };
    
    dibujarSprite = function(){
        let sprite = this.escena.physics.add.sprite(200, 400, 's_provisional')
        sprite.setScale(0.6)
        sprite.setVelocityX(60)
    }

    setEscena = function(escena){
        this.escena = escena;
    }

    constructor(){
        
    }
}