import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import NoticiasItem from '../componentes/noticias/NoticiasItem';
import "../estilos/componentes/paginas/Noticias.css"
import NoticiasScript from '../scripts/NoticiasScript.js';

const Noticias = (props) => {

    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {

        const cargarPosts = async () => {

            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/noticias');
            setPosts(response.data);
            setLoading(false);

        }

        cargarPosts();

    }, []);

    return (

        <main>

            <div className="wrapper">

                <div id="main_content">

                    {

                        loading ? (

                            <p>Cargando...</p>

                        ) : (

                            posts.map(function (item) {

                                if (item.tipo === 'noticia') return <NoticiasItem key={item.id_post} fecha={item.fecha} portada={item.portada} titulo={item.titulo} foto_usuario={item.foto_usuario} nombre_usuario={item.nombre_usuario} cuerpo={item.cuerpo} />
                                else return " ";

                            })

                        )

                    }

                </div>

            </div>

            <NoticiasScript />

        </main>

    );

}

export default Noticias;