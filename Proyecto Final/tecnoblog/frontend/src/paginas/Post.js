import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import PostItem from '../componentes/post/PostItem';
import "../estilos/componentes/paginas/Post.css";

var actual_url = window.location.href.split('/').pop();

const Post = (props) => {

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

                    <article>

                        {

                            loading ? (

                                <p>Cargando...</p>

                            ) : (

                                posts.map(function (item) {

                                    if (encodeURI(item.titulo) === actual_url) return <PostItem key={item.id_post} fecha={item.fecha} portada={item.portada} titulo={item.titulo} foto_usuario={item.foto_usuario} nombre_usuario={item.nombre_usuario} cuerpo={item.cuerpo} />
                                    else return " ";
    
                                })

                            )

                        }

                    </article>

                </div>

            </div>

        </main>

    );

}

export default Post;