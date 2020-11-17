import  {APIJuego}  from "./main.js";
export default class Personaje extends Phaser.Physics.Arcade.Sprite{
    
 //Función encargada de activar la máquina de estados
 arrancar = function(){
        
    this.state = "corriendo"
    this.arrancado = true;

}

correr = function(){
    this.state = "corriendo"
    if (APIJuego.getRandom(0, 600) < 1) {
        switch(APIJuego.getRandom(0, 2)){
            case 1:
                APIJuego.playSonido("gritito1")
                break;
            case 2:
                APIJuego.playSonido("gritito2")
                break;
        }
    }
    this.setVelocityX(this.direction * this.velocidadActual*this.multiplicador); 
}

atacar = function(){
    this.velocidadActual = 0;
    this.setVelocityX(0)
    this.state= "atacando"
    if (APIJuego.getRandom(0, 100) < 1) {
        switch(APIJuego.getRandom(0, 3)){
            case 1:
                APIJuego.playSonido("hit1")
                break;
            case 2:
                APIJuego.playSonido("hit2")
                break;
            case 3:
                APIJuego.playSonido("hit3")
                break;
        }
    }
    this.playAnimation("atacar")
    this.state = "atacando" 
    this.once("animationcomplete",()=>{
        if(this.state=="atacando"){
   
            APIJuego.hacerDaño(this.objetivo,this.daño)
            this.recargar()
        } 
    }) 
}



recargar = function(){
    this.state = "recargando"
    this.playAnimation("idle")
    this.setTimmer(2,()=>{
        this.state="";
        this.velocidadActual = this.infoBase.vel;

    })
}

morir = function(){
    this.state = "muriendo"
    switch (APIJuego.getRandom(0, 2)) {
        case 1: 
            APIJuego.playSonido("muerte")
            break;
        case 2:
            APIJuego.playSonido("muerte3")
            break;
    }
    this.playAnimation("muerte")
    this.once("animationcomplete", ()=>{
        APIJuego.eliminarPersonaje(this.id)
    })
}

seguir = function(vel){
    this.state = "siguiendo"
    

    this.setVelocityX(vel)
}

buscarObjetivo = function(){
    let personajeCercano = APIJuego.personajeCercano(this.id,this.x,this.direction)
   // console.log(personajeCercano.separacion)
    if(personajeCercano == undefined){
       
        this.objetivo = ""
        return false;
    }else{
        if(personajeCercano.separacion <= 175){
            if(personajeCercano.direction != this.direction){
            this.objetivo = personajeCercano.id;
            return true;
            }else{


                if(personajeCercano.vel < this.velocidadActual){
                    this.velocidadActual = personajeCercano.vel
                    this.setVelocityX(this.velocidadActual)
                    
               }else{
                  
                
               }
            
                
            return false;
        }
        
    }else{
        this.velocidadActual = this.infoBase.vel
        return false
    
}
}
}



update = function(){
    if(this.arrancado){
    if(this.hpActual<=0){
        this.morir()
    }else{
        if(this.state!="recargando" && this.buscarObjetivo()){
            this.atacar();
        }else if(this.state!="recargando"){
            this.correr();
            if(this.velocidadActual==0){
                this.playAnimation("idle")
            }else{
                this.playAnimation("correr")
            }
        }
    }
    
}

}
    
    





playAnimation = function(animacion){
    //console.log(animacion)
    this.anims.play(this.tipo + "_" + animacion,true)
}

setTimmer = function(seg,calback){
    let timer = APIJuego.escena.time.addEvent({
        delay: seg*1000,
        callback: calback,
       
        
    })
}




//* Parámetros: string con el nombre del tipo de personaje
//Constructor con la información base de un personaje
constructor(tipoPersonaje,x,y,escena,direction,id){
    super(escena,x,y,"sp_" + tipoPersonaje + "Iddle")
    this.direction = direction
    this.tipo = tipoPersonaje
    this.infoBase = bdInfoPersonajes[tipoPersonaje];
    this.hpActual = this.infoBase.hp;
    this.priority = this.infoBase.priority;
    this.multiplicador = 10;
    this.objetivo = "";
    this.id = id
    this.arrancado = false;
    this.recarga = 0;
    this.velocidadActual = this.infoBase.vel

    
    escena.add.existing(this);
    escena.physics.add.existing(this);

    this.playAnimation("idle")
    this.state = "idle";
    this.daño = this.infoBase.atk
    this.setScale("0.4");
    this.setOrigin(0.5,0.5);
    if(this.direction==-1){ this.flipX = true}
    

}}