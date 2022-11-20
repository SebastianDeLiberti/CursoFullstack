-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 20-11-2022 a las 22:05:24
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
-- Estructura de tabla para la tabla `posts`
--

CREATE TABLE `posts` (
  `id_post` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `fecha` varchar(250) NOT NULL,
  `tipo` varchar(250) NOT NULL,
  `portada` varchar(250) NOT NULL,
  `titulo` varchar(250) NOT NULL,
  `cuerpo` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `posts`
--

INSERT INTO `posts` (`id_post`, `id_usuario`, `fecha`, `tipo`, `portada`, `titulo`, `cuerpo`) VALUES
(1, 1, '20/11/2022', 'tutorial', 'https://www.infobae.com/new-resizer/L0Bk9XgdWvJnxy0V7ozizuZCWac=/992x558/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/KKOGZCWHFND4PMGWYUHTPRJ7YE.jpg', 'Los presidenciables del PRO salen a la caza de aliados en el sindicalismo y apuran sus proyectos de reforma laboral', '¿Se puede decir que el PRO salió a la caza de sindicatos que apuntalen su eventual regreso al poder a partir del 10 de diciembre de 2023? Sí, se puede, como dice el viejo lema motivador del partido fundado por Mauricio Macri. Claro que no se trata sólo de sumar respaldos para las elecciones: los candidatos presidenciales de esa fuerza no descuidan un sector que les resulta políticamente hostil y en el que tienen que afianzarse porque es decisivo para asegurar la gobernabilidad.\r\n\r\nPor eso en las últimas semanas, al calor de la crisis socioeconómica y la degradación política del Frente de Todos, se multiplicaron los contactos reservados de Horacio Rodríguez Larreta, Patricia Bullrich y María Eugenia Vidal con dirigentes gremiales y los tres precandidatos, cada uno con sus matices, avanzan con la elaboración de propuestas laborales que aplicarán si llegan a la Casa Rosada.\r\n\r\nBullrich eligió reclutar aliados sindicales con un armado de cuño peronista: un dirigente de su máxima confianza está recorriendo el país con la misión de captar gremialistas que se incorporen a juntas promotoras de la llamada “Mesa Sindical Soberana Patricia Bullrich 2023″. Rodríguez Larreta hace una apuesta distinta: mientras ajusta sus contactos personales con los popes sindicales, refuerza los lazos desde la gestión gracias a la tarea del subsecretario de Trabajo de la Ciudad, Ezequiel Jarvis. Vidal tampoco descuida los encuentros con algunos dirigentes a partir del vínculo que entabló durante su gestión como gobernadora bonaerense, muchas veces motorizados por Federico Salvai, su ex jefe de Gabinete, quien organiza los contactos con empresarios y sectores del círculo rojo.'),
(3, 1, '20/11/2022', 'noticia', 'https://www.infobae.com/new-resizer/oE9ELbLMdMRTePo3QfHZeSUCvsg=/992x606/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/XR4ZJRAHYBCKZFQDWXML6CU54A.jpg', 'Las cenizas de Hebe de Bonafini descansarán en la Plaza de Mayo, según anunciaron desde Madres ', 'La Asociación Madres de Plaza de Mayo anunció hoy que las cenizas de su fallecida titular, Hebe de Bonafini, descansarán en la Plaza de Mayo por pedido de la propia dirigente.\r\n\r\n“Hasta siempre Hebe. La Asociación Madres de Plaza de Mayo comunica que nuestra presidenta, Hebe de Bonafini, cambió de casa, como ella siempre dijo de sus compañeras que la precedieron en la partida. Seguirá para siempre en la Plaza de Mayo. ¡Ni un paso atrás!”, escribió la organización en un comunicado al que titularon “Hebe cambió de casa” y que difundieron a través de sus redes sociales.\r\n\r\nDesde la entidad confirmaron que “por pedido de la propia Hebe, sus cenizas descansarán en la Plaza de Mayo” y remarcó que más adelante se informarán los detalles de esa iniciativa. “Nos enseñaste a caminar, ahora nosotrxs seguiremos tus pasos #HebeEterna”, finalizaron su posteo desde la agrupación que Bonafini dirigía desde 1979.\r\n\r\nEl acto que encabezó CFK el jueves permite las mismas miradas. El estadio único reventaba: eso es cierto. Tal vez no haya muchos dirigentes políticos en el país capaces de movilizar tanta gente. Mauricio Macri, en la campaña hacia la primera vuelta del 2019, donde también fue derrotado, congregó multitudes: su acto de cierre en la 9 de Julio juntó a cientos de miles de personas. En todo caso, no hay muchos como ella, o como Macri. Pero eso no quiere decir que su candidatura, con la que ella coquetea, e intentan instalar los suyos, termine en una victoria. En el escrutinio de una elección no se cuenta la cantidad de estadios que podría llenar un candidato sino los votos que recibe.\r\n\r\nEn ese sentido, una valoración de los datos objetivos que rodean al acto de Cristina permite pensar que el camino que la espera es, como mínimo, muy cuesta arriba. Hay que mirar los resultados de todas las elecciones que se realizaron en la última década. En 2013, con todo el aparato del Estado a su favor, el candidato de CFK, Marín Insaurralde, fue derrotado por Sergio Massa. En 2015, Mauricio Macri venció a la fórmula kirchnerista encabezada por Daniel Scioli. Dos años después, la propia Cristina perdió contra Esteban Bullrich, un dirigente de la segunda línea macrista. En 2019, la actual vicepresidenta interpretó que con ella no alcanzaría para ganar y por eso designó a Alberto Fernández. El año pasado, el peronismo unido fue aplastado por Juntos por el Cambio y apenas superó el 30 por ciento de los votos. Durante esos diez años, la inmensa mayoría de las encuestas reflejó una imagen negativa sostenida por encima del 50 por ciento. Nunca, de todos modos, esos números fueron peores que los actuales.'),
(5, 3, '233', 'tutorial', '233', '111', '233111'),
(6, 22222, '22222', 'noticia', '22222', '22222', '22222');

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
-- AUTO_INCREMENT de la tabla `posts`
--
ALTER TABLE `posts`
  MODIFY `id_post` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
