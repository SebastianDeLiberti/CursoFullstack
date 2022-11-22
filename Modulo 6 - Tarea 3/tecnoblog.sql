-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 22-11-2022 a las 14:40:33
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
(5, 'Linux Mint', 'https://linuxmint.com/', 'Una de las distribuciones de linux mas utilizadas, sobre todo por su parecido con windows y su bajo consumo de recursos.');

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
(8, 1, 'sebastian', 'uzgmbnbgfarjydbzcrnx', 'Técnico en electrónica. Me gusta todo lo relacionado con la tecnología, en especial la computación y la programación.', '', '', '');

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
(22, 1, 'sebastian', 'uzgmbnbgfarjydbzcrnx', '21/11/2022', 'tutorial', 'asxqehfuwapundcphryb', 'Apple tendría su propio buscador como Google', 'En 2018 surgió la posibilidad de que Apple tuviera un buscador propio, pero recientemente volvieron a aparecer los rumores, ya que la empresa quiere incrementar su negocio publicitario.\r\n\r\nSegún fuentes de Apple, la compañía esta trabajando en esta herramienta para agregar funciones de búsqueda de Spotlight y Sugerencias de Siri en iPhone y Mac, lo que ayudaría a mejorar las respuestas del asistente de voz.\r\n\r\nDicho proyecto se equilibraría con el aumento de anuncios en la tienda App Store ya que la publicidad es el principal punto de monetización de un sitio como el que tiene Google, Bing, Yahoo o DuckDuckGo.'),
(23, 1, 'sebastian', 'uzgmbnbgfarjydbzcrnx', '21/11/2022', 'noticia', 'xpafx3pcqlx8nntfyxah', 'Cómo crear un fondo de pantalla animado para el celular', 'Hay muchas razones por las que una persona quiere poner fondos de pantalla animados: son divertidos, se ven muy bien, son diferentes, etc. Es cierto que consume mucha batería, pero las ventajas son claras: son más impresionantes que las fotos ordinarias. Ya sea en Android o en el último modelo de iPhone.\r\n\r\nAndroid no tiene su propia opción para hacer un fondo de pantalla en vivo de video. Lo mismo ocurre con Apple, que eliminó esta opción hace años en el iPhone. Para hacer esto, es necesario encontrar una aplicación de terceros en Google Play Store o App Store que se encargue de este trabajo.\r\n\r\nRealmente hay muchas opciones disponibles en ambas tiendas de aplicaciones. Solo hay que hacer una simple búsqueda y se podrán comprobar decenas y todas ellas son gratuitas o de pago. Sin más rodeos, hay que ver las soluciones para ambos sistemas operativos.\r\n\r\nCómo crear un fondo de pantalla animado en Android\r\n\r\nSe puede elegir la opción que más guste al lector de Infobae en Play Store,, pero la más recomendada incluso por los mismos usuarios es Video Live Wallpaper Maker. La aplicación es muy cara cuando se paga por sus funciones premium, que valen USD$ 20 al mes.\r\n\r\nPor supuesto, la versión gratuita te permite crear fácilmente fondos de pantalla en vivo a partir de videos. Solo se tendrán que aguantar toneladas de anuncios cada vez que se usa, pero soportable.\r\n\r\n1. Ir a Google Play Store y descargar Video Live Wallpaper Maker.\r\n\r\n2. Abrir la aplicación.\r\n\r\n3. La página de inicio muestra la galería de vídeos del dispositivo. Seleccionar el video que se desea usar.\r\n\r\n4. Aparecerán algunas opciones. Se puede optar por habilitar el sonido y la escala para ajustarse a la pantalla. Elegir el que se desee.\r\n\r\n5. Una vez hecho esto, hacer clic en Establecer fondo de pantalla del lanzador de Android.\r\n\r\n6. Hacer clic en Establecer fondo de pantalla.\r\n\r\n7. Elegir si se quiere ponerlo en pantalla de inicio, o pantalla de inicio y pantalla de bloqueo. Listo.\r\n\r\nCon esta app ya se puede tener el fondo animado deseado para el celular Android. El trabajo de quien lee este artículo es hacer un buen video sobre algo que le gusta, y eso es todo.\r\n\r\nComo se ha mencionado, se puede usar un video existente o crear un nuevo video para esta misión. Si se tiene a una mascota cerca, es momento de grabarlo y mejor aún si duerme de una manera graciosa.\r\n\r\nCómo crear un fondo de pantalla animado en iPhone\r\n\r\nApple eliminó el fondo de pantalla en vivo en iOS 16. Entonces, si se tiene el software anterior de Apple, en buena hora. Aunque actualmente sería difícil tenerlo.\r\n\r\nEn fin, como se ha mencionado, si todavía se tiene la versión de iOS 15, crear un propio fondo de pantalla en vivo es relativamente fácil. Por ello, los que tengan esta versión hacia atrás pueden utilizar cualquier Live Photo como fondo de pantalla animado. Hay que seguir los siguientes pasos:\r\n\r\n1. Abrir la aplicación Ajustes.\r\n\r\n2. ingresar en Fondo de pantalla.\r\n\r\n3. Seleccionar la opción Elegir un nuevo fondo de pantalla.\r\n\r\n4. Presionar Live Photos.\r\n\r\n5. Seleccionar una foto y confirmar.\r\n\r\n6. Seleccionar Establecer.\r\n\r\n7. Selecciona entre las opciones Establecer pantalla de bloqueo, Establecer pantalla de inicio o Establecer ambos. Y listo.\r\n\r\nAhora bien, si el usuario está ejecutando iOS 16 y quiere convertir sus vídeos en fondos de pantalla, hay opciones disponibles en forma de una aplicación de terceros, como se hizo anteriormente con un celular Android.\r\n\r\nLa App Store está repleta de ellos, pero por valoraciones en la tienda de aplicaciones Infobae recomienda IntoLive. Nuevamente, es un programa bastante costoso si el usuario se suscribe, pero se puede usar de forma gratuita, que de paso está bien para realizar esta tarea.\r\n\r\n1. Abrir la App Store de Apple y descargar IntoLive. Luego ejecutarlo.\r\n\r\n2. Seleccionar Nuevo proyecto.\r\n\r\n3. Buscar el contenido que se desea utilizar.\r\n\r\n4. Pulsar sobre el botón Añadir.\r\n\r\n5. Ahora se puede hacer todo tipo de ediciones. Entre ellos, se puede recortar, añadir contenido, realizar cambios de exposición y color, etc.\r\n\r\n6. Cuando se termine de editar, presionar el botón Compartir en la esquina superior derecha.\r\n\r\n7. Seleccionar Live Photo en Tipo de archivo.\r\n\r\n8. Seleccionar la resolución y FPS deseados.\r\n\r\n9. Pulsar el botón Guardar en Fotos, y listo.\r\n\r\n');

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
  MODIFY `id_enlace` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `nosotros`
--
ALTER TABLE `nosotros`
  MODIFY `id_nosotros` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `posts`
--
ALTER TABLE `posts`
  MODIFY `id_post` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
