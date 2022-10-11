// Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto 
// y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste 
// como parametro. Haz varios ejemplos y compruebalos.

// Sugerencia de función:

const animals = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']

function findArrayIndex(array, text) {
  array.forEach((item, i) => {
    if (item === text) {
      console.log(i + ': ' + item);
      //return i; //*return dentro del bucle foreach no funciona
    }
  })
}



/* findArrayIndex(animals, 'Salamandra') */
//console.log(findArrayIndex(animals, 'Caracol'));
findArrayIndex(animals, 'Mosquito');
// findArrayIndex(animals, 'Salamandra');
// findArrayIndex(animals, 'Ajolote');
