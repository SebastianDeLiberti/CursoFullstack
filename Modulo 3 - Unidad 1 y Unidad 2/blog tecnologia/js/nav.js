// Decidí hacer de forma completa el efecto de hover del nav acá y no parte aca y parte en el css
// por una cuestión de prolijidad. Preferí hacer todos los efectos del nav directamente acá.

var nav = document.getElementById("nav_content");
var nav_a = document.getElementsByClassName("nav_link");

var initial_bckg_color = getComputedStyle(nav).backgroundColor;

// Inicializo

for ( let x = 0 ; x < nav_a.length ; x++ ) { // hover

    if ( ! nav_a[x].className.includes("active") ) {

        nav_a[x].onmouseover = function () {

            nav_a[x].className = "nav_link not_scrolled_hover";

        }

        nav_a[x].onmouseout = function () {

            nav_a[x].className = "nav_link not_scrolled";
            
        }

    }

}

// Efecto de nav al scrollear

document.onscroll = function () {

    if ( parseInt(nav.getBoundingClientRect().top) == 0 ) { // NAV STICKY

        for ( let x = 0 ; x < nav_a.length ; x++ ) { // cambio de estilos

            if ( ! nav_a[x].className.includes("active") ) nav_a[x].className = "nav_link scrolled";
          
        }

        nav.style.backgroundColor = "rgba(0, 0, 0, 0.7)";

        for ( let x = 0 ; x < nav_a.length ; x++ ) { // hover

            if ( ! nav_a[x].className.includes("active") ) {

                nav_a[x].onmouseover = function () {

                    nav_a[x].className = "nav_link scrolled_hover";

                }

                nav_a[x].onmouseout = function () {

                    nav_a[x].className = "nav_link scrolled";
                    
                }

            }

        }
      
    }
    
    else { // NAV NO STICKY
    
        for ( let x = 0 ; x < nav_a.length ; x++ ) { // cambio de estilos

            if ( ! nav_a[x].className.includes("active") ) nav_a[x].className = "nav_link not_scrolled";

        }

        nav.style.backgroundColor = initial_bckg_color;

        for ( let x = 0 ; x < nav_a.length ; x++ ) { // hover

            if ( ! nav_a[x].className.includes("active") ) {

                nav_a[x].onmouseover = function () {

                    nav_a[x].className = "nav_link not_scrolled_hover";

                }

                nav_a[x].onmouseout = function () {

                    nav_a[x].className = "nav_link not_scrolled";
                    
                }

            }

        }
    
    }

}