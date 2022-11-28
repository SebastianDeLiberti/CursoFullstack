import { useEffect } from 'react';


function TutorialesScript () {

   useEffect(() => {

    // Saco el separador de artículo del último elemento

    let article_container = document.getElementsByTagName("article");

    for ( let x = 0 ; x < article_container.length ; x++ ) { 

     if ( x === article_container.length - 1 ) article_container[x].style.borderStyle = "none";

    }

   });

}

export default TutorialesScript;