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
#### [5.1.1.- SISTEMA](#mecanicas1)
#### [5.1.2.- PERSONAJES](#mecanicas2)
#### [5.1.3.- COMBATE](#mecanicas3)
#### [5.1.4.- HABILIDADES](#mecanicas4)
#### [5.1.5.- ECONOMÍA](#mecanicas5)
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
## [10.- DETALLES DE PRODUCCIÓN](#detallesDeProduccion)
### [10.1.- MIEMBROS DEL EQUIPO](#miembrosDelEquipo)
### [10.2.- PLAN DE DESARROLLO](#datosDeDesarrollo)
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

---

## 4.- CARACTERÍSTICAS PRINCIPALES <a name="caracteristicasPrincipales"/>

**- Batallas 1vs1:** Dos equipos, dos ejércitos, las mismas unidades. Llegar con una unidad al terreno rival suma un punto para la ronda. Hay un recuento al final de cada ronda, que determina el ganador de la misma. La victoria final se consigue ganando 3 de estas 5 rondas.<br>
**- Multijugador Local:** Juega en pantalla dividida con un amigo en el dispositivo que prefieras. ¡Evita que cotillee tu fase de preparación!<br>
**- Diferentes Unidades:** Usarás estratégicamente las 4 unidades básicas: la agresiva Tostada, la defensora Magdalena, el preciso Bol de Cereales o la prestidigitadora fruta. (NOMBRE PROVISIONAL)<br>
**- Uso de Habilidades:** Los poderosos personajes de apoyo te prestarán su ayuda, en forma de habilidades. Se pueden conseguir durante la partida. Encuentra a la mascota del juego... ¡y ya verás!<br>
**- Modos de Juego:** Puedes jugar con caminos fijos... o no. El modo de juego SWAP (NOMBRE PROVISIONAL) te permite elevar tus estrategias a otro nivel. En cambio, si te gusta jugar con algo más manejable... el modo MICRO, con sus unidades fijas, puede ser para ti. O puedes jugar al modo de juego CLÁSICO, que es el estándar.

---

## 5.- DISEÑO DEL JUEGO	 <a name="diseñoDelJuego"/>
### 5.1.- MECÁNICAS			   <a name="mecanicas"/>
#### 5.1.1.- SISTEMA     <a name="mecanicas1"/>

El objetivo de BTF es ir ganando las batallas contra tu adversario. Para ello, dispones de una serie de unidades y habilidades, que hay que repartir o usar en el escenario. Este escenario consiste en 3 líneas de ataque, por donde las unidades irán avanzando hasta el lado del oponente. Cada unidad marca 1 punto de ronda al llegar al borde del campo enemigo. Al final de cada Ronda, se contabilizan los puntos y es ganada por el que más haya conseguido. NUNCA puede haber un empate en la Ronda, siempre queda al menos 1 unidad en el campo. Al mejor de 5, consigues ganar la Partida. El jugador ganador ve reflejada su partida en el Ranking (basándose en una puntuación interna del juego, que determina la victoria más aplastante).

El escenario del juego consiste en 3 líneas de ataque, divididas en 3 zonas diferenciables: 2 zonas de jugadores y una zona neutra. Para compararlas, partiremos de la base de la unidad Atacante (Vel = 5).

- **Zona de Jugador:** Un atacante recorre esta zona en 7 segundos. Zona inmutable, siempre es recta. La habilidad SWAP puede cambiar dos de las líneas entre sí. Al inicio de esta, hay una línea que limita la zona donde el equipo contrario puntúa.
- **Zona Neutra:** Un atacante recorre esta zona en 14 segundos. Zona variable, puede ser modificada (por habilidad o modo de juego). En esta zona, se activan los llamados "Comportamientos" de los personajes.

<br>

El juego se divide en dos grandes fases:

**FASE DE PREPARACIÓN**

En la fase de preparación se manejan recursos y tiene un componente estratégico, en cuanto a saber entender como juega el jugador contrario. Esta fase dura 30 segundos.

En esta fase, se nos presenta una interfaz que muestra nuestra zona del campo, con sus 3 líneas, en VERTICAL. Una serie de botones representan las unidades disponibles en ese momento. Al pulsar en los botones, se selecciona una unidad, y hay que pulsar la línea para colocarla. Las líneas ¿tienen un máximo de unidades?. Cuando se acabe el tiempo, sin aceptar, las líneas quedan definidas y se pasa a la fase de combate.

**FASE DE COMBATE**

En la fase de combate, en tiempo real, se usan las habilidades para: corregir tu estrategia, perjudicar al adversario, invocar a poderosas unidades extra... Esta fase dura 2 minutos.

En esta fase, entramos de lleno al escenario principal. Empezamos en un plano del cielo, hasta que baja al campo de batalla, y se revela la colocación de las unidades. Una cuenta atrás y empieza la partida. Se muestra el oro del jugador contrario en este momento. A partir de este momento, se pueden usar habilidades. La habilidad SWAP aparece como predeterminada, si se tiene, ya que es la que tiene más sentido usar al principio. 

Las unidades combaten cuando se encuentran a una distancia de X entre sí. La excepción a esto es el Distancia, que por su "Comportamiento" empieza a atacar cuando entra en un rango. Estos combates se deciden teniendo en cuenta las estadísticas definidas en el apartado **PERSONAJES**. El combate se desarrolla mejor en el apartado **COMBATE**. Una unidad sale vencedora y la otra muere. Todas las unidades vuelven a caminar cuando terminan su combate, hasta llegar a la zona de puntuación.

En el escenario, se pueden conseguir habilidades en forma de objetos. Se añaden a tu stack de habilidades, donde se podrán almacenar.

El combate se acaba por tiempo o porque todas las unidades han llegado a campo contrario. Si acaba por tiempo, las unidades vivas suman otro punto. Los recursos monetarios y las habilidades se conservan entre rondas.

#### 5.1.2.- PERSONAJES  <a name="mecanicas2"/>

Los personajes o unidades combaten entre sí, y ayudan a ganar puntos para la ronda. Todos los personajes tienen las siguientes estadíticas:

- `ATK`: Daño de ataque
- `HP`: Vida Total
- `VEL`: Velocidad de Movimiento
- `DPS`: Velocidad de Ataque
- `RAN`: Distancia a la que se empieza a atacar o se establece un combate.
- `COMPORTAMIENTO`: Habilidad pasiva de una unidad en concreto que establece el patrón de movimiento y toma de decisiones.

Las Unidades Disponibles y sus estadísticas son:

| **NOMBRE**      | **PERSONAJE**           | **ATK** | **HP** | **VEL** | **DPS** | **RAN** | **COMPORTAMIENTO** |
| :-------------: | :---------------------: | :-----: | :----: | :-----: | :-----: | :-----: | :-------------------------------------------------------------: |
| Atacante        | Tostada                 |    4    |   9    |    5    |   1     |    1    | En un cruce, elige el camino con más unidades.                                |
| Defensor        | Magdalena               |    2    |   15   |    2    |   0,33  |    1    | En un cruce, se detiene y bloquea a los enemigos, no a los aliados.           |
| Distancia       | Bol de Cereales         |    3    |   5    |    4    |   0,5   |    1    | Al detectar una unidad a rango, se para y ataca a distancia.                  |
| Velocista       | ¿Fruta?                 |    3    |   4    |    10   |   1,5   |    5    | En un cruce, elige el camino con menos unidades.                              |
| Jefe            | Mantequilla / Mermelada |   15    |   20   |    2    |   1     |    1    | Al combatir contra 2 unidades, explota y daña a todos los enemigos cercanos.  |

#### 5.1.3.- COMBATE     <a name="mecanicas3"/>

El sistema de combate se basa en bajar la vida de las unidades contrarias lo más rápido posible. Las unidades atacarán en cuanto estén a rango (RAN) de otra unidad, y bajarán la vida de otra unidad a una velocidad definida (DPS). Para evitar empates entre las unidades, cada ataque se basa en la siguiente fórmula:<br>

Daño de Ataque = (0,9 x ATK) + (0,1 x RANDOM(0,10))

Así, hacemos que un empate sea casi imposible y evitamos el manejo de esta situación. Además, añadimos el componente de que ciertas unidades puedan caer más rápido de lo normal, como los Defensores.

El DPS funciona como un contador acumulativo. Hay que llegar a 1 para declarar un ataque, en cada segundo que dure el ataque. El atacante ataca cada vez, mientras que el tanque debe esperar. El velocista ataca 2 veces por segundo.

Algunos ejemplos de Batalla:

**Atacante vs Defensor**

Rango => 1 = 1     (Empiezan a la vez)

`DPS` =>  A = 1   /////////   D = 0,33

Ataque 1 => A     /////////   R = 3      ////////    HP(D) = 15 - ( (0,9 x 4) + (0,1 x R) = 3,9 ) = 11,1

`DPS` =>  A = 1   /////////   D = 0,66

Ataque 2 => A     /////////   R = 7      ////////    HP(D) = 11,1 - ( (0,9 x 4) + (0,1 x R) = 4,3 ) = 6,8

`DPS` =>  A = 1   /////////   D = 1      ////////    (RANDOM) = > ¿Quien ataca primero? Sale D

Ataque 3 => D     /////////   R = 9      ////////    HP(A) = 9 - ( (0,9 x 2) + (0,1 x R) = 2,7 ) = 6,3 <br>
Ataque 4 => A     /////////   R = 1      ////////    HP(D) = 6,8 - ( (0,9 x 4) + (0,1 x R) = 3,7 ) = 3,1

`DPS` =>  A = 1   /////////   D = 0,33

Ataque 5 => A     /////////   R = 0      ////////    HP(D) = 3,1 - ( (0,9 x 4) + (0,1 x R) = 3,6 ) = 0

EL ATACANTE GANA

#### 5.1.4.- HABILIDADES <a name="mecanicas4"/>

Las habilidades constituyen la parte jugable en el combate a tiempo real. Están clasificadas por un sistema de rareza, que definen la probabilidad de que le salga a un jugador. Aparecen en el juego en forma de objetos en el escenario y de premios, y se almacenan en un Stack de Habilidades, donde podremos usarlas en cualquier momento del combate. Se selecciona en ese Stack y se elige la línea a la que afecta, marcada con una fecha. Aquí la lista:

**COMÚN**

- *SWAP* (): Se intercambian las unidades de dos líneas que se encuentren en la zona del jugador propio. Sirve para recular en una decisión estratégica en la fase de preparación, una vez vistas las unidades. Aparece siempre la primera en el Stack de Habilidades.
- *SWEETS* (): Aumenta tus Toppings en 100.
- *NO SWEETS* (): Disminuye los Toppings del rival en 100.

**RARO**

- *EXTRA UNIT* (): Una unidad aleatoria aparece en una línea a elegir, en la zona del jugador propio. Puede servir como ataque sorpresa o como defensa de línea ante unidades enemigas. <br>
- *SLOW DOWN* (): Las unidades enemigas de una línea elegida ven mermadas sus estadísticas VEL y DPS. Dura 5 segundos.
- *SPEEDY SPEED BOY* (): Invoca un velocista en cualquier línea. Puede servir para ganar una línea o para ganar dinero al mantenerlo en el campo.

**ULTRA RARO**

- *BOSS* (Mantequilla Gritona / Mermelada Explosiva): Invoca a la unidad Jefe en el campo, en una línea a elegir de la zona de jugador propia. Aguanta 2 ataques del rival, y en el tercero explota y hace daño a todos los enemigos cercanos. Es un gran boost de dinero o una casi condición de victoria.

#### 5.1.5.- ECONOMÍA    <a name="mecanicas5"/>

Se usa un sistema monetario para comprar unidades y ponerlas al campo. La moneda de este juego son los "Toppings de Colores". Cada jugador empezará la partida con 1000 Toppings en su poder. Gastará esos Toppings para conseguir las primeras unidades, y recibirá más Toppings atendiendo a una serie de variables:

- **Variables fijas**: Toppings Iniciales, Ronda Ganada o Perdida, Unidad Abatida.

- **Variables dinámicas**: Duración de Ronda, Unidades Restantes, Unidades que puntúan.

Aquí se recoge la tabla de precios. Un signo "+" significa que el jugador los gana y un símbolo "-" que los pierde realizando esta acción.

| **NOMBRE**      | **COMPRAR** | **POR BAJA** | **POR MANTENER** | **POR PUNTUAR**  |
| :-------------: | :---------: | :----------: | :--------------: | :--------------: |
| Atacante        | -100        |    +50       |   +50            |   +100           |
| Defensor        | -100        |    +100      |   +50            |   +100           |
| Distancia       | -200        |    +100      |   +50            |   +200           | 
| Velocista       | -200        |    +25       |   +300           |   +50            |
| Jefe            |  NO         |    +500      |   +500           |   +1000          |

<br>

| **GANADOR RONDA** | **PERDEDOR RONDA** | **TOPPINGS POR SEGUNDO** |
| :---------------: | :----------------: | :----------------------: |
|       +500        |       +300         |           20 TPS         |

`EJEMPLO`:

Con el dinero inicial, J1 decide comprar 5 Atacantes, 1 Defensor, 1 Distancia y 1 Velocista (0). J2 decide comprar 4 atacantes, 1 defensor y 1 Distancia. (300).

Primera Ronda: Gana J1, pero se acaba por tiempo. En J1 han llegado 2 atacantes y se ha mantenido 1 distancia (150). 
En J2 ha llegado 1 atacante pero no se ha mantenido nadie (100).

Al agotarse el tiempo, ambos suman 120. J1 acaba teniendo (500 + 150 + 240 + 350 + 0) = 1240. J2 acaba teniendo (300 + 100 + 240 + 275 + 300) = 1215.


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

Al poderse jugar en diferentes plataformas, se usan 2 sets de controles: PC y móvil. 

**CONTROLES PC**

Basado en el teclado.

*Controles Menú* <br>
`WASD`: Seleccionar entre opciones<br>
`INTRO`: Elegir opción

*Jugador 1*<br>
`W - S`: Cambiar entre líneas (Usando habilidades o desplegando unidades). Se resaltará la flecha de la línea seleccionada.<br>
`A - D`: Cambiar entre unidades en la Preparación (o habilidades, en el Combate).<br>
`SPACE`: Acción / Desplegar Unidad / Usar habilidad

*Jugador 2*<br>
`Flecha Arriba - Flecha Abajo`: Cambiar entre líneas (Usando habilidades o desplegando unidades)<br>
`Flecha Izquierda - Flecha Derecha`: Cambiar entre unidades en la preparación (o habilidades, en el combate)<br>
`INTRO`: Acción / Desplegar Unidad / Usar habilidad

*Botones Extra*<br>
**...**<br>
`ESC`: Salir

**CONTROLES MÓVIL Y TABLETA**

Basado en el control táctil. Los mismos controles para los dos jugadores, un tipo de botón para cada uno. Los Menús se controlan con botones táctiles.

*Jugadores*<br>
`FLECHAS DE LÍNEA`: Elegir línea. Solo hay que hacerlo cuando se resaltan.<br>
`ICONO DE UNIDADES`: Al pulsar, cambias la unidad seleccionada.<br>
`ICONO DE HABILIDADES`: Al pulsar, cambias la habilidad seleccionada.<br>
`ICONO USAR`: En el Combate, pulsa para activar la habilidad.

*Botones Extra*<br>
**...**<br>
`SALIR`: Sale al menú principal

### 5.5.- PROGRESO DEL JUEGO	<a name="progresoDelJuego"/>

La idea del juego es que ambos jugadores jueguen muchas partidas entre sí. Cuanto más jueguen, más descubren el funcionamiento de las unidades / habilidades, y sobre todo, las estrategias de sus rivales.

Las primeras partidas consistirán en un tanteo aleatorio de las mecánicas. Destacará mucho más el uso de habilidades, ya que es lo más tangible en primera instancia. Probablemente se consigan partidas de duración media. 

Al ir avanzando, entrará más en juego la estrategia en la fase de preparación. Sobre todo, si te enfrentas a alguien conocido. Apareceran nuevas estrategias, como dejar vacía una línea para ganar las otras dos, ahorrar toppings entre rondas, tirar rondas enteras sin usar unidades... Y muchas otras.

El engaño va a ser una constante entre rondas: cargar la línea superior para dejarla vacía en la siguiente ronda; saber donde pondrá sus unidades el contrario y contratacar; usar una habilidad SWAP decisiva en el último momento...

El consiguiente progreso se verá reflejado en el ranking de puntuaciones, donde se encuentran las victorias más épicas y aplastantes. **DISCUTIR MECÁNICA BEAT THE RANKING**

### 5.6.- NIVELES	<a name="niveles"/>
## 6.- DISEÑO DEL MUNDO	<a name="diseñoDelMundo"/>
### 6.1.- PERSONAJES	<a name="personajes"/>

- **TOSTADA:**
- **MAGDALENA:**
- **BOL DE CEREALES:**
- **¿FRUTA?:**
- **MANTEQUILLA GRITONA:**
- **MERMELADA EXPLOSIVA:**

### 6.2.- LOCALIZACIONES	<a name="localizaciones"/>

Este apartado se refiere a los diferentes escenarios visuales en los que se desarrolla el juego:

- **MERENDERO:**
- **COCINA:**

## 7.- ARTE	<a name="arte"/>
### 7.1.- ESTILO Y REFERENCIAS<a name="estiloYReferencias"/>	
### 7.2.- CONCEPTS	<a name="concepts"/>
### 7.3.- ARTE PROMOCIONAL	<a name="artePromocional"/>
## 8.- SONIDO	<a name="sonido"/>
### 8.1.- BANDA SONORA	<a name="bandaSonora"/>

- *Tema Menú*:
- *Tema Preparación*:
- *Tema Combate*:

### 8.2.- EFECTOS DE SONIDO	<a name="efectosDeSonido"/>

- *Botón Menú pulsado*:
- *Cuenta atrás Combate*:
- *Invocar unidad en línea*: Ruido de Pasos
- *Cambiar entre unidades / habilidades*:
- *Ganancia de Toppings*:
- *Punto conseguido*:
- *Fin de Ronda*:
- *Fin de Partida / Game Over*:

## 9.- NARRATIVA Y GUION	<a name="narrativaYGuion"/>
### 9.1.- SINOPSIS <a name="sinopsis"/>	

Unos amigables alienígenas deciden venir a la Tierra en busca de nutrientes que les hagan crecer y llegar a su forma completa. Sin embargo, se encuentran con tan amplia variedad de alimentos, que empiezan a tener discusiones internas. Dos de los más respetados, M.G. Y M.E. (NOMBRES PROVISIONALES) reúnen dos grandes grupos, que defienden que el desayuno es la comida más importante del día. 

M.G. defiende que la dieta debería estar sustentada en la Mantequilla, y decide fusionarse con ella para demostrar su poder. M.E. no se queda atrás, pero cree que la Mermelada es mucho más poderosa. Sus constantes discusiones y su creciente temperamento hacen que decidan librar una batalla para probar que llevan la razón.

Los jugadores representan a un pequeño ejército de estos dos grandes grupos. Es por eso que podrán llamar a los poderosos M.G. y M.E. a batalla para apoyarles. 

## 10.- DETALLES DE PRODUCCIÓN	<a name="detallesDeProduccion"/>
### 10.1.- MIEMBROS DEL EQUIPO	<a name="miembrosDelEquipo"/>
<img src="https://github.com/AtaraxiaDevs/breakfast/blob/main/GDD/LogoAtaraxia/logo_definitivo.png" width="50px"> **Daniel Ayllón Peinado**: Programador, Scrum Master y CM.<br>
<img src="https://raw.githubusercontent.com/AtaraxiaDevs/breakfast/main/GDD/Iconos%20Desar/Pablo.jpg> **Pablo García Sánchez**: Artista y Diseñador 2D <br>
<img src="https://raw.githubusercontent.com/AtaraxiaDevs/breakfast/main/GDD/Iconos%20Desarrollador/Celtia.png" width="50px"> **Celtia Martin García**: Artista 2D y Programadora.<br> 
<img src="https://github.com/AtaraxiaDevs/breakfast/blob/main/GDD/Iconos%20Desarrollador/Dani.jpeg" width="50px"> **Daniel Muñoz Rivera**: Game Designer y Usabilidad.<br>
<img src="https://github.com/AtaraxiaDevs/breakfast/blob/main/GDD/LogoAtaraxia/logo_definitivo.png" width="50px"> **Alberto Sánchez Mateo**: Product Owner, Programador y Web Designer. <br>
<img src="https://raw.githubusercontent.com/AtaraxiaDevs/breakfast/main/GDD/Iconos%20Desarrollador/Wei.png" width="50px"> **Wei Zheng**: Artista técnico y Diseñador 2D. <br>

### 10.2.- PLAN DE DESARROLLO	<a name="datosDeDesarrollo"/>
### 10.3.- MODELO DE NEGOCIO <a name="modeloDeNegocio"/>
