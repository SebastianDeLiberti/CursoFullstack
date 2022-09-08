var cajas = document.getElementsByClassName("box");

for ( let x = 0 ; x < cajas.length ; x++ ) {

    /* con "onclick"

    cajas[x].onclick = function () {

        document.body.style.backgroundColor = getComputedStyle(cajas[x]).backgroundColor;

    }

    */

    // con "addEventListener"

    cajas[x].addEventListener('click', function () {

        document.body.style.backgroundColor = getComputedStyle(cajas[x]).backgroundColor;

    }, false);

}