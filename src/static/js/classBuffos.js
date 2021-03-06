import  {APIJuego}  from "./main.js";
import Personaje from "./classPersonajes.js";
export default class Buffo {

    activarEfecto = function(){
        switch(tipoBuffo){
            
        }
    }

    sweet = function(linea){
        let y = 0
        switch(linea){
            case 0: y = 500;
            break;
            case 1: y = 660;
            break;
            case 2: y =870;
            break
          }

        APIJuego.efectoActual = APIJuego.escena.physics.add.sprite(960,y,"efectoSweet").setScale(0.5)
        APIJuego.efectoActual.anims.play("animacionEfectoSweet")
        APIJuego.efectoActual.setVelocityY(-30)
        if (this.jugador === 1) {
            APIJuego.datosJugador1.dinero += 100;
        } else {
            APIJuego.datosJugador2.dinero += 100;
        }
        this.jugador === 1 ? APIJuego.datosJugador1 : APIJuego.datosJugador2
        APIJuego.actualizarDinero();
        APIJuego.efectoActual.once("animationcomplete", function () {
            APIJuego.efectoActual.destroy();      
        })
        
    }

    noSweet = function(linea){
        let y = 0
        switch(linea){
            case 0: y = 500;
            break;
            case 1: y = 660;
            break;
            case 2: y =870;
            break
          }

        APIJuego.efectoActual = APIJuego.escena.physics.add.sprite(960,y,"efectoNoSweet").setScale(0.5)
        APIJuego.efectoActual.anims.play("animacionEfectoNoSweet")
        APIJuego.efectoActual.setVelocityY(-30)
        if (this.jugador === 1) {
            if (APIJuego.datosJugador2.dinero < 100) {
                APIJuego.datosJugador2.dinero = 0;
            } else {
                APIJuego.datosJugador2.dinero -= 100;
            }
        } else {
            if (APIJuego.datosJugador1.dinero < 100) {
                APIJuego.datosJugador1.dinero = 0;
            } else {
                APIJuego.datosJugador1.dinero -= 100;
            }
        }
        this.jugador === 1 ? APIJuego.datosJugador1 : APIJuego.datosJugador2
        APIJuego.actualizarDinero();
        APIJuego.efectoActual.once("animationcomplete", function (){
            APIJuego.efectoActual.destroy();
        })
    }

    speedBoy = function(j){
        APIJuego.activarFlechas(j)
    }

    slowDown = function(j){
        APIJuego.activarFlechas(j)
    }




    speedyBoyActivacion = function(linea,j){
        console.log(linea)
        let x = j == 1 ? -85:2000
        let direction = j == 1 ? +1:-1
        let y = 0
        switch(linea){
            case 1: 
            y = 470
            break;
            case 2: 
            y = 470 + 190
            break;
            case 3 :
            y = 470 + 190*2
            break
        }
    


        console.log(y)


 
        APIJuego.combate[linea-1].push(
            new Personaje("veloz", x, y, APIJuego.escena,j==1?+1:-1,APIJuego.idCount)
          )
        APIJuego.combate[linea-1][APIJuego.combate[linea-1].length-1].arrancar();
          APIJuego.idCount++;
    }

    slowDownActivacion = function(linea,j){
        let direction = j ==1? +1:-1
        let y = 0
        switch(linea){
            case 1: 
            y = 470
            break;
            case 2: 
            y = 470 + 190
            break;
            case 3 :
            y = 470 + 190*2
            break
        }
        APIJuego.aplicarDebufo(linea,direction,direction*-1*60,5)
        APIJuego.efectoActual = APIJuego.escena.physics.add.sprite(960,y+50,"efectoSlowDown").setScale(0.5)
        if(direction==-1){ APIJuego.efectoActual.flipX = true}
        APIJuego.efectoActual.anims.play("animacionEfectoSlowDown")
        APIJuego.efectoActual.setVelocityX(direction * 30)
        
        
        APIJuego.escena.time.addEvent({
            delay: 15*1000,
            callback: function(){
                APIJuego.aplicarDebufo(linea,j ==1? +1:-1,0,0)
                APIJuego.efectoActual.destroy();
            },
        })
    }

    mantequilla = function(j){
        APIJuego.activarFlechas(j)
    }

    mantequillaActivacion = function(linea,j){
        let direction = j ==1? +1:-1
        let y = 0
        switch(linea){
            case 1: 
            y = 470
            break;
            case 2: 
            y = 470 + 190
            break;
            case 3 :
            y = 470 + 190*2
            break
        }

        APIJuego.efectoActual = APIJuego.escena.physics.add.sprite(960,y+50,"efectoMantequilla").setScale(2)
        APIJuego.efectoActual.anims.play("animacionEfectoMantequilla")
        APIJuego.efectoActual.once("animationcomplete", ()=>{
            APIJuego.efectoActual.destroy();
            direction = direction*-1
            APIJuego.destruirEnemigos(linea,direction)
                
            })
        
        
        
    }

    mermelada = function(j){
        APIJuego.activarFlechas(j)
    }

    mermeladaActivacion = function(linea,j){
        let direction = j ==1? +1:-1
        let y = 0
        switch(linea){
            case 1: 
            y = 470
            break;
            case 2: 
            y = 470 + 190
            break;
            case 3 :
            y = 470 + 190*2
            break
        }

        APIJuego.efectoActual = APIJuego.escena.physics.add.sprite(960,y+50,"efectoMermelada").setScale(2)
        APIJuego.efectoActual.anims.play("animacionEfectoMermelada")
        APIJuego.efectoActual.once("animationcomplete", ()=>{
            APIJuego.efectoActual.destroy();
            direction = direction*-1
            APIJuego.destruirEnemigos(linea,direction)
                
            })
        
        
        
    }
  
  
    
    activarBuffo = function(j){
        switch(this.tipoBuffo){
            case "SpeedyBoy":
                console.log("HOla")

                this.speedBoy(j);
                break;
            case "Sweet":
                this.sweet(j);
                break;
            case "NoSweet":
                this.noSweet(j)
                break;
            case "SlowDown":
                this.slowDown(j);
                break
            case "Mantequilla":
                this.mantequilla(j)
                break
            case "Mermelada":
                this.mermelada(j)
                break

        }
    }
    
    
    constructor(tipoBuffo, j){
        this.tipoBuffo = tipoBuffo
        this.jugador = j
        console.log(this.jugador)
    }

}