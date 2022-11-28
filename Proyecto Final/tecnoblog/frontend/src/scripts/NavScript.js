import { useEffect } from 'react';


function NavScript () {

   useEffect(() => {
    
    // Efecto que para cuando escrolleo se coloree el nav

    var nav = document.getElementById("nav_content");
    var nav_a = document.getElementsByClassName("nav_link");

    var initial_bckg_color = getComputedStyle(nav).backgroundColor;

    // Efecto de nav al scrollear

    document.onscroll = function () {

        if ( parseInt(nav.getBoundingClientRect().top) === 0 ) { // NAV STICKY

            for ( let x = 0 ; x < nav_a.length ; x++ ) { // cambio de estilos

                if ( ! nav_a[x].className.includes("active") ) nav_a[x].className = "nav_link scrolled";
            
            }

            nav.style.backgroundColor = "rgba(0, 0, 0, 0.7)";

        }
        
        else { // NAV NO STICKY
        
            for ( let x = 0 ; x < nav_a.length ; x++ ) { // cambio de estilos

                if ( ! nav_a[x].className.includes("active") ) nav_a[x].className = "nav_link not_scrolled";

            }

            nav.style.backgroundColor = initial_bckg_color;

        }

    }

   });

}

export default NavScript;