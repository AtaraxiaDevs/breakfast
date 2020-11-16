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
    APIJuego.activarMusica("temaPreparacion")

    APIJuego.reiniciarCombate();
    var fondo = this.add.image(0, 0, "fondoPreparacion").setOrigin(0);
    

    let clickButtonFlecha1 = this.add
      .image(970, 310, "flecha")
      .setScale(0.4)
      .setInteractive()
      .on("pointerdown", function(){ 
        APIJuego.añadirPersonaje(1)
        APIJuego.colocarPreparacion()
        APIJuego.añadirLineUp(1)
      }
        );

    let clickButtonFlecha2 = this.add.image(970, 515, "flecha").setScale(0.4)
    .setInteractive()
    .on("pointerdown", function(){ 
      APIJuego.añadirPersonaje(2)
      APIJuego.colocarPreparacion()
      APIJuego.añadirLineUp(2)
    });;

    let clickButtonFlecha3 = this.add.image(970, 700, "flecha").setScale(0.4)
    .setInteractive()
    .on("pointerdown", function(){ 
        APIJuego.añadirPersonaje(3)
        APIJuego.colocarPreparacion()
        APIJuego.añadirLineUp(3)
      });;

    let selectorPersonajes = this.add
    .image(550, 490, this.seleccionActual)

    let textoPrecioUnidad = this.make.text({
      x: 625,
      y: 525,
      text:  "100$",
      style: {
        font: "45px 'Sigmar One'",
      },
    })

    let clickButtonCambiar = this.add
    .image(700, 720, APIJuego.lenguage + "_cambiar")
    .setScale(0.2)
    .setInteractive()
    .on("pointerdown", function () {
      switch (APIJuego.escena.seleccionActual) {
        case "atacante":
          selectorPersonajes.setTexture("defensor");
          APIJuego.escena.seleccionActual = "defensor";
          APIJuego.cambiarTexto(textoPrecioUnidad, "100$")
          break;
        case "defensor":
          selectorPersonajes.setTexture("distancia");
          APIJuego.escena.seleccionActual = "distancia";
          APIJuego.cambiarTexto(textoPrecioUnidad, "200$")
          break;
        case "distancia":
          selectorPersonajes.setTexture("velocista");
          APIJuego.escena.seleccionActual = "velocista";
          APIJuego.cambiarTexto(textoPrecioUnidad, "200$")
          break;
        case "velocista":
          selectorPersonajes.setTexture("atacante");
          APIJuego.escena.seleccionActual = "atacante";
          APIJuego.cambiarTexto(textoPrecioUnidad, "100$")
          break;
      }
      APIJuego.cambiarTipo()
    });


    let clickButtonDeshacer = this.add
      .image(400, 720, APIJuego.lenguage + "_deshacer")
      .setScale(0.2)
      .setInteractive()
      .on("pointerdown", () => APIJuego.deshacer())

    let clickButtonSalir = this.add
      .image(1500, 900, "salir")
      .setScale(1.2)
      .setInteractive()
      .on("pointerdown", function () {
        APIJuego.cambiarMusica();
        APIJuego.escena.scene.start("menuPrincipal")
      });

    let textoUnidades = this.add
      .image(545, 250, APIJuego.lenguage + "_unidades")
      .setScale(0.4);

    let dinero = this.make.text({
      x: 740,
      y: 55,
      text: APIJuego.dinero + " $",
      style: {
        font: "70px 'Sigmar One'",
      },
    });


    let clickButtonComenzar = this.add
      .image(930, 900, APIJuego.lenguage + "_comenzar")
      .setScale(0.4)
      .setInteractive()
      .on("pointerdown", function () {
        APIJuego.cambiarMusica()
        APIJuego.escena.scene.start("escena2")
      });

    let clickButtonIdioma = this.add
      .image(370, 910, APIJuego.lenguage === "spanish" ? "english" : "spanish")
      .setScale(0.25)
      .setInteractive()
      .on("pointerdown", function () {
        let lenguage = APIJuego.setLenguage();
        clickButtonDeshacer.setTexture(lenguage + "_deshacer");
        clickButtonCambiar.setTexture(lenguage + "_cambiar")
        clickButtonComenzar.setTexture(lenguage + "_comenzar");
        textoUnidades.setTexture(lenguage + "_unidades");
        clickButtonIdioma.setTexture(
          lenguage === "spanish" ? "english" : "spanish"
        );
      });
  }
}
