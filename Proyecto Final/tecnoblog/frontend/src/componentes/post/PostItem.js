import React from 'react';

const PostItem = (props) => {

    const { fecha, portada, titulo, foto_usuario, nombre_usuario, cuerpo } = props;

    return (

        <article>

            <h2 id="title">{titulo}</h2>
            <div id="user">

                <img src={foto_usuario} alt={nombre_usuario}></img>
                <div id="container">
                    <div id="name">Por: <span>{nombre_usuario}</span></div>
                    <div id="date">Fecha: <span>{fecha}</span></div>
                </div>

            </div>

            <img id="post_image" src={portada} alt={titulo}></img>
            <div id="body" dangerouslySetInnerHTML={{ __html: cuerpo}} />
            
        </article>

    )

}

export default PostItem;