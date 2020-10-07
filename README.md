# GDD

![alt text](https://github.com/AtaraxiaDevs/breakfast/blob/main/GDD/LogoAtaraxia/logo_definitivo.png)



## CONTACTO
#### WEB:
#### [TWITTER: @AtaraxiaDevs](https://twitter.com/AtaraxiaDevs?s=08)
#### [YOUTUBE: https://www.youtube.com/watch?v=YqdJcBMMgJw](https://www.youtube.com/channel/UCf6IyOGVFrC8l-6_nfMpzhQ)

<br></br>
<hr></hr>
<br></br>


# INDICE

## [1.- FICHA RESUMEN	](#fichaResumen)
## [2.- HISTORIAL DE VERSIONES](#historialDeVersiones)
## [3.- SINOPSIS DEL JUEGO](#sinopsisDelJuego)
## [4.- CARACTERÍSTICAS PRINCIPALES](#caracteristicasPrincipales)	
## [5.- DISEÑO DEL JUEGO](#diseñoDelJuego)		
### [5.1.- MECÁNICAS](#mecanicas)			
### [5.2.- ESTADOS JUEGO](#estadosJuego)
### [5.3.- INTERFACES](#interfaces)
### [5.4.- CONTROLES](#controles)
### [5.5.- PROGRESO DEL JUEGO](#progresoDelJuego)
### [5.6.- NIVELES](#niveles)
## [6.- DISEÑO DEL MUNDO](#diseñoDelMundo)
### [6.1.- PERSONAJES](#personajes)
### [6.2.- LOCALIZACIONES](#localizaciones)
## [7.- ARTE](#arte)
### [7.1.- ESTILO Y REFERENCIAS](#estiloYReferncias)
### [7.2.- CONCEPTS](#concepts)
### [7.3.- ARTE PROMOCIONAL](#artePromocional)
## [8.- SONIDO](#sonido)	
### [8.1.- BANDA SONORA](#bandaSonora)	
### [8.2.- EFECTOS DE SONIDO](#efectosDeSonido)
## [9.- NARRATIVA Y GUION](#narrativaYGuion)	
### [9.1.- SINOPSIS](#sinopsis)
### [9.2.- GUION Y DIÁLOGOS](#guionYDialogos)
## [10.- DETALLES DE PRODUCCIÓN](#detallesDeProduccion)
### [10.1.- MIEMBROS DEL EQUIPO](#miembrosDelEquipo)
### [10.2.- DATOS DE DESARROLLO](#datosDeDesarrollo)
### [10.3.- MODELO DE NEGOCIO](#modeloDeNegocio)

---
---

## 1.- FICHA RESUMEN <a name="fichaResumen"/>

| **NOMBRE**      | BTF: Break-Troops-Fast   |
| :-------------: | :---------------------:  |
| **VERSION**     | 1.0                      |
| **GENERO**      | Estrategia / Turnos      |
| **TEMÁTICA**    | Comida                   |
| **PLATAFORMA**  | Web (PC, Móvil o Tablet) |
| **JUEGOS RELACIONADOS**  | Clash Royale, Warlords: Call To Arms, Stratego |
| **PUBLICO OBJETIVO**     | Infantil, Casual        |
| **ESTILO VISUAL**        | 2D, Pixel Art           |
| **VISTA**       | Picada                   |
| **TECNOLOGÍAS** | Phaser                   |
| **MECÁNICAS**   | - Duelos 1vs1 de Ejércitos, a ciegas <br> - Diferentes Unidades y Habilidades <br>- Conquistar el terreno enemigo |

---

## 2.- HISTORIAL DE VERSIONES <a name="historialDeVersiones"/>

| **VERSION**     | **CAMBIOS DE VERSION**  |
| :-------------: |:---------------------:  |
| 1.0             | Versión Inicial         |
|                 |                         |
|                 |                         |

---
 
## 3.- SINOPSIS DEL JUEGO <a name="sinopsisDelJuego"/>

> ¿Cual es la comida más importante del día? ¡Compite con tus amigos para ayudar a los pequeños alienígenas (NOMBRE PROVISIONAL) del espacio exterior a decidir! 
> ¿Estas del lado de la valiente Mantequilla Gritona o de la astuta Mermelada Explosiva (NOMBRE PROVISIONAL)? ¡Descúbrelo aquí!

> BTF: Break-Troops-Fast es un juego de estrategia, que enfrenta a dos jugadores en una batalla donde deberán gestionar sus comestibles tropas para conseguir llegar hasta
> la base enemiga y ganar la ronda. El equipo ganador se decide al mejor de 5 de estas rondas, donde los ejércitos tendrán que sobrevivir a un escenario cambiante. ¡Usa las
> habilidades de tus aliados para abrirte paso! El enemigo se esconde... ¡pero tu revelarás su plan, y haras que muerdan el polvo del Cacao!

## 4.- CARACTERÍSTICAS PRINCIPALES <a name="caracteristicasPrincipales"/>

**- Batallas 1vs1:** Dos equipos, dos ejércitos, las mismas unidades. Llegar con una unidad al terreno rival suma un punto para la ronda. Hay un recuento al final de cada ronda, que determina el ganador de la misma. La victoria final se consigue ganando 3 de estas 5 rondas.<br>
**- Multijugador Local:** Juega en pantalla dividida con un amigo en el dispositivo que prefieras. ¡Evita que cotillee tu fase de preparación!<br>
**- Diferentes Unidades:** Usarás estratégicamente las 4 unidades básicas: la agresiva Tostada, la defensora Magdalena, el preciso Bol de Cereales o la prestidigitadora fruta. (NOMBRE PROVISIONAL)<br>
**- Uso de Habilidades:** Los poderosos personajes de apoyo te prestarán su ayuda, en forma de habilidades. Se pueden conseguir durante la partida. Encuentra a la mascota del juego... ¡y ya verás!<br>
**- Modos de Juego:** Puedes jugar con caminos fijos... o no. El modo de juego SWAP (NOMBRE PROVISIONAL) te permite elevar tus estrategias a otro nivel. En cambio, si te gusta jugar con algo más manejable... el modo MICRO, con sus unidades fijas, puede ser para ti. O puedes jugar al modo de juego CLÁSICO, que es el estándar.

## 5.- DISEÑO DEL JUEGO	<a name="diseñoDelJuego"/>
### 5.1.- MECÁNICAS			<a name="mecanicas"/>
### 5.2.- ESTADOS JUEGO	<a name="estadosJuego"/>

![alt text](https://github.com/AtaraxiaDevs/breakfast/blob/main/GDD/ESTADOS%20DEL%20JUEGO.png)

**INICIO**: Menú que se muestra al iniciar el juego.<br>

- *JUGAR*: Empieza la partida.
- *RANKING*: Muestra las mejores puntuaciones. Contabiliza los puntos de las 5 rondas. Tiene un botón ATRÁS, que vuelve a **INICIO**.
- *CRÉDITOS*: Nombre del equipo y los desarrolladores. Tiene un botón *ATRÁS*, que vuelve a **INICIO**.
- *SALIR*: Salir y cerrar el juego.
- *TUTORIAL*: Pantalla que muestra los controles. Tiene un botón *ATRÁS*, que vuelve a **INICIO**.
- *STATS*: Accesible desde **TUTORIAL**. Muestra estadísticas avanzadas, para jugadores más experimentados. Al ser para niños, se evita mostrar este tipo de contenido. Tiene un botón *ATRÁS*, que vuelve a **TUTORIAL**.

**JUEGO**: Pantallas del juego<br>

- *PRE-PARTIDA*: Los jugadores eligen el equipo y el modo de juego.Tiene un botón *ATRÁS*, que vuelve a **INICIO**.
- *FASE PREPARACIÓN*: Cada jugador coloca sus tropas antes del combate. Hay una por jugador. Tiene un botón *ATRÁS*, que va a **GAME OVER**.
- *COMBATE*: Gameplay en tiempo real de la batalla. Tiene botones para controlar el juego. Tiene un botón *ATRÁS*, que va a **GAME OVER**.
- *RECUENTO RONDA*: Se cuentan los puntos para ver quien gana la ronda, se muestra mediante una tabla resumen. Cuando se pasa 5 veces por esta pantalla, la siguiente será **GAME OVER**. Tiene un botón *ATRÁS*, que va a **GAME OVER**.
- *GAME OVER*: Pantalla final del juego, donde se muestra el ganador y los puntos conseguidos.

### 5.3.- INTERFACES	<a name="interfaces"/>
### 5.4.- CONTROLES	<a name="controles"/>
### 5.5.- PROGRESO DEL JUEGO	<a name="progresoDelJuego"/>
### 5.6.- NIVELES	<a name="niveles"/>
## 6.- DISEÑO DEL MUNDO	<a name="diseñoDelMundo"/>
### 6.1.- PERSONAJES	<a name="personajes"/>
### 6.2.- LOCALIZACIONES	<a name="localizaciones"/>
## 7.- ARTE	<a name="arte"/>
### 7.1.- ESTILO Y REFERENCIAS<a name="estiloYReferencias"/>	
### 7.2.- CONCEPTS	<a name="concepts"/>
### 7.3.- ARTE PROMOCIONAL	<a name="artePromocional"/>
## 8.- SONIDO	<a name="sonido"/>
### 8.1.- BANDA SONORA	<a name="bandaSonora"/>
### 8.2.- EFECTOS DE SONIDO	<a name="efectosDeSonido"/>
## 9.- NARRATIVA Y GUION	<a name="narrativaYGuion"/>
### 9.1.- SINOPSIS <a name="sinopsis"/>	
### 9.2.- GUION Y DIÁLOGOS	<a name="guionYDialogos"/>
## 10.- DETALLES DE PRODUCCIÓN	<a name="detallesDeProduccion"/>
### 10.1.- MIEMBROS DEL EQUIPO	<a name="miembrosDelEquipo"/>
<img src="https://github.com/AtaraxiaDevs/breakfast/blob/main/GDD/LogoAtaraxia/logo_definitivo.png" width="50px"> **Daniel Ayllón Peinado**: Programador, Scrum Master y CM.<br>
<img src="https://github.com/AtaraxiaDevs/breakfast/blob/main/GDD/LogoAtaraxia/logo_definitivo.png" width="50px"> **Pablo García Sánchez**: Artista y Diseñador 2D <br>
<img src="https://github.com/AtaraxiaDevs/breakfast/blob/main/GDD/LogoAtaraxia/logo_definitivo.png" width="50px"> **Celtia Martin García**: Artista 2D y Programadora.<br> 
<img src="https://github.com/AtaraxiaDevs/breakfast/blob/main/GDD/Iconos%20Desarrollador/Dani.jpeg" width="50px"> **Daniel Muñoz Rivera**: Game Designer y Usabilidad.<br>
<img src="https://github.com/AtaraxiaDevs/breakfast/blob/main/GDD/LogoAtaraxia/logo_definitivo.png" width="50px"> **Alberto Sánchez Mateo**: Product Owner, Programador y Web Designer. <br>
<img src="https://github.com/AtaraxiaDevs/breakfast/blob/main/GDD/LogoAtaraxia/logo_definitivo.png" width="50px"> **Wei Zheng**: Artista técnico y Diseñador 2D. <br>

### 10.2.- DATOS DE DESARROLLO	<a name="datosDeDesarrollo"/>
### 10.3.- MODELO DE NEGOCIO <a name="modeloDeNegocio"/>
