var text_div = document.getElementById("text");
var resultado = document.getElementById("resultado");

text_div.value = ""; // Para que cuando refresco la pagina me limpie el cuadro de texto

text_div.onkeyup = function () {

    resultado.innerHTML = text_div.value.length;
 
}
