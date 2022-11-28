import React from 'react';

import "../../estilos/componentes/layout/Header.css"

const Header = (props) => {

    return(

        <header>

            <div className="wrapper">

                <div id="header_content">

                    <img src="imagenes/logo.png" alt="TECNOblog"></img>
                    <h1>TECNOblog</h1>

                </div>

            </div>

        </header>

    );

}

export default Header;