function numero_mayor (un_array) {

	var resultado, temp_string; // en temp_string almaceno el array en forma de string para mostrar luego

	for ( let x = 0 ; x < un_array.length ; x++ ) {

		if ( x == 0 ) {
		
			resultado = un_array[x];
			temp_string = '[' + ' ' + un_array[x];
		
		}
		
		else {
		
			if ( resultado < un_array[x] ) resultado = un_array[x];
			temp_string = temp_string + ', ' + un_array[x];
		
		}
		
	}
	
	temp_string = temp_string + ' ]';

	console.log (`El array está compuesto por: ${temp_string} ; y el número mas grande es: ${resultado}`);

}

const array1 = [ 1, 3, 16, 2, 9 ];
const array2 = [ 57, 22, 36, 11, 0 ];
const array3 = [ 1, 6, 4, 41, 42, 23 ];
const array4 = [ 1, 106, 4, 22, 74, 0 ];

numero_mayor(array1);
numero_mayor(array2);
numero_mayor(array3);
numero_mayor(array4);