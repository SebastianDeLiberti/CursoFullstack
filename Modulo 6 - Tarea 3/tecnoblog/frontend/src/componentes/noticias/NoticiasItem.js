import React from 'react';

const NoticiasItem = (props) => {

    const { fecha, portada, titulo, foto_usuario, nombre_usuario, cuerpo } = props;

    return (

        <article className="article_noticias">

            <div className="title_wrapper"><a className="title" href="/">{titulo}</a></div>

            <div className="info">

                <div className="date">{fecha}</div>

                <div className="user">
                    <div className="user_name">{nombre_usuario}</div>
                    <img className="profile_picture" src={foto_usuario} alt={nombre_usuario}></img>
                </div>

            </div>

            <img className="post_img" src={portada} alt={titulo}></img>

            <div className="text" dangerouslySetInnerHTML={{ __html: cuerpo}} />

        </article>

    )

}

export default NoticiasItem;