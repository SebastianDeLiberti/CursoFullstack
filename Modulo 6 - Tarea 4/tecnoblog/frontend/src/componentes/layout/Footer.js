import React from 'react';

import "../../estilos/componentes/layout/Footer.css"

const Footer = (props) => {

    return(

        <footer>

            <div className="wrapper">

                <div id="footer_content">

                    <div id="text">

                        ©2022 TECNOblog

                    </div>

                    <div id="social_media">

                    <a href="https://www.instagram.com/"><img src="imagenes/instagram.png" alt="Instagram"></img></a>
                    <a href="https://es-la.facebook.com/"><img src="imagenes/facebook.png" alt="Facebook"></img></a>
                    <a href="https://twitter.com/"><img src="imagenes/twitter.png" alt="Twitter"></img></a>

                    </div>

                </div>

            </div>

        </footer>

    );

}

export default Footer;