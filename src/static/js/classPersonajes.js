import  {APIJuego}  from "./main.js";
export default class Personaje extends Phaser.Physics.Arcade.Sprite{
    
    //Función encargada de activar la máquina de estados
    arrancar = function(){
        
        this.state = "corriendo"
        this.arrancado = true;
    }

    correr = function(){
        this.state = "corriendo"
        this.playAnimation("correr")
        this.setVelocityX(this.direction * this.infoBase.vel*this.multiplicador); //! POR AHORA solo activa la velocidad en el eje X, deberia arrancar la máquna de estados
        
    }
   
    atacar = function(){

        this.setVelocityX(0)


        this.playAnimation("atacar")
        this.on("animationcomplete", function(){
            console.log("esperando")
            APIJuego.hacerDaño(this.objetivo,1)
            this.recarga = 100
            this.state = "recargando"
        })
        
    }

    recargar = function(){
        this.state = "recargando"
        this.playAnimation("idle")
        
    }

    morir = function(){
        this.state = "muriendo"
        this.playAnimation("muerte")
        this.on("animationcomplete", function(){
            APIJuego.eliminarPersonaje(this.id)
        })
        
        //timmer destroy()

    }

    buscarObjetivo = function(){
        let enemigoCercano = APIJuego.enemigoCercano(this.id,this.x,this.direction)
        
        if(enemigoCercano == undefined){

            this.objetivo = ""
            return false;
        }else{
            if(enemigoCercano.separacion < 125){
                this.objetivo = enemigoCercano.id;
                return true;
            }else{
                this.objetivo = ""
                return false;
            }
            
        }
        
    }

    reducirRecarga = function(){
        //this.playAnimation("idle")
        this.recarga--;
        if(this.recarga<=0){
            this.objetivo = ""
            this.correr()
        }
    }

    update = function(){
        if(this.arrancado){
        if(this.hpActual<=0){
            this.morir()
        }else{
            if(this.buscarObjetivo() && this.state!="recargando"){
                this.atacar()
            }else{
                if(this.state == "recargando"){
                    this.recargar()
                    this.reducirRecarga();
                }else{
                    this.correr();
    
                }
            }
        }
        
       


    }
        
        

    }

    

    playAnimation = function(animacion){
        this.anims.play(this.tipo + "_" + animacion,true)
    }

    

    
    //* Parámetros: string con el nombre del tipo de personaje
    //Constructor con la información base de un personaje
    constructor(tipoPersonaje,x,y,escena,direction,id){
        super(escena,x,y,"sp_" + tipoPersonaje + "Iddle")
        this.direction = direction
        this.tipo = tipoPersonaje
        this.infoBase = bd[tipoPersonaje];
        this.hpActual = this.infoBase.hp;
        this.priority = this.infoBase.priority;
        this.multiplicador = 10;
        this.objetivo = "";
        this.id = id
        this.arrancado = false;
        this.recarga = 0;

        
        escena.add.existing(this);
        escena.physics.add.existing(this);

        this.playAnimation("idle")
        this.state = "idle";
        this.setScale("0.4");
        if(this.direction==-1){ this.flipX = true}

    }
            
        
    
   
    
    
    
    
}