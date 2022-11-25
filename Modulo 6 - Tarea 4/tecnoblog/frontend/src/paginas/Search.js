import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import SearchItem from '../componentes/search/SearchItem';
import "../estilos/componentes/paginas/Search.css"
import SearchScript from '../scripts/SearchScript.js';

var actual_url = window.location.href.split('/').pop();

const Search = (props) => {

    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {

        const cargarPosts = async () => {

            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/index');
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

                                if (encodeURI(item.titulo).toLowerCase().includes(actual_url.split("busqueda=").pop().toLowerCase().replaceAll("+", "%20")) ) return <SearchItem key={item.id_post} fecha={item.fecha} portada={item.portada} titulo={item.titulo} foto_usuario={item.foto_usuario} nombre_usuario={item.nombre_usuario} cuerpo={item.cuerpo} />
                                else return "";

                            })

                        )

                    }

                </div>

            </div>

            <SearchScript />

        </main>

    );

}

export default Search;