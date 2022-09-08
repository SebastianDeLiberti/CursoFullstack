const distancia = parseInt(prompt ('Ingrese una distancia: '));

if ( distancia < 0 ) console.log ('Distancia inválida!!');
else if ( distancia >= 0 && distancia < 1000 ) console.log ('Pie');
else if ( distancia >= 1000 && distancia < 10000 ) console.log ('Bicicleta'); 
else if ( distancia >= 10000 && distancia < 30000 ) console.log ('Colectivo');
else if ( distancia >= 30000 && distancia < 100000 ) console.log ('Auto');
else console.log ('Avión');
