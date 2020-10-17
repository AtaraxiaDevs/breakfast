export default class GameFunctions {

    cargarSprites = function(escena){
        escena.load.image("s_provisional", "resources/s_provisional.png");
        escena.load.image("s_provisional2", "resources/s_provisional2.png");
    };

    dibujarSprite = function(escena){
        sprite = escena.physics.add.sprite(200, 400, 's_provisional')
        sprite.setScale(0.5)
        sprite.setVelocityX(60)
    }
}