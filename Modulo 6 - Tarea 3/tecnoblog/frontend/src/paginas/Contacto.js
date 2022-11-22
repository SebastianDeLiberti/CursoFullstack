import React from 'react';

import "../estilos/componentes/paginas/Contacto.css"

const Contacto = (props) => {

    return(

        <main>

            <div className="wrapper">

                    <div id="main_content">

                        <h2>Información de Contacto</h2>

                        <form id="formulario">

                            <p>
                                <label for="nombre">Nombre</label>
                                <input type="text" name="nombre"></input>
                            </p>
                            <p>
                                <label for="email">Correo Electrónico</label>
                                <input type="text" name="email"></input>
                            </p>
                            <p>
                                <label for="telefono">Teléfono</label>
                                <input type="text" name="telefono"></input>
                            </p>
                            <p>
                                <label for="mensaje">Mensaje</label>
                                <textarea name="mensaje"></textarea>
                            </p>
                            <p>
                                <input type="submit" value="Enviar"></input>
                            </p>

                        </form>

                    </div>

            </div>

        </main>

    );

}

export default Contacto;