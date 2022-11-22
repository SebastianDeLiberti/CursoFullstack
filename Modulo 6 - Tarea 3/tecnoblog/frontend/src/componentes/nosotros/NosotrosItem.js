import React from 'react';

const NosotrosItem = (props) => {

    const { nombre_usuario, foto_usuario, cuerpo, instagram, facebook, twitter } = props;

    return (

        <article className="article_nosotros">

            <div className="profile_wrapper">

                <img className="user_picture" src={foto_usuario} alt={nombre_usuario}></img>
                <div className="social_media">

                    <a class="link" href={instagram}><img src="imagenes/instagram.png" alt="Instagram"></img></a>
                    <a class="link" href={facebook}><img src="imagenes/facebook.png" alt="Facebook"></img></a>
                    <a class="link" href={twitter}><img src="imagenes/twitter.png" alt="Twitter"></img></a>

                </div>

            </div>

            <div className="text_wrapper">

                <div className="name">{nombre_usuario}</div>
                <div className="text" dangerouslySetInnerHTML={{ __html: cuerpo}} />

            </div>

        </article>

    )

}

export default NosotrosItem;