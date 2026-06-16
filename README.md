# Introducción

Durante este bootcamp, desarrollé la estructura de un backend para la administración de libros y utilicé una base de datos MySQL y JavaScript con Node.js, pero primero entendí la manera en la que se relacionan los diferentes componentes que forman parte de una aplicación web del lado del servidor.

Construí una base de datos para almacenar información de autores y libros. Antes que nada, establecí una relación de uno a muchos entre ambas tablas. Después de eso, desarrollé la conexión entre el backend y la base de datos para consultar registros, obtener información específica y validar el funcionamiento de las consultas realizadas. Ya, por último, agregué el consumo de una API de ubicación y el almacenamiento de la información obtenida en una segunda base de datos destinada al registro de coordenadas y hora.

Realicé un documento para mostrar el proceso realizado durante cada etapa del proyecto, como los diagramas, la estructura exacta de las bases de datos, el código que desarrollé, los resultados obtenidos y las evidencias de funcionamiento. Todo el desarrollo lo hice de forma local y con la intención de comprender bien los fundamentos que se necesitan para programar aplicaciones backend conectadas a bases de datos y servicios externos.

De todos modos y para una apreciación más completa del código, comparto mi enlace al repositorio de GitHub:

**Repositorio:** https://github.com/chgiselle0210/backend-libros

Dicho documento contiene bastantes capturas de pantalla que sirven como evidencia de lo que aprendí, aparte de un apartado inicial donde justifico el uso de JavaScript como lenguaje de programación y una explicación general del proceso demostrado en las mismas capturas.

# Justificación del Lenguaje de Programación

Decidí utilizar JavaScript debido a que es el lenguaje con el que me encuentro más familiarizada. He tenido la oportunidad de trabajar con sus principales herramientas, librerías, frameworks y SDK, así que ya conozco gran parte de su funcionamiento y la manera en que se conecta con diferentes tecnologías. Gracias a mi elección, pude concentrarme en la lógica del proyecto y en llevar a cabo los requerimientos que me solicitaron, en lugar de invertir tiempo en adaptarme a un lenguaje nuevo.

Aparte, pienso que JavaScript puede utilizarse dentro de entornos de desarrollo como Visual Studio Code de una forma tan fácil. Está su integración con Node.js, la disponibilidad de paquetes mediante npm y la enorme cantidad de documentación disponible, especialmente cuando se trabaja con bases de datos, APIs y formatos de intercambio de información como JSON.

Creo que JavaScript es una opción más adecuada para un proyecto de estas características porque desarrolla de forma rápida y sencilla funcionalidades relacionadas con la conexión a bases de datos, la creación de servicios web y el consumo de APIs externas. En este proyecto fue posible conectarme a MySQL, realizar consultas a la base de datos, recuperar registros específicos, consumir una API de ubicación y almacenar la información obtenida, todo utilizando el mismo lenguaje de programación.

Aunque existían otras opciones válidas para desarrollar el proyecto, como Python, Java o PHP, habría elegido JavaScript incluso sin una recomendación previa, pues es el lenguaje con el que me siento más cómoda trabajando y el que mejor se adapta a mi forma de desarrollar software. Mi elección me ayudó a avanzar con mayor confianza durante el bootcamp y comprender mejor los conceptos relacionados con el desarrollo backend.

# Explicación General del Proyecto

El trabajo comenzó con el diseño de la estructura de la base de datos. Identifiqué las entidades que se requerían para almacenar la información de autores y libros, aparte de la relación existente entre ambas tablas. Una vez que definí el modelo entidad-relación, procedí a crear la base de datos y las tablas correspondientes dentro de MySQL.

Luego, agregué registros de prueba para validar la estructura creada y checar que la relación entre autores y libros funcionara correctamente. Después de ello, desarrollé la conexión entre la aplicación y la base de datos utilizando Node.js y eso me ayudó a realizar consultas para obtener todos los registros disponibles y también recuperar información específica con parámetros enviados en las rutas de la aplicación.

En una segunda etapa, trabajé con el consumo de una API externa para obtener información de la ubicación. Los datos recuperados fueron procesados en formato JSON y, después, almacenados en una base de datos independiente llamada Registro. Realicé, por último, distintas pruebas para comprobar que tanto la conexión con MySQL como la obtención y almacenamiento de datos funcionaran de manera correcta y obtuve los resultados que se muestran a lo largo del documento en las capturas de pantalla que abarqué.

# Conclusión

Al finalizar este bootcamp, entendí de una manera mucho más práctica cómo se relacionan distintos elementos que forman parte del desarrollo backend de una aplicación. Aunque ya tenía experiencia previa utilizando JavaScript, este trabajo me ayudó a aplicarlo en un contexto diferente al que estaba acostumbrada, sobre todo al momento de conectarlo con la base de datos MySQL y trabajar con información almacenada.

Uno de los aspectos que más me ayudó a reforzar fue el proceso completo que existe detrás de una consulta de datos. Antes de realizar este proyecto conocía algunos conceptos, pero al desarrollarlo paso a paso pude comprender mejor cómo intervienen las bases de datos, las consultas SQL, las rutas de la aplicación, las APIs y el intercambio de información vía JSON para lograr que todo funcione correctamente.

También pienso que fue una buena oportunidad para practicar la resolución de problemas. Durante el desarrollo, surgieron distintos errores relacionados con consultas, registros y configuraciones que tuve que estar corrigiendo para obtener los resultados esperados. Así, me familiaricé más con herramientas como MySQL Workbench, Visual Studio Code, Node.js y las librerías utilizadas para la conexión entre la aplicación y la base de datos.

Creo que alcancé a cumplir con los objetivos del bootcamp, pues logré construir la base de datos solicitada, establecer la relación entre autores y libros, consultar información de diferentes maneras, consumir una API externa y almacenar bien los datos obtenidos. Aparte de cumplir con los requerimientos que se pidieron, me llevo conocimientos que serán de utilidad en proyectos futuros relacionados con el desarrollo backend y la gestión de información.
