-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 25-11-2022 a las 20:14:45
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tecnoblog`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `enlaces`
--

CREATE TABLE `enlaces` (
  `id_enlace` int(11) NOT NULL,
  `nombre` varchar(250) NOT NULL,
  `enlace` varchar(250) NOT NULL,
  `descripcion` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `enlaces`
--

INSERT INTO `enlaces` (`id_enlace`, `nombre`, `enlace`, `descripcion`) VALUES
(5, 'Linux Mint', 'https://linuxmint.com/', 'Una de las distribuciones de linux mas utilizadas, sobre todo por su parecido con windows y su bajo consumo de recursos.'),
(6, 'Microsoft', 'https://www.microsoft.com/es-ar', 'Sistema operativo mas utilizado en la actualidad.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nosotros`
--

CREATE TABLE `nosotros` (
  `id_nosotros` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `nombre_usuario` varchar(250) NOT NULL,
  `foto_perfil` varchar(250) NOT NULL,
  `texto` text NOT NULL,
  `sm_face` varchar(250) DEFAULT NULL,
  `sm_twit` varchar(250) DEFAULT NULL,
  `sm_inst` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `nosotros`
--

INSERT INTO `nosotros` (`id_nosotros`, `id_usuario`, `nombre_usuario`, `foto_perfil`, `texto`, `sm_face`, `sm_twit`, `sm_inst`) VALUES
(8, 1, 'sebastian', 'uzgmbnbgfarjydbzcrnx', 'Técnico en electrónica. Me gusta todo lo relacionado con la tecnología, en especial la computación y la programación.', 'https://es-la.facebook.com/', 'https://twitter.com/explore', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `posts`
--

CREATE TABLE `posts` (
  `id_post` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `nombre_usuario` varchar(250) NOT NULL,
  `foto_usuario` varchar(250) NOT NULL,
  `fecha` varchar(250) NOT NULL,
  `tipo` varchar(250) NOT NULL,
  `portada` varchar(250) NOT NULL,
  `titulo` varchar(250) NOT NULL,
  `cuerpo` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `posts`
--

INSERT INTO `posts` (`id_post`, `id_usuario`, `nombre_usuario`, `foto_usuario`, `fecha`, `tipo`, `portada`, `titulo`, `cuerpo`) VALUES
(36, 1, 'sebastian', 'uzgmbnbgfarjydbzcrnx', '25 de noviembre, 2022', 'noticia', 'zitnifolb5qduvqorpea', 'Con esta opción en iPhone y celular Android se podrá saber cuánto tiempo se usa una aplicación', 'Es normal que el teléfono se convierta en una herramienta de uso diario para trabajar, estudiar o entretenerse, por lo que cada fabricante ofrece alternativas para verificar el tiempo de uso general y el de cada aplicación, además dar opciones para poner límites.</br></br>\r\n\r\nPara esto no será necesario descargar una aplicación adicional, sino que hay una función nativa que permite verificar esa información día a día, por lo menos en los móviles que tienen Android 9 en adelante y en iPhone a partir de iOS 12.</br></br>\r\n\r\nPara los celulares con el sistema operativo de Google la herramienta se llama Bienestar digital, que se encontrará en Ajustes. Allí habrá varias funciones como Control parental, Modo descanso, Modo sin distracciones, entre otras.</br></br>\r\n\r\nPara este caso la que nos interesa es la de tiempo de uso, que será lo primero que sale con un gráfico circular que muestra en el centro la cantidad de minutos que el celular ha estado activo ese día y a su alrededor las aplicaciones que se han abierto. Debajo del circulo aparecerán las veces que se ha desbloqueado el teléfono y las notificaciones que se han recibido.</br></br>\r\n\r\nAl pulsar en el centro del círculo, en la cantidad de minutos, se abre otra ventana con información mucho más desglosada, mostrando los minutos exactos en los que una plataforma ha sido usada y arriba una gráfica de barras con la comparación de actividad de la última semana.</br></br>\r\n\r\nEn esta pestaña hay otras opciones, como ver las estadísticas las estadísticas de los días anteriores, establecer temporizadores para las aplicaciones, lo que la detiene definitivamente al cumplir el límite de tiempo diario, y cambiar el gráfico según el número de notificaciones o cantidad de veces que se abrió cada app.</br></br>\r\n\r\nSi se pulsa en cada aplicación se abrirá una ventana adicional con información detallada de esa plataforma, su tiempo de uso en la última semana, opciones de temporización y más datos recientes. En el caso de los navegadores, la herramienta deja ver cuáles fueron los sitios web visitados y el tiempo de visualización de cada uno.</br></br>\r\n\r\nAlgunas marcas entregan cada semana un resumen al usuario, comparándolo con su actividad en la semana anterior para que haga un uso saludable de su dispositivo.</br></br>'),
(37, 1, 'sebastian', 'uzgmbnbgfarjydbzcrnx', '25 de noviembre, 2022', 'tutorial', 'gqnuapula1xew4ys0me5', 'Así se puede conocer el historial de precios de un producto en Amazon', 'Hoy en día existe una herramienta que puede ayudar a las personas a obtener un historial completo de los precios que se han ofertado por un producto en Amazon.</br></br>\r\n\r\nLa página web camelcamelcamel.com permite que los usuarios visualicen por medio de un gráfico la evolución que tienen los precios de los productos de Amazon de manera sencilla y que facilita a las personas tomar decisiones sobre si es conveniente comprar en ese momento o esperar a que el precio actual se reduzca un poco más antes de realizar cualquier transacción.</br></br>\r\n\r\nLa página web no es un buscador de productos, sino un comparador de precios, por lo que aún cuando se pueden buscar las palabras claves de los artículos es más recomendable ingresar Amazon, ingresar a la página específica del producto, copiar el link e introducirlo en la barra de búsqueda de camelcamelcamel.</br></br>\r\n\r\nUna vez hecho esto, los usuarios verán en la parte inferior un cuadro con una línea verde que representa la evolución del precio de los productos en los últimos meses, aunque se puede ampliar hasta un plazo de un año, además de información como el precio máximo que se ha tenido y el mínimo registrado en ese periodo de tiempo.</br></br>\r\n\r\nPor otro lado, también se pueden aplicar filtros para incluir precios aun más reducidos en caso de que se deseen artículos nuevos de terceras personas que estén a la venta o que sean usados. Los tres filtros pueden activarse al mismo tiempo para ver una comparación más amplia de precios.</br></br>\r\n\r\nAdemás, para asegurarse de que los usuarios reconozcan cuándo un producto tiene un buen precio y es el momento ideal para comprarlo, la página web tiene etiquetas en los productos que los identifica como “Buen precio” y “Mejor precio”. Si un artículo está en alguna de estas categorías entonces el usuario deberá decidir si desea esperar un poco más o comprar en ese momento.</br></br>\r\n\r\nEn caso de que los usuarios decidan no comprar el producto inmediatamente, la web de camelcamelcamel tiene una opción especial llamada Ojeador de Precios, que se dedica a establecer un porcentaje ideal de disminución en el precio de un producto para que el usuario reciba una alerta por correo electrónico a modo de recordatorio.</br></br>\r\n\r\nEsta función es gratuita y está habilitada para cualquier usuario de la página web. Lo único que deberán hacer los usuarios es introducir su correo electrónico, establecer qué tipo de producto desean (de Amazon, nuevo de terceros o usado de terceros), indicar el porcentaje de reducción en el precio que desean obtener y hacer clic en el botón Track. Una vez que el monto se reduzca tanto o más de lo señalado, se recibirá una alerta por correo para que el usuario ingrese a Amazon para la compra.</br></br>\r\n\r\nEsta página web también tiene su propia extensión diseñada para Google Chrome. Para usarla solo se debe ingresar a la página web específica de un producto de Amazon y hacer clic en el botón especial del programa. La misma tabla de evolución de precios aparecerá e indicará a los usuarios si el monto solicitado por la compañía es conveniente para el comprador.</br></br>'),
(38, 1, 'sebastian', 'uzgmbnbgfarjydbzcrnx', '25 de noviembre, 2022', 'tutorial', 'bdwkzqmxbtmrbs5rsdn3', 'Cómo activar alertas de sonido en el iPhone o Apple Watch para detectar electrodomésticos', 'Los dispositivos de Apple tienen integrado en su sistemas la función de reconocimiento de sonidos a partir del lanzamiento de iOS 14 en el año 2020, pero no fue hasta la versión de iOS 16 que se incorporó una utilidad adicional, que es la capacidad de incorporar sonidos que son propios de alarmas de objetos y electrodomésticos.</br></br>\r\n\r\nEsta herramienta, aunque está diseñada para los usuarios de iPhone que tienen algún tipo de discapacidad o dificultad auditiva, puede ser utilizada por cualquier personas a modo de alerta a distancia de algunas tareas del hogar.</br></br>\r\n\r\nSin embargo, esta no sería una alerta sonora sino visual a modo de notificación en el iPhone; útil para quienes están concentrados realizando otras actividades como escuchar música o leyendo.</br></br>\r\n\r\nCómo se activa el reconocimiento de sonidos en iOS 16</br></br>\r\n\r\nPara acceder a esta función en los dispositivos iPhone se debe:</br></br>\r\n\r\n- Abrir la aplicación Ajustes del iPhone.</br></br>\r\n\r\n- Ingresar a la opción de Accesibilidad.</br></br>\r\n\r\n- Pulsar la opción de Reconocimiento de sonidos y activarla.</br></br>\r\n\r\n- Tocar el apartado de Sonidos que indica cuáles han sido registrados por el usuario en el dispositivo.</br></br>\r\n\r\n- En el menú de Sonidos, se debe seleccionar el tipo que se desea reconocer. Se cuenta con opciones de alarmas, relacionados con hogar, entre otros.</br></br>\r\n\r\n- Al activar el reconocimiento se debe grabar el audio en varias ocasiones hasta que el sistema esté conforme con las muestras.</br></br>\r\n\r\nSin embargo, esta ruta de acceso solo está dirigida a la activación general del reconocimiento de sonidos y no a la que está específicamente relacionada con los electrodomésticos.</br></br>\r\n\r\nEste apartado se encuentra dentro de la opción Sonidos - “Casa” y según Apple, para poder registrar el audio de algún tipo de electrodoméstico se debe ir a la opción del mismo nombre (Electrodoméstico) o timbre personalizado.</br></br>\r\n\r\n- Luego se debe pulsar la opción de continuar y dar un nombre al sonido correspondiente. Puede ser “lavadora” o “microondas”.</br></br>\r\n\r\n- Para capturar la muestra de sonido el usuario debe hacer clic en la opción de Empezar a escuchar.</br></br>\r\n\r\n- Cuando el iPhone detecte el sonido correcto, se guardará luego de hacer clic en Guardar sonido.</br></br>\r\n\r\n- Según las indicaciones de la función, el proceso solo estará completo una vez que se hayan capturado 5 muestras de audio.</br></br>\r\n\r\nUna vez que se ha completado el registro del audio, la configuración finalizará y los usuarios recibirán notificaciones tanto en el iPhone como en su Apple Watch si tienen uno o si está vinculado al dispositivo móvil.</br></br>\r\n\r\nPor su parte, según la página web oficial de la compañía de tecnología, estos sonidos pueden ser registrados en todo momento, pero los usuarios no pueden confiar en que se reconozcan “en circunstancias en las que puedas hacerte daño o resultar herido, en situaciones de alto riesgo o emergencia, o para orientarte.”</br></br>\r\n\r\nEn el caso específico del registro y detección de sonidos relacionados con actividades del hogar, esta es una característica exclusiva de la versión de iOS 16, por lo que solo podrán usar esta función aquellos dispositivos iPhone que tengan soporte para la actualización más reciente del sistema operativo de Apple.'),
(39, 1, 'sebastian', 'uzgmbnbgfarjydbzcrnx', '25 de noviembre, 2022', 'noticia', 'pm8jpdeche4kgxjvgq8q', 'Sony revela cuándo lanzaría la PlayStation 6', 'PlayStation 5 llegó a las tiendas de manera oficial a fines de 2020. Ni siquiera ha llegado a la mitad de su ciclo todavía. Sin embargo, la marca japonesa parece tener más o menos claro cuándo podría ver la luz su sucesora: PS6 o PlayStation 6.</br></br>\r\n\r\nEn un documento registrado en la Autoridad de Competencia y Mercados (CMA) con relación a la compra de Activision Blizzard por parte de Microsoft, la compañía japonesa sugiere, que su próxima consola (que según la nomenclatura convencional debería ser la PS6 o PlayStation 6) no se lanzará hasta 2028.</br></br>\r\n\r\n“Para el momento en el que Sony lance la siguiente generación de su consola PlayStation (que probablemente ocurra alrededor de ...), habrá perdido acceso a Call of Duty y otros títulos de Activision, haciéndoles extremadamente vulnerables a la migración de usuarios”, se puede leer en el documento.</br></br>\r\n\r\nEn el archivo enviado a CMA muestra el año en que la marca predice el lanzamiento de la PlayStation 6 (o PS6) en lugar de la marca negra. Sin embargo, los abogados decidieron retener esta información de la versión publicada por razones de confidencialidad. No obstante, si algún lector quiere leer el extracto completo, la marca sugiere que al menos la PS6 no verá la luz hasta 2028.</br></br>\r\n\r\nLos abogados de Sony argumentan que el compromiso de Microsoft de llevar Call of Duty a las consolas PlayStation para 2027 es insuficiente porque la próximo consola no se beneficiaría del acuerdo y, por lo tanto, se enfrentaría a una desventaja competitiva significativa. En otras palabras: PlayStation 6 no se lanzará hasta 2028 como mínimo.</br></br>\r\n\r\nUno de los puntos importantes de este documento es: ¿realmente Sony planea lanzar la PlayStation 6 a partir de 2028, o se trata, por el contrario, de una suposición de los abogados de la marca basada en los ciclos habituales de la industria de los videojuegos?</br></br>\r\n\r\nSi la PS6 se lanzara en 2028, el ciclo de la PlayStation 5 sería un año más largo que las dos generaciones anteriores: entre PS3 y PS4 transcurrieron siete años, al igual que entre la PS4 y PS5. La duda sigue en el aire, si la actual generación de consolas (Xbox Series X y PlayStation 5) será la última, o si se verá una nueva en el futuro (PlayStation 6). Los documentos presentados por Sony a la CMA sugieren lo último mencionado.</br></br>\r\n\r\nPero el crecimiento gradual de los juegos en la nube, gracias a servicios como Xbox Game Pass, puso a la industria hacen dudar sobre cuál será la situación de la industria en un futuro.</br></br>\r\n\r\n'),
(40, 1, 'sebastian', 'uzgmbnbgfarjydbzcrnx', '25 de noviembre, 2022', 'tutorial', 'knndi1juanaexwxqiw5p', 'Truco para saber quién visitó el perfil de TikTok', 'Ante el crecimiento de usuarios y la presencia de acosadores o contactos no deseados, TikTok sumó hace un tiempo la opción de consultar quién visita el perfil personal. Esta herramienta se llama ‘Historial de visitas de perfil’ y permite revisar qué cuentas entraron en los últimos 30 días.</br></br>\r\n\r\nEsta opción abre un listado completo con los nombres de los perfiles que accedieron, algo que también puede ser funcional para los creadores de contenido que quieran empezar a conocer su audiencia.</br></br>\r\n\r\nUn elemento clave de esta función es que si se habilita la verificación de usuarios que entraron a la de los demás, también podrán ver nuestra actividad. Algo muy similar a lo que sucede con el símbolo de leído en los chats de WhatsApp o la visualización de las historias.</br></br>\r\n\r\nLa aplicación ordenó hace un tiempo la manera en la que los usuarios gestionan sus notificaciones, ya que antes aparecía un listado completo con los mensajes, likes y usuarios ganados. Ahora, está dividido por filtros y en medio de eso agregó el historial de visualizaciones.</br></br>\r\n\r\nPara verificar la información hay que seguir los siguientes pasos:</br></br>\r\n\r\n- Abrir TikTok.</br></br>\r\n\r\n- Ingresar al perfil de usuario.</br></br>\r\n\r\n- Seleccionar la opción ‘Privacidad’.</br></br>\r\n\r\n- Elegir la herramienta ‘Visualizaciones del perfil’.</br></br>\r\n\r\n- Activar la herramienta ‘Historial de visualización del perfil’.</br></br>\r\n\r\nA continuación, desplegará un listado con todas las cuentas que entraron al perfil durante los últimos 30 días y que también tengan activada esta función, por lo que no es un grupo real de todos los que entraron.</br></br>\r\n\r\nEsta herramienta se actualiza cada 24 horas y puede que en algunos casos lance notificaciones al detectar una actividad.'),
(41, 1, 'sebastian', 'uzgmbnbgfarjydbzcrnx', '25 de noviembre, 2022', 'noticia', 'kovcdtqfslbraxzfh48c', 'DHL y Luis Vuitton fueron víctimas de suplantación de identidad para el Black Friday', 'Llega un año más del Black Friday, la tradición comercial importada de Estados Unidos (donde se celebra el viernes previo a Acción de Gracias) y que no solo marca el inicio de la campaña de compras navideña, sino que para muchos comercios supone buena parte de su facturación anual.</br></br>\r\n\r\nPero no todo es color rosa. Pues bien, Check Point Software Technologies, un proveedor de seguridad cibernética, advierte a los compradores del Black Friday que tengan cuidado con las estafas de phishing pues dos marcas muy conocidas están en la mira de los cibercriminales.</br></br>\r\n\r\nLos especialistas mencionados anteriormente descubrieron una campaña de correo electrónico suplantando a la empresa de entrega DHL.</br></br>\r\n\r\nLos correos electrónicos se enviaron desde la dirección de correo electrónico “support@consultingmanagementprofessionals[.]com” y se falsificaron para que aparecieran como si hubieran sido enviados desde “Seguimiento de envío”.</br></br>\r\n\r\nEl correo electrónico tenía una URL maliciosa adjunta, diseñada para robar la identidad de la víctima alegando que tenía que pagar por la entrega.</br></br>\r\n\r\nCPR identificó un correo electrónico malicioso que se hacía pasar por la marca de moda Louis Vuitton con el asunto “Viernes Negro”. “A partir de USD$ 100. Te enamorarás de los precios”, se podía leer en el mensaje del correo. Después de hacer clic, el sitio conducía al usuario a un lugar en internet malicioso.</br></br>\r\n\r\nDurante el último mes, ha habido un número creciente de incidentes en estos dominios, que llegó a casi 15.000.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(10) NOT NULL,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'sebastian', '7e29e8acbdae72f3af3e65e6f2399418');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `enlaces`
--
ALTER TABLE `enlaces`
  ADD PRIMARY KEY (`id_enlace`);

--
-- Indices de la tabla `nosotros`
--
ALTER TABLE `nosotros`
  ADD PRIMARY KEY (`id_nosotros`);

--
-- Indices de la tabla `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id_post`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `enlaces`
--
ALTER TABLE `enlaces`
  MODIFY `id_enlace` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `nosotros`
--
ALTER TABLE `nosotros`
  MODIFY `id_nosotros` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `posts`
--
ALTER TABLE `posts`
  MODIFY `id_post` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
