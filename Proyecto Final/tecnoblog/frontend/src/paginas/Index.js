import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import UltimosPostsItem from '../componentes/index/UltimosPostsItem';
import UltimasNoticiasItem from '../componentes/index/UltimasNoticiasItem';
import UltimosTutorialesItem from '../componentes/index/UltimosTutorialesItem';
import "../estilos/componentes/paginas/Index.css";
import IndexScript from '../scripts/IndexScript.js';


const Index = (props) => {

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

                    <article className="article_index" id="last_posts">

                        <div className="title_wrapper"><div className="title">Últimos posts</div></div>

                        {

                            loading ? (

                                <p>Cargando...</p>

                            ) : (

                                posts.map(item => <UltimosPostsItem key={item.id_post} fecha={item.fecha} portada={item.portada} titulo={item.titulo} />)
                                
                            )
                                
                        }

                    </article>

                    <article className="article_index" id="last_news">

                        <div className="title_wrapper"><div className="title">Últimas noticias</div></div>

                        {

                            loading ? (

                                <p>Cargando...</p>

                            ) : (

                                posts.map(function (item) {

                                    if (item.tipo === 'noticia') return <UltimasNoticiasItem key={item.id_post} fecha={item.fecha} portada={item.portada} titulo={item.titulo} />
                                    else return " ";
                                })

                            )

                        }

                        <div className="view_more_wrapper"><a className="view_more" href="noticias"> Ver más &#8594;</a></div>

                    </article>

                    <article className="article_index" id="last_guides">

                        <div className="title_wrapper"><div className="title">Últimos tutoriales</div></div>

                        {

                            loading ? (

                                <p>Cargando...</p>

                            ) : (

                                posts.map(function (item) {

                                    if (item.tipo === 'tutorial') return <UltimosTutorialesItem key={item.id_post} fecha={item.fecha} portada={item.portada} titulo={item.titulo} />
                                    else return " ";
                                })

                            )

                        }

                        <div className="view_more_wrapper"><a className="view_more" href="tutoriales"> Ver más &#8594;</a></div>

                    </article>

                </div>

            </div>

            {

                loading ? (

                    <p>Cargando...</p>

                ) : (

                    <IndexScript />

                )

            }

        </main>

    );

}

export default Index;