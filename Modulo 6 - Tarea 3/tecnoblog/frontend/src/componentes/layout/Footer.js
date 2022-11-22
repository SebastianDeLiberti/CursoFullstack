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

                    <img src="imagenes/instagram.png" alt="Instagram"></img>
                    <img src="imagenes/facebook.png" alt="Facebook"></img>
                    <img src="imagenes/twitter.png" alt="Twitter"></img>

                    </div>

                </div>

            </div>

        </footer>

    );

}

export default Footer;