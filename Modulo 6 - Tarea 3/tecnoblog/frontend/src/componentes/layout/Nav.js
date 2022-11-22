import React from 'react';

import "../../estilos/componentes/layout/Nav.css"

import NavScript from '../../scripts/NavScript.js';

import { NavLink } from 'react-router-dom';

const Nav = (props) => {

    return(

        <nav>

            <div className="wrapper">

                <div id="nav_content">

                    <ul>
                        <li><NavLink activeClassName="active" className="nav_link not_scrolled" exact to="/">Inicio</NavLink></li>
                        <li><NavLink activeClassName="active" className="nav_link not_scrolled" exact to="/Noticias">Noticias</NavLink></li>
                        <li><NavLink activeClassName="active" className="nav_link not_scrolled" exact to="/Tutoriales">Tutoriales</NavLink></li>
                        <li><NavLink activeClassName="active" className="nav_link not_scrolled" exact to="/Enlaces">Enlaces de interés</NavLink></li>
                        <li><NavLink activeClassName="active" className="nav_link not_scrolled" exact to="/Nosotros">Nosotros</NavLink></li>
                        <li><NavLink activeClassName="active" className="nav_link not_scrolled" exact to="/Contacto">Contacto</NavLink></li>
                    </ul>

                    

                </div>

            </div>

            <NavScript/>

        </nav>

    );

}

export default Nav;