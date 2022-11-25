import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import TutorialesItem from '../componentes/tutoriales/TutorialesItem';
import "../estilos/componentes/paginas/Tutoriales.css"
import TutorialesScript from '../scripts/TutorialesScript.js';

const Tutoriales = (props) => {

    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {

        const cargarPosts = async () => {

            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/tutoriales');
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

                                if (item.tipo === 'tutorial') return <TutorialesItem key={item.id_post} fecha={item.fecha} portada={item.portada} titulo={item.titulo} foto_usuario={item.foto_usuario} nombre_usuario={item.nombre_usuario} cuerpo={item.cuerpo} />
                                else return " ";

                            })

                        )

                    }

                </div>

            </div>

            <TutorialesScript />

        </main>

    );

}

export default Tutoriales;