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
    this.setVelocityX(this.direction * this.velocidadActual*this.multiplicador-this.debufoMov); 
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
    this.setTimmer(this.infoBase.dps + this.debufoRecarga,()=>{
        this.state="";
       
      //  APIJuego.reiniciarVelocidades(this.id, this.direction)
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
        APIJuego.reiniciarVelocidades(this.id, this.direction)
        APIJuego.eliminarPersonaje(this.id)
        
    })
}

seguir = function(vel){
    this.state = "siguiendo"
    

    this.setVelocityX(vel)
}

buscarObjetivo = function(){
    let personajeCercano = APIJuego.personajeCercano(this.id,this.x,this.direction)
   
    if(personajeCercano.enemigo == ""){
        this.objetivo = ""
        return false;
    }
    
   
    
    if(personajeCercano.enemigo != ""){
        if(personajeCercano.enemigo.separacion <= 175*this.rango){
            this.objetivo = personajeCercano.enemigo.id
            return true
        }else{
            this.objetivo = ""

            
        }
    }else{
        this.objetivo = "";
    }

    return false
    
   
}

buscarAliado = function(){

    let personajeCercano = APIJuego.personajeCercano(this.id,this.x,this.direction)
    if(personajeCercano.aliado != ""){
        
         if(personajeCercano.aliado.separacion <= 250){
         if(personajeCercano.aliado.vel < this.velocidadActual){
           
             this.velocidadActual = personajeCercano.aliado.vel
             
             return true
        }
         
     }

     }

     return false;
}



update = function(){
    if(this.arrancado){
    if(this.hpActual<=0){
        this.morir()
    }else{
        if(this.state!="recargando"){
            if (this.buscarObjetivo()){
                this.atacar();
                }else{
                
                    if(!this.buscarAliado()){              
                        this.correr();
                        if(this.velocidadActual==0){
                            this.playAnimation("idle")
                        }else{
                            this.playAnimation("correr")
                        }
                        this.velocidadActual = this.infoBase.vel           
                        
                    }
                   
                }
        }
        

    }   
    
}

}
    
    





playAnimation = function(animacion){
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
    this.debufoMov = 0;
    this.debufoRecarga = 0
    this.objetivo = "";
    this.id = id
    this.arrancado = false;
    this.recarga = 0;
    this.velocidadActual = this.infoBase.vel

    this.rango = this.infoBase.rango

    
    escena.add.existing(this);
    escena.physics.add.existing(this);

    this.playAnimation("idle")
    this.state = "idle";
    this.daño = this.infoBase.atk
    this.setScale("0.4");
    this.setOrigin(0.5,0.5);
    if(this.direction==-1){ this.flipX = true}

    

}}