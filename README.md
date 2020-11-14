# GDD

![alt text](https://github.com/AtaraxiaDevs/breakfast/blob/main/GDD/LogoAtaraxia/logo_definitivo.png)



## CONTACTO
#### [WEB: Ataraxia Devs](https://ataraxiadevs.github.io/)
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
#### [5.1.6.- RANKING](#mecanicas6)
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
### [7.2.- CONCEPTS](#arteFinal)
### [7.3.- ARTE PROMOCIONAL](#artePromocional)
## [8.- SONIDO](#sonido)	
### [8.1.- BANDA SONORA](#bandaSonora)	
### [8.2.- EFECTOS DE SONIDO](#efectosDeSonido)
## [9.- NARRATIVA Y GUION](#narrativaYGuion)	
### [9.1.- SINOPSIS](#sinopsis)
## [10.- DETALLES DE PRODUCCIÓN](#detallesDeProduccion)
### [10.1.- MIEMBROS DEL EQUIPO](#miembrosDelEquipo)
### [10.2.- CICLO DE VIDA](#cicloDeVida)
### [10.3.- MODELO DE NEGOCIO](#modeloDeNegocio)

---
---

## 1.- FICHA RESUMEN <a name="fichaResumen"/>

| **NOMBRE**      | BTF: Break-Troops-Fast   |
| :-------------: | :---------------------:  |
| **VERSION**     | 1.2                      |
| **GENERO**      | Estrategia     |
| **TEMÁTICA**    | Comida                   |
| **PLATAFORMA**  | Web (PC, Móvil o Tablet) |
| **JUEGOS RELACIONADOS**  | Clash Royale, Warlords: Call To Arms, Stratego |
| **PUBLICO OBJETIVO**     | Infantil, Casual        |
| **ESTILO VISUAL**        | 2D, Pixel Art           |
| **CALIFICACIÓN**         | PEGI 7+                 |
| **IDIOMA**      | Español, Inglés          |
| **VISTA**       | Cenital 3/4              |
| **TECNOLOGÍAS** | Phaser                   |
| **MECÁNICAS**   | - Duelos 1vs1 de Ejércitos, a ciegas <br> - Diferentes Unidades y Habilidades <br>- Conquistar el terreno enemigo |

---

## 2.- HISTORIAL DE VERSIONES <a name="historialDeVersiones"/>

| **VERSION**     | **CAMBIOS DE VERSION**  |
| :-------------: |:---------------------:  |
| 1.0             | Versión Inicial         |
| 1.1             | Rediseño de mecánicas y cambios en los modos de juego.                        |
| 1.2             | Otro refinamiento de mecánicas                                                |

---
 
## 3.- SINOPSIS DEL JUEGO <a name="sinopsisDelJuego"/>

> ¿Cual es la comida más importante del día? ¡Compite con tus amigos para ayudar a los pequeños alienígenas  del espacio exterior a decidir! 
> ¿Estas del lado de la valiente Mantequilla Gritona o de la astuta Mermelada Explosiva ? ¡Descúbrelo aquí!

> BTF: Break-Troops-Fast es un juego de estrategia, que enfrenta a dos jugadores en una batalla donde deberán gestionar sus comestibles tropas para conseguir llegar hasta
> la base enemiga y ganar la ronda. El equipo ganador se decide al mejor de 5 de estas rondas, donde los ejércitos tendrán que sobrevivir a un escenario cambiante. ¡Usa las
> habilidades de tus aliados para abrirte paso! El enemigo se esconde... ¡pero tu revelarás su plan, y haras que muerdan el polvo del Cacao!

---

## 4.- CARACTERÍSTICAS PRINCIPALES <a name="caracteristicasPrincipales"/>

**- Batallas 1vs1:** Dos equipos, dos ejércitos, las mismas unidades. Llegar con una unidad al terreno rival suma un punto para la ronda. Hay un recuento al final de cada ronda, que determina el ganador de la misma. La victoria final se consigue ganando 3 de estas 5 rondas.<br>
**- Multijugador Local:** Juega en pantalla dividida con un amigo en el dispositivo que prefieras. ¡Evita que cotillee tu fase de preparación!<br>
**- Diferentes Unidades:** Usarás estratégicamente las 4 unidades básicas: la agresiva Tostada, la defensora Magdalena, el preciso Bol de Cereales o el Velocista.<br>
**- Uso de Habilidades:** Los poderosos personajes de apoyo te prestarán su ayuda, en forma de habilidades. Se pueden conseguir durante la partida. Encuentra a la mascota del juego... ¡y ya verás!<br>
**- Modos de Juego:** Puedes jugar con tus amigos en el Modo Duelo o enfrentarte a los desafiantes niveles del Modo Táctica. 

---

## 5.- DISEÑO DEL JUEGO	 <a name="diseñoDelJuego"/>
### 5.1.- MECÁNICAS			   <a name="mecanicas"/>
#### 5.1.1.- SISTEMA     <a name="mecanicas1"/>

El objetivo de BTF es ir ganando las batallas contra tu adversario. Para ello, dispones de una serie de unidades y habilidades, que hay que repartir o usar en el escenario. Este escenario consiste en 3 líneas de ataque, por donde las unidades irán avanzando hasta el lado del oponente. Cada unidad marca 1 punto de FILA al llegar al borde del campo enemigo. Al final de cada Ronda, se contabilizan los puntos de FILA y cada fila es ganada por el que más haya conseguido.  Al mejor de 3, el jugador que gana consigue un punto de RONDA. Al mejor de 5 puntos de RONDA, consigues ganar la Partida. El jugador ganador ve reflejada su partida en el Ranking (basándose en una puntuación interna del juego, que determina la victoria más aplastante).

Siempre queda al menos 1 unidad en el campo. Si una fila no puntua (EMPATE TÉCNICO) el marcador puede quedar 1-1, por lo que: o gana el que haya ganado la Fila más contudentemente (entre un 4-2 y un 3-1, el punto se lo lleva el 4-2). Si en el remoto caso de que las filas hayan quedado exactamente igual, la ronda se da como "reiniciada": el dinero gastado se pierde, pero no se gana nada de lo ocurrido en esa ronda. 

El escenario del juego consiste en 3 líneas de ataque, divididas en 3 zonas diferenciables: 2 zonas de jugadores y una zona neutra. Para compararlas, partiremos de la base de la unidad Atacante (Vel = 5).

- **Zona de Jugador:** Un atacante recorre esta zona en 7 segundos. Zona inmutable, siempre es recta. La habilidad SWAP puede cambiar dos de las líneas entre sí. Al inicio de esta, hay una línea que limita la zona donde el equipo contrario puntúa.
- **Zona Neutra:** Un atacante recorre esta zona en 14 segundos. Aquí pueden aparecer objetos, que son Habilidades obtenibles, o Toppings, para ganar algo extra.

![alt text](https://github.com/AtaraxiaDevs/breakfast/blob/main/GDD/Escenario.png)

<br>

El juego se divide en dos grandes fases:

**FASE DE PREPARACIÓN**

En la fase de preparación se manejan recursos y tiene un componente estratégico, en cuanto a saber entender como juega el jugador contrario. Esta fase dura 30 segundos.

En esta fase, se nos presenta una interfaz que muestra nuestra zona del campo, con sus 3 líneas. Un único botón representa las unidades disponibles en ese momento, que se van cambiando al pulsarlo. Esa unidad mostrada esta seleccionada, y hay que pulsar la línea para colocarla. Las líneas NO tienen un máximo ni un mínimo de unidades. Cuando se acabe el tiempo, sin aceptar, las líneas quedan definidas y se pasa a la fase de combate.

Si no se pone NINGUNA unidad en el campo en esta fase, el jugador pierde la Ronda automáticamente.

**FASE DE COMBATE**

En la fase de combate, en tiempo real, se usan las habilidades para: corregir tu estrategia, perjudicar al adversario, invocar a poderosas unidades extra... Esta fase dura 2 minutos.

En esta fase, entramos de lleno al escenario principal. Vemos el campo de batalla, y se revela la colocación de las unidades. Una cuenta atrás y empieza la partida. Se muestra el oro del jugador contrario en este momento. A partir de este momento, se pueden usar habilidades. La habilidad SWAP aparece como predeterminada, si se tiene, ya que es la que tiene más sentido usar al principio. 

Las unidades combaten cuando se encuentran a una distancia de X (Rango) entre sí. Estos combates se deciden teniendo en cuenta las estadísticas definidas en el apartado **PERSONAJES**. El combate se desarrolla mejor en el apartado **COMBATE**. Una unidad sale vencedora y la otra muere. Todas las unidades vuelven a caminar cuando terminan su combate, hasta llegar a la zona de puntuación.

En el escenario, se pueden conseguir habilidades en forma de objetos. Se añaden a tu stack de habilidades, donde se podrán almacenar.

El combate se acaba por tiempo o porque todas las unidades han llegado a campo contrario. Los recursos monetarios y las habilidades se conservan entre rondas.

#### 5.1.2.- PERSONAJES  <a name="mecanicas2"/>

Los personajes o unidades combaten entre sí, y ayudan a ganar puntos para la ronda. Su comportamiento estándar es: detenerse cuando encuentran una unidad a rango y empezar a atacar. Si la derrota, y no hay nadie más a rango, sigue andando. Todos los personajes tienen las siguientes estadíticas:

- `ATK`: Daño de ataque
- `HP`: Vida Total
- `VEL`: Velocidad de Movimiento
- `DPS`: Velocidad de Ataque
- `RAN`: Distancia a la que se empieza a atacar o se establece un combate.

Las Unidades Disponibles y sus estadísticas son:

| **NOMBRE**      | **PERSONAJE**           | **ATK** | **HP** | **VEL** | **DPS** | **RAN** |
| :-------------: | :---------------------: | :-----: | :----: | :-----: | :-----: | :-----: |
| Atacante        | Tostada                 |    4    |   9    |    5    |    1    |    1    |
| Defensor        | Magdalena               |    2    |   15   |    2    |    3    |    1    |
| Distancia       | Bol de Cereales         |    3    |   5    |    4    |    2    |    5    |
| Velocista       | Robot Velocista         |    3    |   4    |    10   |   0,5   |    1    | 
| Jefe            | Mantequilla / Mermelada |   15    |   20   |    2    |    1    |    1    | 

#### 5.1.3.- COMBATE     <a name="mecanicas3"/>

El sistema de combate se basa en bajar la vida de las unidades contrarias lo más rápido posible. Las unidades atacarán en cuanto estén a rango (RAN) de otra unidad, y bajarán la vida de otra unidad a una velocidad definida (DPS). Una unidad solo puede golpear y ser golpeada por un enemigo a la vez. Los personajes están separados, siguiéndose entre sí en la línea, para evitar acumulaciones. Para evitar empates entre las unidades, cada ataque se basa en la siguiente fórmula:<br>

Daño de Ataque = (0,9 x ATK) + (0,1 x RANDOM(0,10))

Así, hacemos que un empate sea casi imposible y evitamos el manejo de esta situación. Además, añadimos el componente de que ciertas unidades puedan caer más rápido de lo normal, como los Defensores.

El DPS funciona como un contador. Desde el valor de DPS correspondiente, se va reduciendo hasta 0 (0 = se declara un ataque), a una velocidad constante de 1 tick. El atacante ataca cada vez, mientras que el tanque debe esperar 3 ticks. El velocista ataca 2 veces por tick.

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

- *SWEETS* (): Aumenta tus Toppings en 100.
- *NO SWEETS* (): Disminuye los Toppings del rival en 100.

**RARO**

- *SWAP* (): Se intercambian las unidades controladas por un jugador entre dos líneas. Sirve para recular en una decisión estratégica en la fase de preparación, una vez vistas las unidades. Aparece siempre la primera en el Stack de Habilidades.
- *EXTRA UNIT* (): Una unidad aleatoria aparece en una línea a elegir, en la zona del jugador propio. Puede servir como ataque sorpresa o como defensa de línea ante unidades enemigas. <br>
- *SLOW DOWN* (): Las unidades enemigas de una línea elegida ven mermadas sus estadísticas VEL y DPS. Dura 5 segundos.
- *SPEEDY SPEED BOY* (): Invoca un velocista en cualquier línea. Puede servir para ganar una línea o para ganar dinero al mantenerlo en el campo.

**ULTRA RARO**

- *BOSS* (Mantequilla Gritona / Mermelada Explosiva): Invoca a la unidad Jefe en la Zona Neutra, en una línea a elegir. Aguanta 2 ataques del rival, y en el tercero explota y hace daño a todos los enemigos cercanos. Es un gran boost de dinero o una casi condición de victoria.

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

#### 5.1.6.- RANKING    <a name="mecanicas6"/>

El ranking lo componen 10 puntuaciones distintas asignadas a un nombre. Estas puntuaciones se miden con este sistema, y se muestra en la pantalla de Final de Partida. Este sistema es interno, y solo se le informa al jugador de su puntuación final:

| **NOMBRE**      | **POR BAJA** | **POR MANTENER** | **POR PUNTUAR**  | 
| :-------------: | :----------: | :--------------: | :--------------: | 
| Atacante        |    +10       |   +5             |   +20            |         
| Defensor        |    +10       |   +5             |   +20            |
| Distancia       |    +10       |   +5             |   +20            | 
| Velocista       |    +10       |   +20            |   +20            |
| Jefe            |    +300      |   +50            |   +500           |

<br>

| **GANADOR RONDA** | **PERDEDOR RONDA** | **GANAR LA PARTIDA** | **PERDER LA PARTIDA** | **POR USAR HABILIDAD** | **POR TOPPINGS RESTANTES** |
| :---------------: | :----------------: | :------------------: | :-------------------: | :--------------------: | :------------------------: |
|       +300        |       -100         |         +100         |           0           |          +10           |       +(TOPPINGS / 2)      |

### 5.2.- ESTADOS JUEGO	<a name="estadosJuego"/>

![alt text](https://github.com/AtaraxiaDevs/breakfast/blob/main/GDD/ESTADOS%20DEL%20JUEGO1.png)

**INICIO**: Menú que se muestra al iniciar el juego. Hay 2 botones de configuración: *IDIOMA* y *SONIDO*<br>

- *JUGAR*: Empieza la partida.
- *RANKING*: Muestra las mejores puntuaciones. Contabiliza los puntos de las 5 rondas. Tiene un botón ATRÁS, que vuelve a **INICIO**.
- *CRÉDITOS*: Nombre del equipo y los desarrolladores. Tiene un botón *ATRÁS*, que vuelve a **INICIO**.
- *SALIR*: Salir y cerrar el juego.
- *TIENDA*: Tienda del Juego. Tiene un botón *ATRÁS*, que vuelve a **INICIO**.
- *TUTORIAL*: Pantalla que muestra los controles. Hay 2 botones extra: *PERSONAJES* Y *HABILIDADES*. Tiene un botón *ATRÁS*, que vuelve a **INICIO**.
- *PERSONAJES*: Accesible desde **TUTORIAL**. Muestra estadísticas avanzadas, para jugadores más experimentados. Al ser para niños, se evita mostrar este tipo de contenido. Tiene un botón *ATRÁS*, que vuelve a **TUTORIAL**.
- *HABILIDADES*: Accesible desde **TUTORIAL**. Muestra la descripción de las habilidades. Al ser para niños, se evita mostrar este tipo de contenido. Tiene un botón *ATRÁS*, que vuelve a **TUTORIAL**.

**JUEGO**: Pantallas del juego<br>

- *PRE-PARTIDA*: Los jugadores eligen el escenario y el modo de juego. Si se elige el modo Duelo (M), hay dos fases de preparación. Si se elige el modo Táctica, aparecen sus niveles y solo hay una fase de preparación.Tiene un botón *ATRÁS*, que vuelve a **INICIO**.
- *FASE PREPARACIÓN*: Cada jugador coloca sus tropas antes del combate. Hay una por jugador. Hay 2 botones de configuración: *IDIOMA* y *SONIDO*. Tiene un botón *ATRÁS*, que va a **GAME OVER**.
- *COMBATE*: Gameplay en tiempo real de la batalla. Tiene botones para controlar el juego. Hay 2 botones de configuración: *IDIOMA* y *SONIDO*. Tiene un botón *ATRÁS*, que va a **GAME OVER**.
- *RECUENTO RONDA*: Se cuentan los puntos para ver quien gana la ronda, se muestra mediante una tabla resumen. Cuando se pasa 5 veces por esta pantalla, la siguiente será **GAME OVER**. Tiene un botón *ATRÁS*, que va a **GAME OVER**.
- *GAME OVER*: Pantalla final del juego, donde se muestra el ganador y los puntos conseguidos.

**TIENDA**: Pantallas de la tienda. Se pasan a través de Pestañas Botón. <br>

- *SKINS*: Lista de las Skins que se pueden comprar, el precio y la moneda necesaria.
- *PREMIOS*: Lista de los Premios canjeables y su precio, siempre en la Moneda del Juego.
- *COMPRAR*: Pantalla que conecta con los métodos de pago para comprar moneda virtual. Ventana de confirmación y contactos extra con los métodos de pago. **DEFINIR MÉTODO DE PAGO**

### 5.3.- INTERFACES	<a name="interfaces"/>

`INICIO:`

![alt text](https://github.com/AtaraxiaDevs/breakfast/blob/main/ARTE/InterfazUsuario/Menu/MenuFinalESP.png)
![alt text](https://github.com/AtaraxiaDevs/breakfast/blob/main/ARTE/InterfazUsuario/Menu/MenuFinalENG.png)

`RANKING:`

![alt text](https://github.com/AtaraxiaDevs/breakfast/blob/main/ARTE/InterfazUsuario/Ranking/InterfazRanking10.png)

`CRÉDITOS:`

![alt text](https://github.com/AtaraxiaDevs/breakfast/blob/main/ARTE/InterfazUsuario/Creditos/InterfazCreditos.png)

`TUTORIAL:`

![alt text](https://github.com/AtaraxiaDevs/breakfast/blob/main/ARTE/InterfazUsuario/Tutorial/InterfazTutorial.png)

`DESCRIPCION:`

![alt text](https://github.com/AtaraxiaDevs/breakfast/blob/main/ARTE/InterfazUsuario/Tutorial/Descripcion/InterfazDescripcion.png)

`CONTROLES:`

![alt text](https://github.com/AtaraxiaDevs/breakfast/blob/main/ARTE/InterfazUsuario/Tutorial/Controles/InterfazControles.png)

`PERSONAJES:`

![alt text](https://github.com/AtaraxiaDevs/breakfast/blob/main/ARTE/InterfazUsuario/Tutorial/Personajes/InterfazPersonajes.png)

`INFO PERSONAJE:`

![alt text](https://github.com/AtaraxiaDevs/breakfast/blob/main/ARTE/InterfazUsuario/Tutorial/Personajes/InterfazDefensor.png)

`HABILIDADES:`

![alt text](https://github.com/AtaraxiaDevs/breakfast/blob/main/ARTE/InterfazUsuario/Tutorial/Habilidades/InterfazHabilidadesEspañol.png)

`TIENDA-SKINS:`

![alt text](https://github.com/AtaraxiaDevs/breakfast/blob/main/ARTE/InterfazUsuario/Tienda/InterfazTiendaSkin.png)

`TIENDA-PREMIOS:`

![alt text](https://github.com/AtaraxiaDevs/breakfast/blob/main/ARTE/InterfazUsuario/Tienda/InterfazTiendaPremios.png)

`TIENDA-COMPRAR:`

![alt text](https://github.com/AtaraxiaDevs/breakfast/blob/main/ARTE/InterfazUsuario/Tienda/InterfazTiendaComprar.png)

`REGISTRO:`

![alt text](https://github.com/AtaraxiaDevs/breakfast/blob/main/ARTE/InterfazUsuario/Registro/InterfazRegistro.png)

`PRE-PARTIDA:`

![alt text](https://github.com/AtaraxiaDevs/breakfast/blob/main/ARTE/InterfazUsuario/PrePartida/InterfazPrePartida.png)

`PREPARACIÓN:`

![alt text](https://github.com/AtaraxiaDevs/breakfast/blob/main/ARTE/InterfazUsuario/Preparacion/InterfazPreparacion.png)

`COMBATE:`

![alt text](https://github.com/AtaraxiaDevs/breakfast/blob/main/ARTE/InterfazUsuario/Partida/InterfazPartida.png)

![alt text](https://github.com/AtaraxiaDevs/breakfast/blob/main/ARTE/InterfazUsuario/Partida/InterfazPartida2.png)

`RECUENTO RONDA:`

![alt text](https://github.com/AtaraxiaDevs/breakfast/blob/main/ARTE/InterfazUsuario/RecuentoRonda/InterfazRecuentoRonda.png)

`GAME OVER:`

![alt text](https://github.com/AtaraxiaDevs/breakfast/blob/main/ARTE/InterfazUsuario/GameOver/InterfazGameOver.png)

### 5.4.- CONTROLES	<a name="controles"/>

Al poderse jugar en diferentes plataformas, se usan 2 sets de controles: PC y móvil. 

**CONTROLES PC**

Basado en el teclado y ratón.

*Controles Menú* <br>
`Ratón`: Seleccionar entre opciones<br>
`Click Izq Ratón`: Elegir opción

*Jugador 1*<br>
`W - S`: Cambiar entre habilidades y cambiar entre líneas (Usando habilidades o desplegando unidades). Se resaltará la flecha de la línea seleccionada.<br>
`SPACE`: Acción / Usar habilidad

*Jugador 2*<br>
`Flecha Izquierda - Flecha Derecha`: Cambiar entre habilidades y cambiar entre líneas (Usando habilidades o desplegando unidades). Se resaltará la flecha de la línea seleccionada.<br>
`INTRO`: Acción / Usar habilidad

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

El consiguiente progreso se verá reflejado en el ranking de puntuaciones, donde se encuentran las victorias más épicas y aplastantes.

### 5.6.- NIVELES	<a name="niveles"/>

Según el número de jugadores que quieran jugar, se ofrecen 2 opciones de juego:

- **MODO DUELO**: Basado en Multijugador Local. Empiezas en una pantalla pre-partida, donde tienes que elegir entre 2 variantes:

-> CLÁSICO: el juego estándar, sin cambios adicionales.
-> MICRO: sin Toppings iniciales. Cada Ronda, los recursos se ven limitados a 1 unidad por cada tipo de soldado (4), y a 3 habilidades. Hay que saber gestionar los recursos en este modo de juego similar a un Mirror Match. Multijugador Local

- **Modo TÁCTICA**: Basado en Juego Solitario Local. Se basa en una serie de puzzles contra la máquina. Estos puzzles se organizan en una serie de sectores, basados en modos de juego o promociones:

-> PUZZLE CLÁSICO:<br>
-> PUZZLE MICRO:<br>
-> EVENTO HALLOWEEN:<br>

---

## 6.- DISEÑO DEL MUNDO	<a name="diseñoDelMundo"/>
### 6.1.- PERSONAJES	<a name="personajes"/>

- **ALIENS:**

![alt text](https://github.com/AtaraxiaDevs/breakfast/blob/main/ARTE/CONCEPT%20ART/BocetosPersonajes/definitivos/TurnAround_Aliens/turnaround3.png)

- **TOSTADA:**

![alt text](https://github.com/AtaraxiaDevs/breakfast/blob/main/ARTE/CONCEPT%20ART/BocetosPersonajes/definitivos/TurnArounds_Unidades/turnaround_ata.png)

- **MAGDALENA:**

![alt text](https://github.com/AtaraxiaDevs/breakfast/blob/main/ARTE/CONCEPT%20ART/BocetosPersonajes/definitivos/TurnArounds_Unidades/turnTank.png)

- **BOL DE CEREALES:**

![alt text](https://github.com/AtaraxiaDevs/breakfast/blob/main/ARTE/CONCEPT%20ART/BocetosPersonajes/definitivos/TurnArounds_Unidades/turndistanciaLucia.png)

- **VELOCISTA:**

![alt text](https://github.com/AtaraxiaDevs/breakfast/blob/main/ARTE/CONCEPT%20ART/BocetosPersonajes/definitivos/TurnArounds_Unidades/turnvelocista.png)

- **MANTEQUILLA GRITONA:**
- **MERMELADA EXPLOSIVA:**

### 6.2.- LOCALIZACIONES	<a name="localizaciones"/>

Este apartado se refiere a los diferentes escenarios visuales en los que se desarrolla el juego:

- **RESTAURANTE:**



- **COCINA:**

![alt_text](https://github.com/AtaraxiaDevs/breakfast/blob/main/ARTE/InterfazUsuario/Partida/InterfazPartida.png)

---

## 7.- ARTE	<a name="arte"/>
### 7.1.- ESTILO Y REFERENCIAS<a name="estiloYReferencias"/>	

Debido a que el público objetivo son principalmente niños pequeños, se ha querido dotar el arte del juego un estilo amigable, colorido,mono, y con colores pastel.
Inicialmente se planteó como se podrían diseñar personajes relacionados con el desayuno. Se plantearon varios diseños, hasta que se decidió que los protagonistas iban a ser pequeños alienígenas adorables que, con materiales que pueden encontrarse en la cocina a la hora del desayuno, se han construido máquinas para combatir entre sí.
Aquí ya podemos concretar un estilo predefinido para todos los personajes: consistirían en un pequeño extraterrestre manejando una máquina fabricada a partir de utensilios de cocina y alimentos típicos del desayuno.
Los escenarios, por tanto, serán lugares donde es típico tomarse el desayuno: un restaurante, la cocina...
También se ha decidido utilizar pixel art para homogeneizar el estilo de los artistas 2D del equipo, además de aportar un estilo sencillo.

Juegos con Personajes similares:

`Fall Guys`: 

![alt_text](https://github.com/AtaraxiaDevs/breakfast/blob/main/GDD/Imagenes%20Referencias/Fallguys.jpeg)

`Little Big Planet`: 

![alt_text](https://github.com/AtaraxiaDevs/breakfast/blob/main/GDD/Imagenes%20Referencias/littlebigplanet.jpeg)

`Melbits`: 

![alt_text](https://github.com/AtaraxiaDevs/breakfast/blob/main/GDD/Imagenes%20Referencias/melbits.jpeg)

`Among Us`: 

![alt_text](https://github.com/AtaraxiaDevs/breakfast/blob/main/GDD/Imagenes%20Referencias/amongus.jpeg)




### 7.2.- ARTE FINAL	<a name="arteFinal"/>

- **TOSTADA:**

![alt text](https://github.com/AtaraxiaDevs/breakfast/blob/main/ARTE/ARTE%20FINAL/sprite_atacante_idle.png)

- **MAGDALENA:**

![alt text](https://github.com/AtaraxiaDevs/breakfast/blob/main/ARTE/ARTE%20FINAL/sprite_tank_idle.png)

- **BOL DE CEREALES:**

![alt text](https://github.com/AtaraxiaDevs/breakfast/blob/main/ARTE/ARTE%20FINAL/sprite_distancia_idle.png)

- **VELOCISTA:**

![alt text](https://github.com/AtaraxiaDevs/breakfast/blob/main/ARTE/ARTE%20FINAL/sprite_veloz_idle.png)

- **MANTEQUILLA GRITONA:**


- **MERMELADA EXPLOSIVA:**


### 7.3.- ARTE PROMOCIONAL	<a name="artePromocional"/>

![alt text](https://github.com/AtaraxiaDevs/breakfast/blob/main/ARTE/Imagenes%20Promocionales/promo.png)

---

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

---

## 9.- NARRATIVA Y GUION	<a name="narrativaYGuion"/>
### 9.1.- SINOPSIS <a name="sinopsis"/>	

Unos amigables alienígenas deciden venir a la Tierra en busca de nutrientes que les hagan crecer y llegar a su forma completa. Sin embargo, se encuentran con tan amplia variedad de alimentos, que empiezan a tener discusiones internas. Dos de los más respetados, M.G. Y M.E. (NOMBRES PROVISIONALES) reúnen dos grandes grupos, que defienden que el desayuno es la comida más importante del día. 

M.G. defiende que la dieta debería estar sustentada en la Mantequilla, y decide fusionarse con ella para demostrar su poder. M.E. no se queda atrás, pero cree que la Mermelada es mucho más poderosa. Sus constantes discusiones y su creciente temperamento hacen que decidan librar una batalla para probar que llevan la razón.

Los jugadores representan a un pequeño ejército de estos dos grandes grupos. Es por eso que podrán llamar a los poderosos M.G. y M.E. a batalla para apoyarles. 

---

## 10.- DETALLES DE PRODUCCIÓN	<a name="detallesDeProduccion"/>
### 10.1.- MIEMBROS DEL EQUIPO	<a name="miembrosDelEquipo"/>
<img src="https://github.com/AtaraxiaDevs/breakfast/blob/main/GDD/LogoAtaraxia/logo_definitivo.png" width="50px"> **Daniel Ayllón Peinado**: Programador, Scrum Master y CM.<br>
<img src="https://github.com/AtaraxiaDevs/breakfast/blob/main/GDD/Iconos%20Desarrollador/Pablo.jpg" width="50px"> **Pablo García Sánchez**: Artista y Diseñador 2D <br>
<img src="https://raw.githubusercontent.com/AtaraxiaDevs/breakfast/main/GDD/Iconos%20Desarrollador/Celtia.png" width="50px"> **Celtia Martin García**: Artista 2D y Programadora.<br> 
<img src="https://github.com/AtaraxiaDevs/breakfast/blob/main/GDD/Iconos%20Desarrollador/Dani.jpeg" width="50px"> **Daniel Muñoz Rivera**: Game Designer y Usabilidad.<br>
<img src="https://github.com/AtaraxiaDevs/breakfast/blob/main/GDD/LogoAtaraxia/logo_definitivo.png" width="50px"> **Alberto Sánchez Mateo**: Product Owner, Programador y Web Designer. <br>
<img src="https://raw.githubusercontent.com/AtaraxiaDevs/breakfast/main/GDD/Iconos%20Desarrollador/Wei.png" width="50px"> **Wei Zheng**: Artista técnico y Diseñador 2D. <br>

### 10.2.- CICLO DE VIDA	<a name="cicloDeVida"/>

La idea es mantener el juego a lo largo del tiempo, por lo que el modelo que se toma es la mejora e inclusión de contenido constante, así como actualización casi diaria de la tienda, promociones y eventos.

La primera etapa es ver como se comporta el juego: analizar datos, buscar mejoras nuevas, definir el jugador medio... Esto puede provocar cambios en el plan, así como ayudar a que afloren nuevas ideas y pensar en que quieren o buscan los jugadores en nuestro juego.

La segunda etapa va a buscar añadir al juego nuevas unidades y habilidades, para fomentar la diversidad de partidas y evitar que se haga repetitivo. Esto se mantendrá a lo largo de todo su ciclo de vida. Hay que establecer un ritmo de salida de nuevo contenido, que irá relacinado con los socios externos y las necesidades del público o el juego. Las estadísticas nos ayudarán a identificar que es lo que le falta al juego.

La tercera etapa consiste en la ampliación de la tienda. Para este punto, atraídas una serie de marcas, necesitaremos reformar la tienda para empezar a vender Skins y manejar el sistema de premios. La creación de un sistema de Moneda Virtual de Pago y una Moneda del Juego son cruciales en esta parte. 

A partir de aquí, la cuarta etapa se basa en la adición de elementos nuevos, que irán saliendo a lo largo del desarrollo o que parten de algunas ideas que se enumeran a continuación:

POSIBLES AMPLIACIONES DEL JUEGO

- Pasar el juego a Online: hacer que el juego sea online, lo que supone un rango más amplio de jugadores y la inserción de servidores.
- Modo Torneo: establecer un torneo competitivo del juego. Compatible con juego Online. Pueden ser presenciales o no, y se darán premios aportados por las marcas, o en forma de Moneda del Juego.
- Modo de Juego en tiempo real: si el juego resulta poco dinámico, podremos realizar una segunda versión (o rediseño de la misma) donde el combate se cambie a ser 100% en tiempo real, con un Gameplay parecido al Warlords: Call To Arms.

### 10.3.- MODELO DE NEGOCIO <a name="modeloDeNegocio"/>

*PLAN DE NEGOCIO*

Como primer paso, hay que poner el juego en el mercado. Aquí ponemos la primera piedra: empezamos valiéndonos de los anuncios (siempre con contenido relacionado) para su monetización y nos enfocamos en ver como reacciona el público, acercándolo a la gente mediante las redes sociales, eventos pequeños y publicidad extra. 

Una vez testeado el juego, necesitaremos prepararlo para ampliar su mercado. Necesitamos unas ciertas cosas para ello: una serie de marcas menores, que nos ayuden a poner en marcha la tienda; buscar contratos de publicidad relacionados con el sector alimenticio, con marcas más conocidas; e ir promocionando el juego por sitios donde podamos encontrar a nuestro público meta.

Para empezar con buen pie, empezaremos enfocándonos en el comercio más local. Con local no nos referimos a comercio de pueblo, sino a franquicias más específicas del panorama, como puede ser SuperSol (Andalucía) o a ciertas tiendas que resulten populares, como XXXXX. Así, ganamos clientes de manera progresiva sin tener que recurrir a marcas grandes, y demostramos que nuestro modelo funciona.

Cuando ya hemos pasado esa primera fase, nos ponemos en contacto con las empresas que vamos a apuntar en la siguiente fase, pero solo para ofrecer espacios de publicidad. Esto nos da a conocer, y además nos posiciona como contactos fiables para hacer negocios. 

PROMOCIONAR ANTE EL PUBLICO META

Al establecer este mercado más pequeño, empezamos a atraer a las grandes empresas, que ya se interesaron cuando les ofrecimos poner su publicidad. Además, empezamos a apuntar a franquicias más grandes: supermercados, marcas populares, etc. Establecemos así un modelo de negocio más firme, basado en el descrito abajo.

*MODELO DE NEGOCIO*

El modelo de negocio principal va a ser la Fidelización. Buscamos jugadores que se queden, ya sea por el juego competitivo o por la obtención de premios. 

El Ranking nos ayuda a conseguir que el juego trascienda a las partidas, buscando superar las puntuaciones más altas. Además, el Modo Torneo que se implementará posteriormente ayudará a que se necesite una práctica anterior a base de jugar partidas, para conseguir el premio final. 

Los premios que se obtienen están directamente relacionados con nuestros principales socios: las empresas alimenticias y los supermercados. A través de la moneda del juego, conseguida a base de jugar partidas, podremos canjear cupones y productos de estas marcas. Esto puede servir para animar al jugador a seguir jugando por los premios, mientras que las marcas consiguen varias cosas:

- Pueden probar nuevos productos y ver si el público está interesado. Los datos de compra alojados en nuestra tienda les pueden indicar que productos triunfan y cuales no
- Actuar como Cebo y Anzuelo: poner los productos en la tienda puede implicar que nuestros jugadores los prueben y acaben cogiendoles el gusto, lo que supone nuevos clientes potenciales para la empresa que los ponga.
- Potenciar la compra en los establecimientos, estableciendo una relación directa con la membresía de estos (Club Carrefour, por ejemplo).

Posteriormente, con la inclusión del modo Torneo, podremos establecer grandes premios aportados por estas marcas (cestas regalo, descuentos, vales por X dinero) para el ganador, que además podrán establecer como requisito ser miembro del establecimiento (en el caso de supermercados, por ejemplo). Esto no resulta un problema para los niños, ya que serían los padres los encargados de hacer esta gestión. 

Como modelo secundario, relacionado con las microtransacciones, establecemos el Cebo y Anzuelo. Cuando se tenga una serie de marcas asociadas, podemos regalar a los nuevos jugadores la Skin de alguna de esas marcas, como bienvenida al juego. Esto ayuda a que se conozcan las Skins, y el jugador lo agradecerá. El resto ya resultará de pago, encontrándose en la tienda. Si el juego acaba potenciando las rivalidades entre marcas, no sería de extrañar que ciertas Skins sean muy compradas, para destacar el posicionamiento propio. Tampoco se puede descartar un cambio de opinión, lo cual puede desembocar en comprar otra Skin más acorde a tus preferencias. 

*MONETIZACION*

- Micro-transacciones : Habrá Skins de pago. La Moneda virtual del juego
- Free to Play: Ningún coste a la hora de jugar.
- Publicidad: Inclusión de publicidad relacionada con el juego antes del inicio de la partida, evitando así que resulte molesta y repelente a nuestro público infantil. 

*MARKETING*

- Promoción en redes sociales
- Potenciar eventos online (COVID)
- Convenciones Pequeñas
- Torneos

*IDEAS*

- Marcas patrocinan las Unidades. Potenciar rivalidad sana entre marcas. 
- Anuncios de las mismas marcas, no intrusivos, en el inicio de partida. Diseñados codo a codo con las marcas.
- Relacion con cadenas de Supermercados. Promociones, premios, eventos.


![alt text](https://github.com/AtaraxiaDevs/breakfast/blob/main/GDD/Modelo%20de%20Negocio.png)

