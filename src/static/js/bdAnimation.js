let dbAnimations = {
   /* "modelo":{
        "key": "NOMBRE DE LA ANIMACION COMPLETO",
        "startFrame": 0,//Frame inicial es 0
        "endFrame": 5,
        "frameRate": 10,
        "repeat": -1 //-1 = loop
    },*/

    "veloz":{
        "sprite": {
            "spriteName": "veloz",
            "spriteObject": "",
        },
        "animaciones":{
        "iddle":{
        "animationName": "veloz_iddle",
        "spritesheet": "sp_velozIddle",
        "startFrame": 0,
        "endFrame": 5,
        "frameRate": 3,
        "repeat": -1,
        "src": "sprite_veloz_idle.png"
       },
       "atacar":{
        "animationName": "veloz_atacar",
        "spritesheet": "sp_velozAtacar",
        "startFrame": 0,
        "endFrame": 6,
        "frameRate": 3,
        "repeat": -1,
        "src": "sprite_veloz_atacar.png"
       },
       "correr":{
        "animationName": "veloz_correr",
        "spritesheet": "sp_velozCorrer",
        "startFrame": 0,
        "endFrame": 7,
        "frameRate": 10,
        "repeat": -1,
        "src": "sprite_veloz_correr.png"
       },
       "muerte":{
        "animationName": "veloz_muerte",
        "spritesheet": "sp_velozMuerte",
        "startFrame": 0,
        "endFrame": 8,
        "frameRate": 10,
        "repeat": -1,
        "src": "sprite_veloz_muerte.png"
       }
       }

       
   },




   "distancia":{
    "sprite": {
        "spriteName": "distancia",
        "spriteObject": "",
    },
    "animaciones":{
    "iddle":{
    "animationName": "distancia_iddle",
    "spritesheet": "sp_distanciaIddle",
    "startFrame": 0,
    "endFrame": 5,
    "frameRate": 6,
    "repeat": -1,
    "src": "sprite_distancia_idle.png"
   },
   "atacar":{
    "animationName": "distancia_atacar",
    "spritesheet": "sp_distanciaAtacar",
    "startFrame": 0,
    "endFrame": 6,
    "frameRate": 6,
    "repeat": -1,
    "src": "sprite_distancia_atacar.png"
   },
   "correr":{
    "animationName": "distancia_correr",
    "spritesheet": "sp_distanciaCorrer",
    "startFrame": 0,
    "endFrame": 7,
    "frameRate": 7,
    "repeat": -1,
    "src": "sprite_distancia_correr.png"
   },
   "muerte":{
    "animationName": "distancia_muerte",
    "spritesheet": "sp_distanciaMuerte",
    "startFrame": 0,
    "endFrame": 3,
    "frameRate": 8,
    "repeat": -1,
    "src": "sprite_distancia_muerte.png"
   }
   }

   
},
   
   "tank":{
    "sprite": {
        "spriteName": "tank",
        "spriteObject": "",
    },
    "animaciones":{
    "iddle":{
    "animationName": "tank_iddle",
    "spritesheet": "sp_tankIddle",
    "startFrame": 0,
    "endFrame": 3,
    "frameRate": 3,
    "repeat": -1,
    "src":"sprite_tank_idle.png"
   },
   "atacar":{
    "animationName": "tank_atacar",
    "spritesheet": "sp_tankAtacar",
    "startFrame": 0,
    "endFrame": 7,
    "frameRate": 3,
    "repeat": -1,
    "src":"sprite_tank_atacar.png"
   },
   "correr":{
    "animationName": "tank_correr",
    "spritesheet": "sp_tankCorrer",
    "startFrame": 0,
    "endFrame": 3,
    "frameRate": 10,
    "repeat": -1,
    "src":"sprite_tank_correr.png"
   },"muerte":{
    "animationName": "tank_muerte",
    "spritesheet": "sp_tankMuerte",
    "startFrame": 0,
    "endFrame": 3,
    "frameRate": 10,
    "repeat": -1,
    "src":"sprite_tank_muerte.png"
   }
   }
}
}