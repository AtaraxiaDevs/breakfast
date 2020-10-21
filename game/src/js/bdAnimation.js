let dbAnimations = {
  /* "modelo":{
        "key": "NOMBRE DE LA ANIMACION COMPLETO",
        "startFrame": 0,//Frame inicial es 0
        "endFrame": 5,
        "frameRate": 10,
        "repeat": -1 //-1 = loop
    },*/

  veloz: {
    iddle: {
      animationName: "veloz_iddle",
      spritesheet: "sp_velozIddle",
      startFrame: 0,
      endFrame: 3,
      frameRate: 3,
      repeat: -1,
    },
    atacar: {
      animationName: "veloz_atacar",
      spritesheet: "sp_velozAtacar",
      startFrame: 0,
      endFrame: 7,
      frameRate: 3,
      repeat: -1,
    },
    correr: {
      animationName: "veloz_correr",
      spritesheet: "sp_velozCorrer",
      startFrame: 0,
      endFrame: 3,
      frameRate: 10,
      repeat: -1,
    },
    muerte: {
      animationName: "veloz_muerte",
      spritesheet: "sp_velozMuerte",
      startFrame: 0,
      endFrame: 3,
      frameRate: 10,
      repeat: -1,
    },
  },
};
