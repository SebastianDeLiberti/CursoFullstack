import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import EnlacesItem from '../componentes/enlaces/EnlacesItem';
import "../estilos/componentes/paginas/Enlaces.css"

const Enlaces = (props) => {

    const [loading, setLoading] = useState(false);
    const [enlaces, setEnlaces] = useState([]);

    useEffect(() => {

        const cargarEnlaces = async () => {

            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/enlaces');
            setEnlaces(response.data);
            setLoading(false);

        }

        cargarEnlaces();

    }, []);

    return (

        <main>

            <div className="wrapper">

                <div id="main_content">

                    <article className="article_enlaces">

                        <table>

                            <tr>

                                <th>Enlace</th>
                                <th>Descripción</th>

                            </tr>

                            {

                                loading ? (

                                    <p>Cargando...</p>

                                ) : (

                                    enlaces.map(item => <EnlacesItem key={item.id_enlace} nombre={item.nombre} enlace={item.enlace} descripcion={item.descripcion} />)

                                )

                            }

                        </table>

                    </article>

                </div>

            </div>

        </main>

    );

}

export default Enlaces;