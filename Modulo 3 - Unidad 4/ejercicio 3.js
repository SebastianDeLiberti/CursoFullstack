var alumnos = [

    {
  
      nombre: 'Juan Gomez',
  
      nota: 7
  
    }, {
  
      nombre: 'Pedro Rodriguez',
  
      nota: 4
  
    }, {
  
      nombre: 'Roxana García',
  
      nota: 8
  
    }, {
  
      nombre: 'Luciano Lopez',
  
      nota: 5
  
    }, {
  
      nombre: 'Fernanda Gimenez',
  
      nota: 6
  
    }, {
  
      nombre: 'Florencia Martinez',
  
      nota: 10
  
    }, {
  
      nombre: 'Raul Sanchez',
  
      nota: 7
  
    }, {
  
      nombre: 'Sandra Figueroa',
  
      nota: 8
  
    }
  
  ];

/* Forma "clásica"

  var aprobados = [];

  for ( let x = 0 ; x < alumnos.length ; x++ ) {

    if ( parseInt(alumnos[x].nota) >= 7 ) aprobados[aprobados.length] = alumnos[x].nombre;    

  }

  document.write('Alumnos aprobados:<br></br>');

  for ( let x = 0 ; x < aprobados.length ; x++ ) {

    document.write(`- ${aprobados[x]}<br></br>`);

  }

*/

// Con métodos de array:

var aprobados = alumnos.filter(function(obj) {
    
    if ( parseInt(obj.nota) >= 7 ) return obj;

});

// Imprimo

  document.write('Alumnos aprobados:<br></br>');

  for ( let x = 0 ; x < aprobados.length ; x++ ) {

    document.write(`- ${aprobados[x].nombre} (${aprobados[x].nota})<br></br>`);

  }
