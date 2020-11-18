import { ConfiguracionJuego, APIJuego } from "../main.js";

export default class Preparacion extends Phaser.Scene {
  constructor() {
    super("preparacion");
  }

  preload() {
    APIJuego.setEscena(this);
    this.seleccionActual = "atacante";
  }

  create() {
    APIJuego.inicializarMusica("temaPreparacion");

    APIJuego.reiniciarLineUp();
    APIJuego.reiniciarCombate();
    APIJuego.getDinero();
    APIJuego.generarBuffo();

    console.log(APIJuego.buffoActual)
    console.log("iconBuff" + APIJuego.buffoActual)
    var fondo = this.add.image(0, 0, "fondoPreparacion").setOrigin(0);

    
    
    let dinero = this.make.text({
      x: 740,
      y: 55,
      text: APIJuego.dinero + " $",
      style: {
        font: "70px 'Sigmar One'",
      },
    });

    APIJuego.cambiarTexto(dinero, APIJuego.dinero + "$");

    let clickButtonFlecha1 = this.add
      .image(970, 310, "flecha")
      .setScale(0.4)
      .setInteractive()
      .on("pointerdown", function () {
        APIJuego.pagar(1);
        APIJuego.cambiarTexto(dinero, APIJuego.dinero + "$");
      });

    let clickButtonFlecha2 = this.add
      .image(970, 515, "flecha")
      .setScale(0.4)
      .setInteractive()
      .on("pointerdown", function () {
        APIJuego.pagar(2);
        APIJuego.cambiarTexto(dinero, APIJuego.dinero + "$");
      });

    let clickButtonFlecha3 = this.add
      .image(970, 700, "flecha")
      .setScale(0.4)
      .setInteractive()
      .on("pointerdown", function () {
        APIJuego.pagar(3);
        APIJuego.cambiarTexto(dinero, APIJuego.dinero + "$");
      });

      let selectorPersonajes = this.add.image(550, 490, this.seleccionActual);
      let textoPrecioUnidad = this.make.text({
        x: 625,
        y: 525,
        text: "100$",
        style: {
          font: "45px 'Sigmar One'",
        },
      });

      if(APIJuego.modoActual != "Normal"){
      selectorPersonajes.visible = false
      let textoInterrogante = this.make.text({
        x: 550,
        y: 400,
        text: "?",
        style: {
          font: "100px 'Sigmar One'",
        },
      });


      APIJuego.cambiarTexto(textoPrecioUnidad,"?")
    }

    

    let clickButtonCambiar = this.add
      .image(700, 720, APIJuego.lenguage + "_cambiar")
      .setScale(0.2)
      .setInteractive()
      .on("pointerdown", function () {

        if(APIJuego.modoActual == "Normal"){
        switch (APIJuego.personajeActual) {
          case "atacante":
            selectorPersonajes.setTexture("tank");
            APIJuego.cambiarTexto(textoPrecioUnidad, "100$");
            APIJuego.precioActual = 100;
            break;
          case "tank":
            selectorPersonajes.setTexture("distancia");
            APIJuego.cambiarTexto(textoPrecioUnidad, "200$");
            APIJuego.precioActual = 200;
            break;
          case "distancia":
            selectorPersonajes.setTexture("veloz");
            APIJuego.cambiarTexto(textoPrecioUnidad, "200$");
            APIJuego.precioActual = 200;
            break;
          case "veloz":
            selectorPersonajes.setTexture("atacante");
            APIJuego.cambiarTexto(textoPrecioUnidad, "100$");
            APIJuego.precioActual = 100;
            break;
        }
        APIJuego.cambiarTipo();
      }else{
          APIJuego.randomAliado();
          console.log(APIJuego.personajeActual)
      }}
      
      );

    let clickButtonDeshacer = this.add
      .image(400, 720, APIJuego.lenguage + "_deshacer")
      .setScale(0.2)
      .setInteractive()
      .on("pointerdown", function () {
        APIJuego.deshacer();
        APIJuego.cambiarTexto(dinero, APIJuego.dinero + "$");
      });

    let clickButtonSalir = this.add
      .image(1500, 900, "salir")
      .setScale(1.2)
      .setInteractive()
      .on("pointerdown", function () {
        APIJuego.eliminarCancion()
        APIJuego.escena.scene.start("menuPrincipal");
      });

    let textoUnidades = this.add
      .image(545, 250, APIJuego.lenguage + "_unidades")
      .setScale(0.4);

    let clickButtonSonido = this.add
      .image(600, 900, APIJuego.sonidoActivado ? "sonidoOn" : "sonidoOff")
      .setInteractive()
      .on("pointerdown", function () {
        APIJuego.controlMusica();
        clickButtonSonido.setTexture(
          APIJuego.sonidoActivado ? "sonidoOn" : "sonidoOff"
        );
      });

    let clickButtonComenzar = this.add
      .image(930, 900, APIJuego.lenguage + "_comenzar")
      .setScale(0.4)
      .setInteractive()
      .on("pointerdown", function () {
        APIJuego.eliminarCancion();
        APIJuego.escena.scene.start("escena2");
      });

    let clickButtonIdioma = this.add
      .image(370, 910, APIJuego.lenguage === "spanish" ? "english" : "spanish")
      .setScale(0.25)
      .setInteractive()
      .on("pointerdown", function () {
        let lenguage = APIJuego.setLenguage();
        clickButtonDeshacer.setTexture(lenguage + "_deshacer");
        clickButtonCambiar.setTexture(lenguage + "_cambiar");
        clickButtonComenzar.setTexture(lenguage + "_comenzar");
        textoUnidades.setTexture(lenguage + "_unidades");
        clickButtonIdioma.setTexture(
          lenguage === "spanish" ? "english" : "spanish"
        );
      });

      switch(APIJuego.lineaBuffo){
        case 0: 
        this.add.image(1080,220,"iconBuff" + APIJuego.buffoActual).setScale(0.8)
        break;
        case 1:
          this.add.image(1075,425,"iconBuff" + APIJuego.buffoActual).setScale(0.8)
        break
        case 2:
          this.add.image(1075,610,"iconBuff" + APIJuego.buffoActual).setScale(0.8)
          break
      }


      

      
     
    

  }
}
