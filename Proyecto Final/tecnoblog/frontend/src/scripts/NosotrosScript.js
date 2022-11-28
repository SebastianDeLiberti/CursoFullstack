import { useEffect } from 'react';


function NosotrosScript() {

  useEffect(() => {

    // Saco el separador de artículo del último elemento

    let article_container = document.getElementsByTagName("article");

    for (let x = 0; x < article_container.length; x++) {

      if (x === article_container.length - 1) article_container[x].style.borderStyle = "none";

    }

    // Inhabilito links de social media que no uso

    let social_media_a = document.getElementsByClassName("link");

    for (let x = 0; x < social_media_a.length; x++) {

      if (social_media_a[x].href === window.location.href) social_media_a[x].style.display = "none";

    }

  });

}

export default NosotrosScript;