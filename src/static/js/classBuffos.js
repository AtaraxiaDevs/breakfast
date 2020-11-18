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
        APIJuego.efectoActual.once("animationcomplete", ()=>{
            APIJuego.efectoActual.destroy();
            
        })
        //CAMBIAR EL DINERO DEL JUGADOR
        //ACTIVAR EL SPRITE ANIMATION
        //DESTRUIRLO CUANDO ACABE
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
        APIJuego.efectoActual.once("animationcomplete", ()=>{
        APIJuego.efectoActual.destroy();
            
        })
    }

    speedBoy = function(j){
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
        }
    }
    
    
    constructor(tipoBuffo){
        console.log(tipoBuffo)
        this.tipoBuffo = tipoBuffo
    }

}